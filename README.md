# ReactRepo
ReactJs Basic Examples 
Explanation of above Program:
------------------------------

*Note:Please Refer the previous branch code to understand this applicaition clearly [reactAppPracticeApp2]
https://github.com/janakinaidu/ReactRepo/tree/reactAppPracticeApp2


**This is commonly called a “top-down” or “unidirectional” data flow. Any state is always owned by some specific component, and any data or UI derived from that state can only affect components “below” them in the tree.

**If you imagine a component tree as a waterfall of props, each component’s state is like an additional water source that joins it at an arbitrary point but also flows down.

**To show that all components are truly isolated, we can create an App component that renders three <Clock>s:
