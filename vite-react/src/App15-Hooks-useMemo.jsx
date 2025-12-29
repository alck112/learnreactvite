import React, {useState, useMemo} from 'react';
// 父組件和子組件的發生變化會影響組件重新渲染
// 子組件
// function Box () {
//     const [count, setCount] = useState(1);
//     return (
//         <div>
//             {/*這裡的隨機數是為了驗證組件是否被重新渲染，本身沒有意義的*/}
//             <p>随机数：{Math.random()}</p>
//             <button onClick={() => setCount(count + 1)}>Box子组件的按钮，count={count}</button>
//         </div>
//     )
// }
//
// function App15(){
//     const [count, setCount] = useState(10);
//     return (
//         <div>
//             <button onClick={() => setCount(count + 1)}>App组件的按钮,count={count}</button>
//             <Box></Box>
//         </div>
//     )
// }

function Box () {
    // useState可以緩存數據，每次渲染都會使用上一次的數據
    const [count, setCount] = useState(Math.random());
    const [val, setVal] = useState()
    const [val2, setVal2] = useState()
    const func = Math.random();
    // 可以用useMemo去緩存代碼的執行結果
    // 第一個參數是函數，會被useMemo執行並得到一個緩存結果作為返回值，只會重新執行一次，當依賴的變量改變時才會重新執行
    // 第二個參數是依賴陣列，當聲明了的依賴變量改變時，會才會重新執行參數一的函數，並得到一個新的緩存結果作為返回值尸
    // 如果第二個參數為空陣列，則表示只會在初始化時執行一次。
    const func_cache = useMemo(() => Math.random(), [val])
    const func_cache2 = useMemo(() => Math.random(), [val2])
    return (
        <div>
            <button onClick={() => setVal(Math.random())}>Box子组件的按钮，count={count}</button>
            {/*這裡的隨機數是為了驗證組件是否被重新渲染，本身沒有意義的*/}
            <p>随机数：{func}</p>
            <p>随机数_cache by Memo：{func_cache}</p>
            <p>随机数_cache2 by Memo：{func_cache2}</p>
            <button onClick={() => setCount(count + 1)}>Box子组件的按钮，count={count}</button>
        </div>
    )
}

function App15(){
    const [count, setCount] = useState(10);
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>App组件的按钮,count={count}</button>
            <Box></Box>
        </div>
    )
}

export default App15;