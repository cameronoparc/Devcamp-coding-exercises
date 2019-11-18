// Coding Exercise
// In the return below, use Math and spread operators to find the highest number of the highscore array.
function yourTest() {
    const highscore = [237.0198, 256.1, 234.846, 237.21, 256.654];
    
    return (Math.max(...highscore));
}

yourTest();