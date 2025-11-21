import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <p>腳部組件 num={this.props.num}</p>
                <button onClick={()=> this.props.update(this.props.num +1)}>click me to +1 the num from Footer</button>


            </div>
        );
    }
}

export default Footer;