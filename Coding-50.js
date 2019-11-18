// Coding Exercise
// With pure JavaScript, remove the class "active" and replace it with "disabled". Hint: You don't need any if - else statements
<div id="heading" class="active">
    "Do, or do not. There is no try."
    - A little green Jedi
</div>

//Heres some starter code
let heading = document.getElementById('heading');

//Write your code here
heading.className = "disabled";