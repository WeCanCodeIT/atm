class Atm {
  constructor() {
    this._accounts = {};
  }

  addAccount(account) {
    // With an array
    // this._accounts.push(accounts)
    this._accounts[account.accountNumber] = account;
  }

  get accounts() {
    return Object.values(this._accounts);
  }

  get accountsSize() {
    // With an array
    // return this._accounts.length;

    // Static method on the root Object
    return Object.keys(this._accounts).length;
  }

  removeAccount(accountNumberToDelete) {
    const accountToReturn = this._accounts[accountNumberToDelete];

    delete this._accounts[accountNumberToDelete];

    return accountToReturn;
  }

  selectAccount(userAccountNumber) {
    // let accountToReturn;

    // THIS IS BAD! DON'T DO THIS!
    // this._accounts.forEach(account => {
    //   if (account.accountNumber === userAccountNumber) {
    //     accountToReturn = account;
    //   }
    // });

    // This is better but still bad...
    // const accountToReturn = this._accounts.filter(
    //   account => account.accountNumber === userAccountNumber
    // );

    return this._accounts[userAccountNumber];
  }
}

module.exports = Atm;
