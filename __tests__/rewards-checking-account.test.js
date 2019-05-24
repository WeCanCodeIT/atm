const RewardsCheckingAccount = require("../src/accounts/rewards-checking-account");

describe("RewardsCheckingAccount", () => {
  test("should redeem rewards", () => {
    const underTest = new RewardsCheckingAccount("1234", 500);
    underTest.redeem();
    const expected = underTest.balance;
    expect(expected).toEqual(520);
  });
});
