import React, {useState, useMemo} from 'react';


function App17(){
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

// * useMemo 的作用：
// * - 緩存計算結果，避免每次渲染都重新計算
//     * - 只有當依賴項（num1 或 num2）改變時，才會重新執行計算
//     *
//     * 為什麼需要 useMemo？
// * - React 組件每次狀態改變都會重新渲染
//     * - 如果計算很複雜，重複計算會影響性能
//     * - 對於這個簡單例子，其實不用 useMemo 也可以，這裡主要是教學示範
    const total = useMemo(() => {
        // 嘗試將 num1 轉成整數，如果不是數字則返回 0
        let n1 = isNaN(parseInt(num1))?0:parseInt(num1)
        // 嘗試將 num2 轉成整數，如果不是數字則返回 0
        let n2 = isNaN(parseInt(num2))?0:parseInt(num2)
        return n1+n2
    }, [num1, num2]);


    return (
        <div>
            <input type="text" value={num1} onChange={(event)=>setNum1(event.target.value)}/>
            +
            <input type="text" value={num2} onChange={(event)=>setNum2(event.target.value)}/>
            = {total}
        </div>
    )
}

export default App17;