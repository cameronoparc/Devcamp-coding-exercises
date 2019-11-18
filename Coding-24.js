//Coding Exercise
//Use 'this' to run the code and determine how many seats are left.

// var seats = {
//     seats: 50,
//     seatsSold: 28,
//     remainingSeats: function(){
//       return ()
//       },
//     enoughSeats: function(){
//       if(this.remainingSeats() > 0){
//         return // use this and seats to return the number of seats left.
//       }
//     }
//   }
  
  
//   seats.remainingSeats()

  /////

var seats = {
  seats: 50,
  seatsSold: 28,
  remainingSeats: function(){
    return (this.seats - this.seatsSold)
    },
  enoughSeats: function(){
    if(this.remainingSeats() > 0){
      return this.seats;// use this and seats to return the number of seats left.
    }
  }
}


seats.remainingSeats()