//Coding Exercise
//Take the variable roomOne and call the function on it to return the seats remaining.
function movieTheater(){
    var seats = 50;
    var seatsSold = 28;
  
    return{
      remainingSeats: function(){
        return (seats - seatsSold)
      }
    }
  }
  
  roomOne = movieTheater()
  
  // call the remainingSeats function on the instace of movieThearte

  function movieTheater(){
    var seats = 50;
    var seatsSold = 28;
  
    return{
      remainingSeats: function(){
        return (seats - seatsSold);
      }
    };
  }
  
  roomOne = movieTheater();
  console.log(roomOne.remainingSeats());