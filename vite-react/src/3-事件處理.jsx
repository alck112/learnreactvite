import React from "react";


class App extends React.Component {
    render() {
        return <div onClick={() => {
            console.log(this.func3())
        }}>
            <button onClick={()=> {console.log('You\'ve clicked me')}}>click me!</button><br/>
            <p onClick={(event) => {
                console.log(this.func1(event))
            }}>
                click me pls!
            </p>
        </div>
    }

    func1(event) {
        event.stopPropagation()
        return "調用同一個class中的method"
    }

    func3() {
        return "fn3 has triggered"
    }
}

export default App;