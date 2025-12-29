import React, {useState, useMemo} from 'react';


function App16(){
    const [state, setState] = useState("初始值");
    const fn = () => {
        console.log("普通函數： ", state);
    };

    //記憶函數
    const memoFn = useMemo(() => {
        return () => console.log("記憶函數： ", state);
    }, [])

    fn();
    memoFn();

    const update = () => {
        setState(Math.random());
    };

    return (
        <div>
            <div>state值：{state}</div>
            <button onClick={update}>更新state</button>
        </div>
    )
}

export default App16;