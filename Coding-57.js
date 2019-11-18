// Coding Exercise
// Add a paragraph tag inside the parent that has the text content: Hello
<div id='parent'></div>
var para = document.createElement("P");

var pText = document.createTextNode("Hello");

para.appendChild(pText);

document.getElementById("parent").appendChild(para);