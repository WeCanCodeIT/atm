const BankAccount = require("./bank-account");

class CheckingAccount extends BankAccount {
  constructor(accountNumber, balance) {
    super(accountNumber, balance);
    this._minimumBalance = 100;
  }

  get balanceCheck() {
    return this._minimumBalance < this.balance;
  }
}

module.exports = CheckingAccount;
