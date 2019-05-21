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

  test("should be able to remove last added account", () => {
    //Arrange
    const account = new BankAccount("1234");
    underTest.addAccount(account);

    //Act
    const removedAccount = underTest.removeLastAccount;

    //Assert
    expect(removedAccount instanceof BankAccount).toBeTruthy();
  });

  test("should return list of accounts", () => {
    //Arrange
    const account = new BankAccount("1234");
    const accountTwo = new BankAccount("1234", 500);
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
});
