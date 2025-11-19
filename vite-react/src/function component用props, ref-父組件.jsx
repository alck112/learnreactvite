import React, {Component} from 'react';
import Son2 from "./function component用props, ref-子組件..jsx";

class App2 extends Component {
    state = {
        num: 10
    }
    render() {
        return (
            <div>
                <Son2 num={this.state.num} msg={"改你"}></Son2>
            </div>
        );
    }
}

export default App2;