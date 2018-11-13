# ReactRepo
ReactJs Basic Examples 

Note:
1.Don’t put quotes around curly braces when embedding a JavaScript expression in an attribute. You should either use quotes (for string values) or curly braces (for expressions), but not both in the same attribute.
const element = <img src={user.avatarUrl}></img>;

Warning:
-->Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names.
*****For example, class becomes className in JSX, and tabindex becomes tabIndex.
