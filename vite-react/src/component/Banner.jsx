import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Banner extends Component {
    state = {
    msg: "Hello World"
}

    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                接收數據：{this.props.msg} ====>{this.props.num} <br/>
                <button onClick={()=>this.props.func(100)}>click to 100 the above number</button>
            </div>
        );
    }

    show () {
        console.log("show????");
    }

}



Banner.propTypes = {
    msg: PropTypes.string.isRequired
}

export default Banner;