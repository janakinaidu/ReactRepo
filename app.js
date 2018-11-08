import React from 'react';

class App extends React.Component {
    
    constructor(){
        super();//this will initilizez the 'this';
        this.state={
            message:"this message from state"
        };
        //changing the state;
        //this.updateMessage = this.updateMessage.bind(this);
        this.updateMessage = this.updateMessage.bind(this);
    } 
   
    updateMessage() {
        this.setState({
            message: "my friend (from changed state)!"
        });
    }  
    render() {
        return (
            <div>
            Hello World!!! from React-quickstart!!!
            <h1>{this.props.message}</h1>
            <h1>{this.state.message}</h1>
            <p>above content will change its state if you click the below button</p>
            <button onClick={this.updateMessage}>Click Me</button>
         </div>
    );
    }
}
export default App;