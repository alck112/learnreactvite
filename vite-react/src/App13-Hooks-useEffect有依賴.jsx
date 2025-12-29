
import React,{useState, useEffect} from 'react';
import axios from "axios";

function App13() { // render
    const [city, setCity] = useState("") // 参数是默认值
    const [weatherData, setWeatherData] = useState([])

// useEffect 的第二個參數是「依賴陣列」，用來控制這個 effect 什麼時候要執行。
// 不傳第二參數：每次 render 都跑；傳 []：只在第一次掛載跑一次；傳 [city]：只有 city 改變時才會重跑（也會在第一次掛載跑一次）。
    useEffect(() => {
        axios.get(`https://wttr.in/${city}?format=j1
`).then(response=>{
            // console.log(response.data.city)
            // console.log(response.data)
            if(response.data){
                setWeatherData(response.data)
            }
        }).catch(error=>{
            setWeatherData([])
            console.log(error)
        })
    }, [city]);

    // useEffect(() => {
    //     console.log("weatherData state:", weatherData); // 需要看更新後再加這個
    // }, [weatherData]);

    return (
        <div>
            <input type="text" value={city} onChange={(event)=>setCity(event.target.value)}/>
            <ul>
                    <li>攝氏: {weatherData?.current_condition?.[0]?.temp_C ?? "N/A"}</li>
                    <li>華氏: {weatherData?.current_condition?.[0]?.temp_F ?? "N/A"}</li>

            </ul>
        </div>
    );
}

export default App13;