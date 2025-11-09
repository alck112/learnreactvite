import React from "react";

class App extends React.Component {

        state = {
            type: "password",
            tips: "顯示密碼"
        }


    render() {
        return <div>
            <input type={this.state.type}/>
            <button onClick={() => {
                this.changeEvent()
            }}>{this.state.tips}</button>
        </div>
    }

    changeEvent () {
        if(this.state.type === "password") {
            this.setState({
                type: "text",
                tips: "隱藏密碼"
            })
        } else {
            this.setState({
                type: "password",
                tips: "顯示密碼"
            })
        }
    }

    }


export default App;