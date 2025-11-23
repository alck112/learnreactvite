import React, {Component} from 'react';
import GlobalContext from "../GlobalContext.jsx";


class Header3 extends Component {

    render() {
        return (
            <GlobalContext.Consumer>
                {
                    (context)=>{
                        return (
                            <div>
                                <button onClick={()=>{
                                    context.changeNum(context.num+1)}}>修改數據</button>
                                <button onClick={()=>{
                                    context.cco("hello world")}}>console</button>
                                <p>頭部組件 num={context.num}</p>
                            </div>
                        )
                    }
                }
            </GlobalContext.Consumer>

        );
    }
}

export default Header3;