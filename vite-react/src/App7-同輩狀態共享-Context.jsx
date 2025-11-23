import React, {Component} from 'react'
import Header3 from "./component/Header同輩狀態共享-context.jsx";
import Footer3 from "./component/Footer同輩狀態共享-context.jsx";
import GlobalContext from "./GlobalContext.jsx";


class App7 extends Component {

    state ={
        num: 100
    }


    render() {
        return (
            <GlobalContext.Provider value={{num: this.state.num,
                changeNum: (value)=>{
                this.setState({
                    num: value})
            },cco:(message)=>console.log(message)}
            }>
                <div>
                    <Header3 />
                    <Footer3 />
                </div>
            </GlobalContext.Provider>

        );
    }

}

export default App7;