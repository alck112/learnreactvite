import React, {Component} from 'react';
import bus from "../bus.js";

class Footer2 extends Component {
    state = {
        num: 100
    }
    componentDidMount() {
        bus.subscribe((value)=>{this.setState({num: value})})
    }

    render() {
        return (
            <div>
                <p>腳部組件 num={this.state.num}</p>
                {/*後發佈*/}
                <button onClick={()=>{
                    bus.publish(this.state.num+1)

                }}>修改數據</button>


            </div>
        );
    }
}

export default Footer2;