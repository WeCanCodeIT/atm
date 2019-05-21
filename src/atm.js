class Atm {
  constructor() {
    this._accounts = [];
  }

  addAccount(account) {
    this._accounts.push(account);
  }

  get accounts() {
    return this._accounts;
  }

  get accountsSize() {
    return this._accounts.length;
  }

  get removeLastAccount() {
    return this._accounts.pop();
  }
}

module.exports = Atm;
