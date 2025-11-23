import React, {Component} from 'react'

class Box extends Component {


    render() {
        return (
            <div style={{
                background: 'gray',
                height: "350px",
                width: "600px",
                top: "400px",
                position: "relative",
                margin: "auto",
                borderRadius: "10px",
                boxShadow: "0px 15px 10px 5px black",
            }}>
                {/*插槽:提取父組件傳遞進來的內容*/}
                {this.props.children[1]}
                {this.props.children[2]}
                {this.props.children[4]}
            </div>
        );
    }

}


class App8 extends Component {

    state ={
        show_box: false,
        num: 100
    }


    render() {
        return (
                <div>
                    <button onClick={()=> {
                        this.setState({show_box:!this.state.show_box})
                    }}>click me to show message</button>
                    {this.state.show_box && <Box>
                        <h1>對不起,屌你</h1>
                        <h1>對不起,屌你 {this.state.num}</h1>
                        <hr/>
                        <h1>對不起,屌你</h1>
                        <p>別搞</p>

                    </Box>}
                </div>


        );
    }

}

export default App8;