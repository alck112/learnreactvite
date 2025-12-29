import React, {Component} from 'react';
import axios from 'axios';

class App10 extends Component {
    state = {
        city: "1",
        weather_data:[],
    }

    render()
    {
        return (
            <div>
                <input type="text" value={this.state.city} onChange={
                    (e) => this.setState({city: e.target.value})}/>
                <button onClick={()=>this.get_weather()}>查詢</button>
                
            </div>
        );
    }
    get_weather(){
        axios.get("https://jsonplaceholder.typicode.com/todos/" + this.state.city)
            .then(res => console.log(res.data,  res, res.data.title))}
}

export default App10 ;