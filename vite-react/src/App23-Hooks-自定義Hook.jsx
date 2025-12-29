import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";

/** 1) input hook */
const useInput = (initValue) => {
    const [value, setValue] = useState(initValue);
    return {
        value,
        onChange: (e) => setValue(e.target.value),
    };
};

/**
 * 2) useAxios：只負責「用 axios 發 request」
 * - 你要練 axios，就集中在這裡看
 * - trigger 改變 -> 重新打一次
 */
const useAxios = ({ url, params, enabled, trigger }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // params 如果是物件，建議用 memo 讓引用穩定
    const paramsKey = useMemo(() => JSON.stringify(params || {}), [params]);

    useEffect(() => {
        if (!enabled || !url) return;

        const controller = new AbortController();

        const run = async () => {
            try {
                setLoading(true);
                setError(null);

                const res = await axios.get(url, {
                    params,
                    signal: controller.signal,
                });

                setData(res.data);
            } catch (e) {
                // 被 abort 的 request 不當成錯誤
                if (e?.name === "CanceledError") return;
                setError(e);
                setData(null);
            } finally {
                setLoading(false);
            }
        };

        run();
        return () => controller.abort();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url, paramsKey, enabled, trigger]);

    return { data, loading, error };
};

/**
 * 3) useWeather：只負責「組合流程」
 * ✅ 不寫 axios
 * - 第一步：Geocoding (city -> lat/lon)
 * - 第二步：Forecast (lat/lon -> current weather)
 */
const useWeather = (cityName, trigger) => {
    const city = (cityName || "").trim();

    // A) geocoding
    const geoParams = useMemo(
        () => ({
            name: city,
            count: 1,
            language: "en",
            format: "json",
        }),
        [city]
    );

    const geo = useAxios({
        url: "https://geocoding-api.open-meteo.com/v1/search",
        params: geoParams,
        enabled: trigger > 0 && city.length >= 2,
        trigger,
    });

    const location = geo.data?.results?.[0] || null;

    // B) forecast current weather
    const currentVars = useMemo(
        () =>
            [
                "temperature_2m",
                "relative_humidity_2m",
                "apparent_temperature",
                "weather_code",
                "wind_speed_10m",
                "wind_direction_10m",
            ].join(","),
        []
    );

    const forecastParams = useMemo(
        () =>
            location
                ? {
                    latitude: location.latitude,
                    longitude: location.longitude,
                    current: currentVars,
                    timezone: "auto",
                }
                : null,
        [location, currentVars]
    );

    const forecast = useAxios({
        url: "https://api.open-meteo.com/v1/forecast",
        params: forecastParams,
        enabled: trigger > 0 && !!location,
        trigger,
    });

    const loading = geo.loading || forecast.loading;

    // 「找不到城市」的情況：geo 成功回來但 results 空
    const notFound =
        trigger > 0 && !geo.loading && !geo.error && city.length >= 2 && !location
            ? new Error("找不到這個城市（geocoding 沒回 results）")
            : null;

    const error = geo.error || notFound || forecast.error;

    const data =
        location && forecast.data
            ? {
                location: {
                    name: location.name,
                    country: location.country,
                    latitude: location.latitude,
                    longitude: location.longitude,
                    timezone: location.timezone,
                },
                current: forecast.data.current,
                current_units: forecast.data.current_units,
            }
            : null;

    return { data, loading, error };
};

export default function App23() {
    const city = useInput("Tokyo");
    const [trigger, setTrigger] = useState(0);

    const { data, loading, error } = useWeather(city.value, trigger);

    return (
        <div style={{ padding: 12, maxWidth: 560 }}>
            <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                <input
                    type="text"
                    {...city}
                    placeholder="Enter city name (e.g. Tokyo, Hong Kong, Taipei)"
                    style={{ flex: 1 }}
                />
                <button onClick={() => setTrigger((t) => t + 1)}>查詢</button>
            </div>

            {city.value.trim().length > 0 && city.value.trim().length < 2 && (
                <p style={{ color: "#666" }}>城市至少輸入 2 個字元再查。</p>
            )}

            {loading && <p>Loading...</p>}

            {error && (
                <p style={{ color: "crimson" }}>
                    Error: {error.message || "Request failed"}
                </p>
            )}

            {data && (
                <div>
                    <h3 style={{ margin: "8px 0" }}>
                        {data.location.name}, {data.location.country}
                    </h3>

                    <p>
                        Temperature: {data.current.temperature_2m}{" "}
                        {data.current_units.temperature_2m}
                    </p>
                    <p>
                        Feels like: {data.current.apparent_temperature}{" "}
                        {data.current_units.apparent_temperature}
                    </p>
                    <p>
                        Humidity: {data.current.relative_humidity_2m}{" "}
                        {data.current_units.relative_humidity_2m}
                    </p>
                    <p>
                        Wind: {data.current.wind_speed_10m} {data.current_units.wind_speed_10m}
                    </p>
                    <p>Weather code: {data.current.weather_code}</p>

                    <small>
                        Lat/Lon: {data.location.latitude}, {data.location.longitude}
                    </small>
                </div>
            )}
        </div>
    );
}




