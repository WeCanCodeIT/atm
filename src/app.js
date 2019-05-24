const input = require("readline-sync");
const chalk = require("chalk");

const CheckingAccount = require("./accounts/checking-account");
const Atm = require("./atm");

const blueText = chalk.blue;

const atm = new Atm();

atm.addAccount(new CheckingAccount("1234", 500));
atm.addAccount(new CheckingAccount("2345", 600));
atm.addAccount(new CheckingAccount("3456", 700));
atm.addAccount(new CheckingAccount("1234", 124321));

console.log(blueText("Welcome to our ATM!\n"));
console.log(`Here are your available accounts:\n`);

atm.accounts.forEach(account => {
  console.log(`${account.accountNumber}: balance ${account.balance}`);
});

const selectedAccount = atm.selectAccount(
  input.question("Please select an account by typing its account number: ")
);

console.log(blueText(selectedAccount));
console.log("What action would you like to perform? ");

// give a list of options for interacting with the selected account
console.log(blueText("-----------------"));

const menuResponse = input.question(
  "1. Withdraw funds\n2. Go back to account selection\n\n> :  "
);

switch (menuResponse) {
  case "1":
    withdrawSelection();
    break;
  case "2":
    console.log("You chose go back");
    break;
  default:
    break;
}

function withdrawSelection() {
  const withdrawalResponse = input.question(
    "How much would you you like to withdraw?\n\n> :  "
  );
  selectedAccount.withdraw(withdrawalResponse);
  console.log(
    `You withdrew ${withdrawalResponse}\nRemaining balance is: ${
      selectedAccount.balance
    }`
  );
}
