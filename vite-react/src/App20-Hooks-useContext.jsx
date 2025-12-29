import React, {useState, createContext, useContext} from 'react';


/**
 * 创建全局上下文对象，用于在组件树中传递状态
 */
const GlobalContext = createContext()

/**
 * 应用程序主组件
 * 负责管理全局状态并通过Context Provider传递给子组件
 * @returns {JSX.Element} 返回包含Header和Footer组件的应用界面
 */
function App20(){
    // 使用useState钩子创建状态变量num及其更新函数setNum，初始值为100
    const [num, setNum] = useState(100);


    return (
        <div>
            {/* 使用Context Provider包装子组件，将num和setNum作为value传递 */}
            <GlobalContext.Provider value={{num, setNum}}>
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
    const {num, setNum} = useContext(GlobalContext)
    return (
        <div>
            <h1>Header</h1>
            <p>{num}</p>
            {/* 点击按钮时将num值增加1 */}
            <button onClick={()=>setNum(num+1)}>+1</button>
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
    const {num, setNum} = useContext(GlobalContext)
    return (
        <div>
            <h1>Footer</h1>
            <p>{num}</p>
            {/* 点击按钮时将num值减少1 */}
            <button onClick={()=>setNum(num-1)}>-1</button>
        </div>
    )
}

export default App20;

 // import React, {
 //     useState,
 //     createContext,
 //     useContext,
 //     useEffect
 // } from 'react';
 //
 // const GlobalContext = createContext();
 //
 // function App20() {
 //     const [num, setNum] = useState(100);

     // useEffect(() => {
     //     const handleKeyDown = (e) => {
     //         if (e.key === '+') {
     //             setNum(prev => prev + 1);
     //         }
     //         if (e.key === '-') {
     //             setNum(prev => prev - 1);
     //         }
     //     };
     //
     //     window.addEventListener('keydown', handleKeyDown);
     //
     //     // 组件卸载时移除监听（非常重要）
     //     return () => {
     //         window.removeEventListener('keydown', handleKeyDown);
     //     };
     // }, []);

//      useEffect(() => {
//          const handleKeyDown = (e) => {
//              // 先排除：你在输入框打字时，不要触发全局加减（可选但强烈推荐）
//              const tag = e.target?.tagName;
//              if (tag === 'INPUT' || tag === 'TEXTAREA' || e.target?.isContentEditable) return;
//
//              if (e.key === '-' || e.code === 'Minus') {
//                  setNum(prev => prev - 1);
//              }
//
//              // + 通常是 Shift + '='，所以用 code 最稳
//              if (e.key === '+' || e.key === '=' || e.code === 'Equal') {
//                  setNum(prev => prev + 1);
//              }
//          };
//
//          window.addEventListener('keydown', handleKeyDown);
//          return () => window.removeEventListener('keydown', handleKeyDown);
//      }, []);
//
//      return (
//          <GlobalContext.Provider value={{ num, setNum }}>
//              <Header />
//              <Footer />
//          </GlobalContext.Provider>
//      );
//  }
//
// /**
//  * 头部组件
//  * 显示当前数值并提供增加数值的功能
//  * @returns {JSX.Element} 返回包含标题、数值显示和增加按钮的头部界面
//  */
// function Header(){
//     // 从全局上下文中获取num状态和setNum更新函数
//     const {num, setNum} = useContext(GlobalContext)
//     return (
//         <div>
//             <h1>Header</h1>
//             <p>{num}</p>
//             {/* 点击按钮时将num值增加1 */}
//             <button onClick={()=>setNum(num+1)}>+1</button>
//         </div>
//     )
// }
//
// /**
//  * 底部组件
//  * 显示当前数值并提供减少数值的功能
//  * @returns {JSX.Element} 返回包含标题、数值显示和减少按钮的底部界面
//  */
// function Footer(){
//     // 从全局上下文中获取num状态和setNum更新函数
//     const {num, setNum} = useContext(GlobalContext)
//     return (
//         <div>
//             <h1>Footer</h1>
//             <p>{num}</p>
//             {/* 点击按钮时将num值减少1 */}
//             <button onClick={()=>setNum(num-1)}>-1</button>
//         </div>
//     )
// }

 // export default App20;


