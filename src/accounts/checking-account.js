const BankAccount = require("./bank-account");

class CheckingAccount extends BankAccount {
  constructor(accountNumber, balance) {
    super(accountNumber, balance);
    this._minimumBalance = 100;
  }

  get balanceCheck() {
    return this._minimumBalance < this.balance;
  }

  withdraw(withdrawalAmount) {
    if (withdrawalAmount % 10 !== 0) {
      throw new Error("Only multiples of 10!");
    }
    this.decreaseBalance(withdrawalAmount);
  }
}

module.exports = CheckingAccount;
