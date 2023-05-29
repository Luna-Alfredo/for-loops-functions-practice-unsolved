
// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [3432, 43242.34, 23432]

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  // Your code goes here...
let bankAccountsWithdepositsOfLessThan2000or0 = [];

  for (const bankAccount of array) {
    if ('deposits' in bankAccount && Array.isArray(bankAccount.deposits)) {
      let sumOfDeposits = 0;
      for (const deposit of bankAccount.deposits) {
        sumOfDeposits += deposit;
      }
      if (sumOfDeposits < 2000 || sumOfDeposits === 0) {
        bankAccountsWithdepositsOfLessThan2000or0.push(bankAccount);
      }
    } else if (!('deposits' in bankAccount) || (Array.isArray(bankAccount.deposits) && bankAccount.deposits.length === 0)) {
      bankAccountsWithdepositsOfLessThan2000or0.push(bankAccount);
    }
  }

  return bankAccountsWithdepositsOfLessThan2000or0;

}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
