import React, {useState, useCallback} from 'react';


function App18(){
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    const total = useCallback(() => {
        // 嘗試將 num1 轉成整數，如果不是數字則返回 0
        let n1 = isNaN(parseInt(num1))?0:parseInt(num1)
        // 嘗試將 num2 轉成整數，如果不是數字則返回 0
        let n2 = isNaN(parseInt(num2))?0:parseInt(num2)
        return n1+n2
    },[num1, num2])



    return (
        <div>
            <input type="text" value={num1} onChange={(event)=>setNum1(event.target.value)}/>
            +
            <input type="text" value={num2} onChange={(event)=>setNum2(event.target.value)}/>
            = {total()}
        </div>
    )
}

export default App18;