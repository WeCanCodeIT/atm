const input = require("readline-sync");
const chalk = require("chalk");

const BankAccount = require("./bank-account");

const blueText = chalk.blue;

const checkingAccount = new BankAccount(500);

console.log("Welcome to our ATM!\n");
console.log(
  blueText(`Your current account balance is: ${checkingAccount.balance}\n`)
);

const userInput = input.question("How much would you like to withdraw? ");
checkingAccount.withdrawMultipleOfTen(userInput);

console.log(
  `You withdrew: ${userInput}. The remaining balance is ${
    checkingAccount.balance
  }`
);
