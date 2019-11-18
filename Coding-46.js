// Coding Exercise
// Now you're in the market for a new home and need to compare some things first. Instantiate an object called choice1 and set the type to "house". It must return true. Instantiate another object called choice2 and the type must be set to "apartment" and that must return false.
class Home {
	constructor({ type, payment = "renting" }) {
		this.type = type;
		this.payment = payment;
	}

	static homeImprovement(yourHome) {
		return (yourHome.payment === 'mortgage');
	}
}

let choice1 = {type:"house", payment: "mortgage"}; 
let choice2 = {type:"apartment"};