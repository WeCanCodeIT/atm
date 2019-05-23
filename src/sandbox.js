const BankAccount = require("./bank-account");
const CheckingAccount = require("./checking-account");

const acct = new CheckingAccount(1234);
const bankAcct = new BankAccount(2345);

console.log("isCheckingAccount", acct instanceof CheckingAccount);
console.log("isBankAccount", acct instanceof BankAccount);
console.log("isObject", acct instanceof Object);

console.log("isCheckingAccount", bankAcct instanceof CheckingAccount);
console.log("isBankAccount", bankAcct instanceof BankAccount);
console.log("isObject", bankAcct instanceof Object);
