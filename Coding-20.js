//Coding Exercise
//Overwrite the someUser.name value so that it says "Jordan" instead of "Blank".
var someUser = {
    name: 'Blank'
};

function changeName(user) {
    return // write the code to overwrite someUser.name
}

changeName(someUser);
////
var someUser = {
    name: 'Blank'
};

function changeName(user) {
    return user.name = "Jordan";
}

changeName(someUser);