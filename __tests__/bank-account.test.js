const BankAccount = require("../src/accounts/bank-account");
const CheckingAccount = require("../src/accounts/checking-account");

describe("BankAccount", () => {
  let underTest;

  test("should throw error on construction of new BankAccount", () => {
    expect(() => new BankAccount("1234")).toThrow(
      "Abstract Object BankAccount must be extended"
    );
  });

  test("should have a balance of 500", () => {
    underTest = new CheckingAccount("1234", 500);
    const expectation = underTest.balance;
    expect(expectation).toEqual(500);
  });

  test("should have a balance of 300", () => {
    underTest = new CheckingAccount("1234", 300);
    const expectation = underTest.balance;
    expect(expectation).toEqual(300);
  });

  test("should have default balance of 250", () => {
    underTest = new CheckingAccount("1234");
    const actual = underTest.balance;
    expect(actual).toEqual(250);
  });

  test("should have a unique account number", () => {
    underTest = new CheckingAccount("1234", 300);
    const actual = underTest.accountNumber;
    expect(actual).toBe("1234");
  });
});
