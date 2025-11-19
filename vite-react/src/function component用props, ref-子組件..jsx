import React,{useRef} from 'react';


// 實際上, 不管class component還是function component, 第一個參數都是props
function Son2({num, msg="hello"}) {
    const btn = useRef(null);
    return (
        <div>
            子組件 {num}. msg={msg}
            <input type={"text"} ref={btn}/>
            <button onClick={() => {
                console.log(btn.current.value);
                btn.current.value = "";
            }}>click to show the input value</button>
        </div>
    );
}

export default Son2;