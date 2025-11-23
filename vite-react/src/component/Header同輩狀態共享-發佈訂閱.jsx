import React, {Component} from 'react';
import bus from "../bus.js";

class Header3 extends Component {
    state = {
        num: 100
    }
    componentDidMount() {
        //先訂閱
        bus.subscribe((value)=>{this.setState({num: value})})
    }
    render() {
        return (
            <div>                {/*後發佈*/}
                <button onClick={()=>{
                    bus.publish(this.state.num-1)}}>修改數據</button>
                <p>頭部組件 num={this.state.num}</p>
            </div>
        );
    }
}

export default Header3;