import React from "react";
import Header from "./component/Header.jsx";
import Footer from "./component/Footer";

class App extends React.Component {
    constructor() {
        super();
        this.msg = 'msg=內部數據' //聲明組件屬性
    }
    render() {
        return <div>
            <Header></Header>
            <p style={{borderTop:'5px solid red', borderBottom:'10px solid green'}}>組件中的公共部份代碼</p>
            <Footer></Footer>
        </div>
    }

    func1() {
        return "調用同一個class中的method"
    }
}

export default App;