import React from "react";
import Header from "./component/Header.jsx";

class App extends React.Component {
    header = React.createRef()
    input = React.createRef()
    render() {
        return <div>
            <input type="text" ref={this.input}/>
            <Header ref={this.header}></Header>
            <button onClick={() => {
                this.getContent()
            }}>check</button>
        </div>
    }

    getContent () {
        console.log(this.input.current.value)
        console.log(this.header.current)
    }
}

export default App;