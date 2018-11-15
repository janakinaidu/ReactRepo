import React from 'react';

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = { currentDate: new Date() };
    }
    componentDidMount() {
        console.log("this statement was executed after DOM rendered by the Clock class");
        this.timerID = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
        console.log("this statement was executed after DOM destroyed");
    }
    tick() {
        this.setState({
            currentDate: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello Welcome to  reactAppPracticeApp2.</h1>
                <h2>It is {this.state.currentDate.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
export default Clock;