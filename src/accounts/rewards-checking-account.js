const CheckingAccount = require("./checking-account");
const IsRewardable = require("../mixins/is-rewardable");

class RewardsCheckingAccount extends CheckingAccount {
  constructor(accountNumber, balance = 250) {
    super(accountNumber, balance);
    Object.assign(this, IsRewardable);
  }
}

module.exports = RewardsCheckingAccount;
