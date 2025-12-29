import React, {Component} from 'react';
import axios from 'axios';

class App11 extends Component {
    state = {
        stu_data: [],
    }
    // componentDidMount() {
    //     this.get_data()
    //
    // }
    get_data() {
        axios.get("/data.json")
            .then(res => this.setState({ stu_data: res.data }))
    }
    render()
    {
        return (
            <div>
                <table style={{
                    width: "600px",
                    border: "1px solid red"
                }}>
                    <tbody>
                    <tr style={{border: "1px solid red"}}>
                        <td>id</td>
                        <td>姓名</td>
                        <td>年齡</td>
                        <td>餘額</td>
                    </tr>
                    {
                        this.state.stu_data.map((item)=>
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.money}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
                <button onClick={()=>this.get_data()}>載入</button>
                <button onClick={()=>this.setState({stu_data:[]})}>清空</button>
            </div>
        );
    }
}

export default App11 ;