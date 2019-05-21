const input = require("readline-sync");
const chalk = require("chalk");

const BankAccount = require("./bank-account");
const Atm = require("./atm");

const blueText = chalk.blue;

const atm = new Atm();
const account = new BankAccount("1234", 500);
const account2 = new BankAccount("2345", 600);
const account3 = new BankAccount("3456", 700);

atm.addAccount(account);
atm.addAccount(account2);
atm.addAccount(account3);
atm.addAccount(new BankAccount("666", 124321));

console.log("Welcome to our ATM!\n");
console.log(`Here are your available accounts:\n`);

atm.accounts.forEach(account => {
  console.log(`${account.accountNumber}: balance ${account.balance}`);
});

atm.selectAccount(
  input("Please select an account by typing its account number: ")
);

console.log("What action would you like to perform? ");
// const userInput = input.question("How much would you like to withdraw? ");
// checkingAccount.withdrawMultipleOfTen(userInput);

// console.log(
//   `You withdrew: ${userInput}. The remaining balance is ${
//     checkingAccount.balance
//   }`
// );
