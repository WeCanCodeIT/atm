const BankAccount = require("../src/bank-account");

describe("BankAccount", () => {
  let underTest;

  test("should have a balance of 500", () => {
    underTest = new BankAccount(500);
    const expectation = underTest.balance;
    expect(expectation).toEqual(500);
  });

  test("should have a balance of 300", () => {
    underTest = new BankAccount(300);
    const expectation = underTest.balance;
    expect(expectation).toEqual(300);
  });

  test("should withdraw 50 when given 50", () => {
    underTest = new BankAccount(5000);
    underTest.withdraw(50);
    const expectation = underTest.balance;
    expect(expectation).toEqual(4950);
  });

  test("should only be able to withdraw multiples of 10", () => {
    underTest = new BankAccount(500);
    expect(() => underTest.withdrawMultipleOfTen(5)).toThrow(
      "Only multiples of 10!"
    );
  });
});
