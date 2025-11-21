import React, {Component} from 'react'
import Header from "./component/Header同輩狀態共享-狀態提升.jsx";
import Footer from "./component/Footer同輩狀態共享-狀態提升.jsx";

//把要多個子組件要共享的數據，保存到這些子組件的公共父級組件，這就是狀態提升
class App5 extends Component {
    state = {
        num: 100,
    }

    render() {
        return (
            <div>
                <Header num={this.state.num} update={this.updateNum}></Header>
                <Footer num={this.state.num} update={this.updateNum}></Footer>
            </div>
        );
    }
    updateNum =(num) => {
        this.setState({num: num});
    }
}

export default App5;