
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
let bankAccountsWithWrongBalanceArr = [];
for (const bankAccount of array) {
  
  let sumOfDeposits = 0;
  let sumOfWithdrawals = 0;
  let statedBalance = 0;

  if ('deposits' in bankAccount && Array.isArray(bankAccount.deposits)) {
    for (const deposit of bankAccount.deposits) {
      sumOfDeposits += deposit;
    }
  }

  if ('withdrawals' in bankAccount && Array.isArray(bankAccount.withdrawals)) {
    for (const withdrawal of bankAccount.withdrawals) {
        sumOfWithdrawals += withdrawal;
      }
  }
  let calculatedBalance = sumOfDeposits - sumOfWithdrawals;

  if ('balance' in bankAccount) {
      statedBalance = bankAccount.balance;
  }
  
  if (calculatedBalance !== statedBalance) {
      bankAccountsWithWrongBalanceArr.push(bankAccount);
    }
  }
  return bankAccountsWithWrongBalanceArr;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
