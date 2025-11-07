import React, {Component} from 'react';
import Alert from './Alert.jsx'

class Header extends Component {
    render() {
        return (
            <div>
                <h1>公共頭部</h1>
                <Alert />
            </div>
        );
    }
}

export default Header;