const CheckingAccount = require("../src/accounts/checking-account");

describe("CheckingAccount", () => {
  let underTest;

  beforeEach(() => {
    underTest = new CheckingAccount("1234", 1000);
  });

  test("should have be above minimum balance", () => {
    //Arrange

    //Act
    const isAboveMinimumBalance = underTest.balanceCheck;

    //Assert
    expect(isAboveMinimumBalance).toBeTruthy();
  });

  test("should return false when below minimum balance", () => {
    underTest.withdraw(910);
    const isAboveMinimumBalance = underTest.balanceCheck;

    expect(isAboveMinimumBalance).toBeFalsy();
  });
});
