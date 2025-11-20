import React, {Component} from 'react';

class Banner2 extends Component {
    state = {
        num: this.props.AppNum
    }
    render() {
        return (
            <div>
                <p>輪播</p>
                <button>{this.state.num}</button>
            </div>
        );
    }
}

export default Banner2;