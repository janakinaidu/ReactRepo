# ReactRepo
ReactJs Basic Examples 

if you have any issues then use the following command to update the npm;
 command: "npm update"
 
 after updating npm,you can use "npm start"

Note:"state is private" and "props are external";

props:
When we need immutable data in our component, we can just add props to reactDOM.render() function in main.js and use it inside our component

**State
Neither parent nor child components can know if a certain component is stateful or stateless, and they shouldn’t care whether it is defined as a function or a class.

**This is why state is often called local or encapsulated. It is not accessible to any component other than the one that owns and sets it.

**A component may choose to pass its state down as props to its child components:
