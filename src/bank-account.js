class BankAccount {
  constructor(balance) {
    this._balance = balance;
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
