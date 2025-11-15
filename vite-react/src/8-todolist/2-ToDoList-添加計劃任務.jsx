import React, {Component} from 'react';
import "./todolist.css"
import alert from "../component/Alert.jsx";

class ToDoList extends Component {
    state = {
        tasks: []
    }
    taskInput = React.createRef()

    render() {
        return (
            <div className={'todo-list'}>
                <div className={'clear'}>
                    <input type="text" ref={this.taskInput}/>
                    <button className={'add-btn'} onClick={() => {
                        this.addTask()
                    }}>添加
                    </button>
                </div>
                <ul>
                    {this.state.tasks.map((item, index) => {
                        return (
                            <li key={index}>
                                <span>{item}</span>
                                <span>删除</span>
                                <span>↑</span>
                                <span>↓</span>
                            </li>
                        )
                    })}

                    {/*{this.state.tasks.length === 0 ?  <li className={'no-tasks'}><span>暫時沒有任何計劃</span></li>:""}*/}
                    {this.state.tasks.length === 0 && <li className={'no-tasks'}><span>暫時沒有任何計劃</span></li>}

                </ul>

            </div>
        );
    }

    addTask() {
        // console.log(this.taskInput.current.value);
        if(!this.taskInput.current.value.trim()) {
            console.log("please input first!");
            return;
        }
        const tasks = this.state.tasks.concat();
        tasks.unshift(this.taskInput.current.value);
        this.setState({tasks: tasks});
        this.taskInput.current.value = "";

        // let newTask = this.taskInput.current.value;
        // const tasks = this.state.tasks.concat(newTask);
        // this.setState({tasks: tasks});

    }
}

export default ToDoList;