//Coding Exercise
//Create an object called "user". Assign it a username, email, phone and give them values. Console log the data in the same format as the video.
let user = {
    name: 'Katie',
    age: 27,
    city: 'Glasgow'
  };
  
  for (var key in user) {
    console.log(key + " => " + user[key]);
  }