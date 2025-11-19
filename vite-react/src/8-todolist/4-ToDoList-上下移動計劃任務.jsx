import React, {Component} from 'react';
import "./todolist.css"

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
                                <span onClick={() => {
                                    this.deleteTask(index)
                                }}>删除</span>
                                <span onClick={() => {
                                    this.moveUp(index)
                                }}>↑</span>
                                <span onClick={() => {
                                    this.moveDown(index)
                                }}>↓</span>
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
            alert("please input first!");
            return;
        }
        const tasks = this.state.tasks.concat();
        tasks.unshift(this.taskInput.current.value);
        this.setState({tasks: tasks});
        //清空輸入框原有的內容
        this.taskInput.current.value = "";

        // let newTask = this.taskInput.current.value;
        // const tasks = this.state.tasks.concat(newTask);
        // this.setState({tasks: tasks});

    }

    moveUp(index) {
        // 自己嘅寫法
        // console.log(index);
        // let tempTask = this.state.tasks[index-1];
        // console.log(tempTask);
        // if(index === 0) {
        //     return;
        // }
        // const tasks = this.state.tasks.concat();
        // tasks[index-1] = tasks[index];
        // console.log(tasks[index -1]);
        // // tasks.splice(index, 1);
        // tasks[index] = tempTask;
        // console.log(tasks[index]);
        // this.setState({tasks: tasks}
        // 下面係教學寫法
        //如果當前任務在最頂層，則不需要移動
        if(index === 0) return;
        const tasks = this.state.tasks;
        const task = tasks.splice(index, 1)[0];
        tasks.splice(index-1, 0, task);
        this.setState({
            tasks: tasks
        });
    }

    moveDown(index) {
        // 自己嘅寫法
        // console.log(index);
        // let tempTask = this.state.tasks[index + 1];
        // console.log(tempTask);
        // if(index === this.state.tasks.length - 1) {
        //     return;
        // }
        //
        // const tasks = this.state.tasks.concat();
        // tasks[index+1] = tasks[index];
        // console.log(tasks[index +1]);
        // // tasks.splice(index, 1);
        // tasks[index] = tempTask;
        // console.log(tasks[index]);
        // this.setState({tasks: tasks});
        // 下面係教學寫法
        const tasks = this.state.tasks;
        const task = tasks.splice(index, 1)[0];
        tasks.splice(index+1, 0, task);
        this.setState({
            tasks: tasks
        });
    }

    deleteTask(index) {
        console.log(index);
        console.log(this.state.tasks);
        const tasks = this.state.tasks.concat();
        tasks.splice(index, 1);
        console.log(tasks);
        this.setState({tasks: tasks});
    }
}

export default ToDoList;