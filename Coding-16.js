//Coding Exercise
//Create a condition that allows a 15 year old to get a permit, but can't get a license.
function kid() {
    age = GiveYourKidAnAge;
    
    if (EnterYourConditionsHere) {
        return true;
    }
}
////
function kid() {
    age = 16;
    
    if (age >= 16) {
        return true;
    }
    else if (age === 15) {
        return "You can a permit, but not a license";
    }
    else if (age < 15) {
        return false;
    }
    
}