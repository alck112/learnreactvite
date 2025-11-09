import React, {Component} from 'react';
import "./todolist.css"

class ToDoList extends Component {
    state = {
        tasks: []
    }
    render() {
        return (
            <div className={'todo-list'}>
                <div className={'clear'}>
                    <input type="text"/><button className={'add-btn'}>添加</button>
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
}

export default ToDoList;