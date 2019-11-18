// Coding Exercise
// Using what you've learned so far, insert the quote "Innovation distinguishes between a leader and a follower" into the first div. 
// Then insert the name of the author ("Steve Jobs") into the second div.
<div id="quote"></div>
<div id="author"></div>
var q = document.getElementById("quote");

var t = document.createTextNode("Innovation distinguishes between a leader and a follower");

q.appendChild(t);

var a = document.getElementById("author");

var n = document.createTextNode("Steve Jobs");

a.appendChild(n);