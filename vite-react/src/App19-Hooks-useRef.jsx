import React, {useRef} from 'react';


function App19(){
    const username = useRef();



    return (
        <div>
            <input ref={username} type="text" placeholder="請輸入用戶名"/>
            <br />
            <button onClick={()=>{
                console.log(username.current.value)
            }}>登入</button>

        </div>
    )
}

export default App19;