import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Banner extends Component {
    render() {
        return (
            <div>
                接收數據：{this.props.msg} ====>{this.props.num} <br/>
                <button onClick={()=>this.props.func(100)}>click to 100 the above number</button>
            </div>
        );
    }

}



Banner.propTypes = {
    msg: PropTypes.string.isRequired
}

export default Banner;