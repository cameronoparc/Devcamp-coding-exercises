

// Coding Exercise
// You need to check on your bank info but can't get the information to show up. Find the missing code and the one syntax error so the test can pass!
const bank = {
    accountNum: 454812259,
    name: 'John Doe',
    balance: 1257
  }
  
  const bankInfo = ({ name, balance, accountNum}) => {
      return (`Hi ${name}! Your current balance is $${balance}. Account#: ${accountNum}.`);
  }
  
  bankInfo(bank);