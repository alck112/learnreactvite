import React, {Component} from 'react';
import GlobalContext from "../GlobalContext.jsx";


class Footer3 extends Component {



    render() {
        return (
            <GlobalContext.Consumer>
                {
                    (context)=>{
                        return (
                            <div>
                                <p>腳部組件 num={context.num}</p>

                                <button onClick={()=>
                                    context.changeNum(context.num-1)}>修改數據</button>


                            </div>
                        )
                    }
                }

            </GlobalContext.Consumer>

        );
    }
}

export default Footer3;