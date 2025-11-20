import React, {Component} from 'react'
import Register from "./component/Register.jsx";

class App3 extends Component {
    state = {
        AppNum: 100,
    }
    render() {
        return (
            <div>
                <Register num={this.state.AppNum} />
            </div>
        );
    }
}

export default App3;