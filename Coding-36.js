//Coding Exercise
//In the below functions return, make your string interpolation and conditional that returns "1 point", when the ship variable is set to "hit" and when the variable is set to anything else (aka, a "miss"), have it return "You lost a point".
// Fill in the below code with your requirements

var ship = "hit";

function battleShip() {
    const point = "1 point"
    if (ship === "hit")
  return(point)
  else 
  return("You lost a point")
}