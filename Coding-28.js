//Coding Exercise
//Create an array called "members" with 5 elements. Write a for loop that iterates through the array and console logs each member
var members = [
    'Altuve',
    'Bregman',
    'Correa',
    'Springer',
    'Dragon'
  ];
  
  for (member in members) {
    console.log(members[member]);
  }
  
  for (var i = 0; i < members.length; i++) {
    console.log(members[i]);
  }
  
  members.forEach(function(element) {
    console.log(element);
  });