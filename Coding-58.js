// Coding Exercise
// Inside the div below, insert a span tag that has a class name of content and says "You got this!".
<div id="wrapper"></div>

const spanner = document.createElement("SPAN");
spanner.classList.add("content");
const text_span = document.createTextNode("You got this!");
spanner.appendChild(text_span);
const wrapper_grab = document.getElementById("wrapper");
wrapper_grab.appendChild(spanner);