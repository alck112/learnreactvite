import React, {Component} from 'react'
import Register from "./component/Register.jsx";
import Register2Function from "./component/Register2function.jsx";

class App3 extends Component {
    state = {
        AppNum: 100,
    }
    render() {
        return (
            <div>
                {/*<Register num={this.state.AppNum} />*/}
                <Register2Function></Register2Function>
            </div>
        );
    }
}

export default App3;