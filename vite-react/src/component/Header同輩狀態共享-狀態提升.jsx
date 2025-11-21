import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <button onClick={()=> this.props.update(this.props.num +1)}>click me to +1 the num from Header</button>
                <p>頭部組件 num={this.props.num}</p>
            </div>
        );
    }
}

export default Header;