const Atm = require("../src/atm");
const BankAccount = require("../src/bank-account");

describe("Atm", () => {
  let underTest;

  beforeEach(() => {
    underTest = new Atm();
  });

  test("should be able to add a BankAccount", () => {
    const account = new BankAccount("1234");
    underTest.addAccount(account);
    expect(underTest.accountsSize).toBe(1);
  });

  test("should be able to remove specific account", () => {
    //Arrange
    const account = new BankAccount("1234");
    underTest.addAccount(account);

    //Act
    const removedAccount = underTest.removeAccount("1234");

    //Assert
    // Array example
    // expect(removedAccount instanceof BankAccount).toBeTruthy();
    expect(removedAccount).toBe(account);
  });

  test("should return list of accounts", () => {
    //Arrange
    const account = new BankAccount("1234");
    const accountTwo = new BankAccount("2345", 500);
    underTest.addAccount(account);
    underTest.addAccount(accountTwo);

    //Act
    const accounts = underTest.accounts;

    //Assert
    //JSON.parse("{"_balance": 250}")
    expect(JSON.stringify(accounts)).toBe(
      JSON.stringify([account, accountTwo])
    );
  });

  test("should return specific account when given acct number", () => {
    //Arrange
    const account = new BankAccount("1234");
    underTest.addAccount(account);

    //Act
    const chosenAccount = underTest.selectAccount("1234");

    expect(chosenAccount).toBe(account);
  });
});
