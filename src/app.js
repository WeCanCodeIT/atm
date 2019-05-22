const input = require("readline-sync");
const chalk = require("chalk");

const BankAccount = require("./bank-account");
const Atm = require("./atm");

const blueText = chalk.blue;

const atm = new Atm();

atm.addAccount(new BankAccount("1234", 500));
atm.addAccount(new BankAccount("2345", 600));
atm.addAccount(new BankAccount("3456", 700));
atm.addAccount(new BankAccount("1234", 124321));

console.log(blueText("Welcome to our ATM!\n"));
console.log(`Here are your available accounts:\n`);

atm.accounts.forEach(account => {
  console.log(`${account.accountNumber}: balance ${account.balance}`);
});

atm.selectAccount(
  input.question("Please select an account by typing its account number: ")
);

console.log("What action would you like to perform? ");
// const userInput = input.question("How much would you like to withdraw? ");
// checkingAccount.withdrawMultipleOfTen(userInput);

// console.log(
//   `You withdrew: ${userInput}. The remaining balance is ${
//     checkingAccount.balance
//   }`
// );
