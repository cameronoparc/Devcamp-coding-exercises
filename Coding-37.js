// Coding Exercise
// Use a function expression called userInfo with three arguments for city, state, and zip. It must return Lehi, UT 84043.
userInfo = (city, state, zip) => { 
  return `${city}, ${state} ${zip}`;
};
userInfo("Lehi", "UT", "84043");