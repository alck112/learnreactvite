import React from "react";


class App extends React.Component {
    render() {
        return <div>
            <button onClick={()=> {console.log('You\'ve clicked me')}}>click me!</button>
        </div>
    }

    func1() {
        return "調用同一個class中的method"
    }
}

export default App;