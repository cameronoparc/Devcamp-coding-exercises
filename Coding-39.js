// Coding Exercise
// Inside the below function, swap the values of right lane and left lane.
function roadRage() {
    let rightLane = "Chevy";
    let leftLane = "Honda";
    
    let temprightLane = rightLane;
    let templeftLane = leftLane;

    rightLane = templeftLane;
    leftLane = temprightLane;

    [rightLane, leftLane] = [leftLane, rightLane];
    
    return (`That ${rightLane} and ${leftLane} won't pick a lane`)
}

roadRage();