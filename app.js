import React from 'react';

class App extends React.Component {
	
	constructor(props){
		super(props);
		this.state={
			 header: "Header from props...",
			 content: "Content from props..."
		}
	}
	
    render() {
		
		var myStyle = {
         fontSize: 100,
         color: '#FF0000'
        }
		
        return (
            <div>
			<h1 style={myStyle}>Displaying some Text with styles</h1>
            <Header headerProp = {this.state.header}/>
            <Content contentProp = {this.state.content}/>
        </div>
    );
    }
}
class Header extends React.Component{
	render(){
		return (
			<div>
				<h1>{this.props.headerProp}</h1>
			</div>
		
		);
	}
}
class Content extends React.Component{
	render(){
		return (
			<div>
				<h1>{this.props.contentProp}</h1>
			</div>
		);
	}
}
export default App;