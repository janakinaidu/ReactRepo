# ReactRepo
ReactJs Basic Examples 

if you have any issues then use the following command to update the npm;
 command: "npm update"
 
 after updating npm,you can use "npm start"


ReactStandardApiApps
Note About JSX:
1.Don’t put quotes around curly braces when embedding a JavaScript expression in an attribute. You should either use quotes (for string values) or curly braces (for expressions), but not both in the same attribute.
const element = <img src={user.avatarUrl}></img>;

Warning:
-->Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names.
*****For example, class becomes className in JSX, and tabindex becomes tabIndex.

JSX Prevents Injection Attacks:
===============================
By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.

Rendering an Element into the DOM:
----------------------------------
-->Applications built with just React usually have a single root DOM node.

<div id="root"></div>
-->To render a React element into a root DOM node, pass both to ReactDOM.render():


const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));

**Components and Props**
=========================
-->*Components let you split the UI into independent, reusable pieces, and think about each piece in isolation*.
**Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

Function and Class Components:
==============================
**The simplest way to define a component is to write a JavaScript function:

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element. We call such components “function components” because they are literally JavaScript functions.

**You can also use an ES6 class to define a component:

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

**The above two components are equivalent from React’s point of view.

**Note:**Note: Always start component names with a capital letter.**********
*React treats components starting with lowercase letters as DOM tags. For example, <div /> represents an HTML div tag, but <Welcome /> represents a component and requires Welcome to be in scope.

**Composing Components
======================
->A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components.


**Collected(from doc) BY Janakinaidu
source:* https://reactjs.org/docs/components-and-props.html
