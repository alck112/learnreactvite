import React, {Component} from 'react';

class Register extends Component {
    accountData = React.createRef();
    passwordData = React.createRef();
    rememberMe = React.createRef();
    render() {
        return (
            <div>
                賬戶：<input type='text' defaultValue={"hi"} ref={this.accountData}/> <br/>
                密碼：<input type='password'ref={this.passwordData} /><br/>
                <input type='checkbox'defaultChecked  ref={this.rememberMe}/> 記住我<br/>
                <input type='submit' value='注冊' />
                <button onClick={()=>this.register()}>注冊</button>
                <button onClick={()=>this.reset()}>重置</button>
            </div>
        );
    }
    register(){
        console.log(`username=${this.accountData.current.value}
        password=${this.passwordData.current.value}
        remember=${this.rememberMe.current.checked}`);
    }
    reset(){
        this.accountData.current.value = "";
        this.passwordData.current.value = "";
        this.rememberMe.current.checked = false;
    }


}

export default Register;