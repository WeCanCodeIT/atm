const CheckingAccount = require("../src/checking-account");

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
    underTest.withdrawMultipleOfTen(910);
    const isAboveMinimumBalance = underTest.balanceCheck;

    expect(isAboveMinimumBalance).toBeFalsy();
  });
});
