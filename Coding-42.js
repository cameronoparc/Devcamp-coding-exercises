// Coding Exercise
// Write an object called user with an attribute for username and status. You may set the username to whatever string you'd like but the status must be set to "away". Then, write a function called loginEvent that changes the users status to "active". (Instead of a console.log use return). It must return "your_username is active"
const user = {
    username: 'Blarg',
    status: 'away'
  };
  
  const loginEvent = ({username}, status = "active") => {
    return(`
      ${username} is ${status}
    `);
  };
loginEvent(user);