import React, {Component} from 'react';

class App9 extends Component {
    constructor() {//構造函數，是最早執行的生命週期函數
        super();
        //最常情況，設置初始化state
        console.log("constructor run");
    }
    render()
    {
        console.log("render run");
        return (
            <div>

            </div>
        );
    }
}

export default App9 ;