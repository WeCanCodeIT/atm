class BankAccount {
  constructor(accountNumber, balance = 250) {
    this._accountNumber = accountNumber;
    this._balance = balance;
  }

  get accountNumber() {
    return this._accountNumber;
  }

  get balance() {
    return this._balance;
  }

  withdraw(withdrawalAmount) {
    this._balance -= withdrawalAmount;
  }

  withdrawMultipleOfTen(withdrawalAmount) {
    if (withdrawalAmount % 10 !== 0) {
      throw new Error("Only multiples of 10!");
    }
    this.withdraw(withdrawalAmount);
  }
}

module.exports = BankAccount;
