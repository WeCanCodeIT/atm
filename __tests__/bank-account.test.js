const BankAccount = require("../src/bank-account");

describe("BankAccount", () => {
  let underTest;

  test("should have a balance of 500", () => {
    underTest = new BankAccount("1234", 500);
    const expectation = underTest.balance;
    expect(expectation).toEqual(500);
  });

  test("should have a balance of 300", () => {
    underTest = new BankAccount("1234", 300);
    const expectation = underTest.balance;
    expect(expectation).toEqual(300);
  });

  test("should withdraw 50 when given 50", () => {
    underTest = new BankAccount("1234", 5000);
    underTest.withdraw(50);
    const expectation = underTest.balance;
    expect(expectation).toEqual(4950);
  });

  test("should only be able to withdraw multiples of 10", () => {
    underTest = new BankAccount("1234", 500);
    expect(() => underTest.withdrawMultipleOfTen(5)).toThrow(
      "Only multiples of 10!"
    );
  });

  test("should have default balance of 250", () => {
    underTest = new BankAccount("1234");
    const actual = underTest.balance;
    expect(actual).toEqual(250);
  });

  test("should have a unique account number", () => {
    underTest = new BankAccount("1234", 300);
    const actual = underTest.accountNumber;
    expect(actual).toBe("1234");
  });
});
