import React, {Component} from 'react';

class Register extends Component {
    render() {
        return (
            <div>
                賬戶：<input type='text' defaultValue={"hi"}/> <br/>
                密碼：<input type='password'/><br/>
                <input type='checkbox'defaultChecked/> 記住我<br/>
                <input type='submit' value='注冊' />
            </div>
        );
    }
}

export default Register;