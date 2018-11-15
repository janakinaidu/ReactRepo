import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './App.js';

function App(){
    return (
        <div>
            <Clock/>
            <Clock/>
            <Clock/>
        </div>
    );
}
//Here we can see the importance of state and aswell as we can treat every javascript functioni
//is also a Component;

ReactDOM.render(<App />, document.getElementById('app'));