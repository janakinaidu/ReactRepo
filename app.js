import React from 'react';

class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // This binding is necessary to make `this` work in the callback
      this.handleClickValue = this.handleClickFn.bind(this);
    }
  
    handleClickFn() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
    callFn(){
      console.log("this is="+this);
    }
  
    render() {
      return (
        <div>
      <button onClick={this.handleClickValue}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      <button onClick={callFn}>Click this button</button></div> 
      );
    }
  }
export default Toggle;