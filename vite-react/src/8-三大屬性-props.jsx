import React from 'react';
import Banner from "./component/Banner.jsx";

class App extends React.Component {
    msg = "Hello Message";
    state = {
        number: 0
    }
    son = React.createRef();


    render()
    {
        return (
            <div>
                <button onClick={() => {
                    this.setState({ number: this.state.number +1 });
                }}>number = {this.state.number}</button>
                <Banner ref={this.son} func={this.change_number} msg={this.msg} num={this.state.number} />
                {/*父組件也可以通過ref來引用子組件對象, 通過引用對象修改/訪問子組件的信息*/}
                <button onClick={() => {this.son.current.setState({ msg: "Hello World from father!" })}}>click to change the Hello Message from 父組件</button>
                <button onClick={() => {this.son.current.show()}}>click to use 子組件的function from 父組件</button>
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