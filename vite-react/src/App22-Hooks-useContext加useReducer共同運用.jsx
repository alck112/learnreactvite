import React, {useReducer, createContext, useContext} from 'react';


/**
 * 创建全局上下文对象，用于在组件树中传递状态
 */
const GlobalContext = createContext()

const reducer = (state, action) => {
    const newState = {...state}
    switch (action.type) {
        case "add":
            newState.num += action.val;
            break
        case "sub":
            newState.num -= action.val;
            break
    }
    return newState
}

const initialState = 100

const init = (initialState) => {
    return {"num": initialState}
}
/**
 * 应用程序主组件
 * 负责管理全局状态并通过Context Provider传递给子组件
 * @returns {JSX.Element} 返回包含Header和Footer组件的应用界面
 */
function App22(){
    // 使用useState钩子创建状态变量num及其更新函数setNum，初始值为100
    // const [num, setNum] = useState(100);
        const [state, dispatch] = useReducer(reducer, initialState, init);

    return (
        <div>
            {/* 使用Context Provider包装子组件，将num和setNum作为value传递 */}
            <GlobalContext.Provider value={{state, dispatch}}>
                <Header />
                <Footer />
            </GlobalContext.Provider>


        </div>
    )
}

/**
 * 头部组件
 * 显示当前数值并提供增加数值的功能
 * @returns {JSX.Element} 返回包含标题、数值显示和增加按钮的头部界面
 */
function Header(){
    // 从全局上下文中获取num状态和setNum更新函数
    const {state, dispatch} = useContext(GlobalContext)
    return (
        <div>
            <h1>Header</h1>
            <p>{state.num}</p>
            {/* 点击按钮时将num值增加1 */}
            <button onClick={()=>dispatch({type: "add", val: 1})}>+1</button>
        </div>
    )
}

/**
 * 底部组件
 * 显示当前数值并提供减少数值的功能
 * @returns {JSX.Element} 返回包含标题、数值显示和减少按钮的底部界面
 */
function Footer(){
    // 从全局上下文中获取num状态和setNum更新函数
    const {state, dispatch} = useContext(GlobalContext)
    return (
        <div>
            <h1>Footer</h1>
            <p>{state.num}</p>
            {/* 点击按钮时将num值减少1 */}
            <button onClick={()=>dispatch({type: "sub", val: 1})}>-1</button>
        </div>
    )
}

export default App22;


