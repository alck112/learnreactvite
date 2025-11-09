import React from "react";

class App extends React.Component {
    input = React.createRef()
    render() {
        return <div>
            <input type="text" ref={this.input} onChange={() => {
                this.changeEvent()
            }}/>
        </div>
    }
    changeEvent () {
        console.log(this.input.current.value);
    }
}

export default App;