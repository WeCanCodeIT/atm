class BankAccount {
  constructor(accountNumber, balance = 250) {
    this._accountNumber = accountNumber;
    this._balance = balance;
    // Abstract Objects - can extend but not instantiate
    if (this.constructor === BankAccount) {
      throw new Error("Abstract Object BankAccount must be extended");
    }
  }

  get accountNumber() {
    return this._accountNumber;
  }

  get balance() {
    return this._balance;
  }

  // Abstract Method - contract between parent and child class
  withdraw(withdrawalAmount) {
    throw new Error("Abstract method withdraw must be overridden");
  }

  decreaseBalance(amountToDecrease) {
    this._balance -= amountToDecrease;
  }

  increaseBalance(amountToIncrease) {
    this._balance += amountToIncrease;
  }

  // Overriding parent methods
  toString() {
    return `Account: ${this._accountNumber} has a balance of ${this._balance}`;
  }
}

module.exports = BankAccount;
