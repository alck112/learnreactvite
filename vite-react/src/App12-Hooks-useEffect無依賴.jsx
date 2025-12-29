import React, {useState, useEffect} from 'react'
import axios from 'axios';

export default function App12() {
    const [count, setCount] = useState(0)
    const [data, setData] = useState([])
    // axios.get("/data.json") //此段代碼會造成無限拎data loop bug
    //     .then(res => setData(res.data))

    //參數1》副作用代碼
    //參數2》依賴陣列-》什麼時候執行，[]空陣列代表沒有任何外部依賴，只需要執行一次
    useEffect(()=>{
        axios.get("/data.json") //用useEffect解決無限 loop bug
            .then(res => setData(res.data))
    }, [])
    return (
        <div>
            <div>App12</div>
            <div>count: {count}</div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(0)}>to 0</button>
            <button onClick={() => setCount(count * 2)}>*2</button>
            <button onClick={() => window.window.location.href="https://google.com"}>go to google</button>

            <table style={{
                width: "600px",
                border: "1px solid red"
            }}>
                <tbody>
                <tr style={{border: "1px solid red"}}>
                    <td>id</td>
                    <td>姓名</td>
                    <td>年齡</td>
                    <td>餘額</td>
                </tr>
                {
                    data.map((item)=>
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.money}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>

    )
}
