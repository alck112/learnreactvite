import React from 'react';
import Banner from "./component/Banner.jsx";

class App extends React.Component {
    msg = "Hello Message";
    state = {
        number: 0
    }

    render()
    {
        return (
            <div>
                <button onClick={() => {
                    this.setState({ number: this.state.number +1 });
                }}>number = {this.state.number}</button>
                <Banner func={this.change_number} msg={this.msg} num={this.state.number} />
            </div>
        );
    }
    change_number = (num) => {
        this.setState({
            number: num
        });
    }
}

export default App;