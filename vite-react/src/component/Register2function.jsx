import React, {Component} from 'react';

class Register2Function extends Component {
    state = {
        username: "oooo",
        password: "123456",
        sex: "male",

    }
    render() {
        return (
            <div>
                賬戶：<input type='text'value={this.state.username} onChange={(e)=> {
                    this.setState({username: e.target.value})
            }}/> <br/>
                密碼：<input type='password' value={this.state.password} onChange={(e)=>{
                    this.setState({password: e.target.value})
            }}/><br/>
                性別:
                <label><input type='checkbox' name="sex" checked={this.state.sex==="male"} onChange={()=> {
                    this.setState({sex:this.state.sex === "male" ? "" : "male"})

                }
                }/>男</label>
                <label><input type='checkbox' name="sex" checked={this.state.sex==="female"} onChange={()=>{
                    this.setState({sex:this.state.sex === "female" ? "" : "female"})


                }
                }/>女</label> <br/>
                <input type='submit' value='注冊' />
                <button onClick={()=>this.register()}>注冊</button>
                <button onClick={()=>this.reset()}>重置</button>
            </div>
        )
    }
    register() {
        console.log(this.state.username);
    }

    reset(){
        this.setState({username: "", password: "", sex:""})
    }
}

export default Register2Function;