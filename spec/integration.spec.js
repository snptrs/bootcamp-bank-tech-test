const Account = require("../src/account");
const Statement = require("../src/statement");

console.log = jest.fn();

describe("Statement", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("displays an account statement", () => {
    const account = new Account();
    const statement = new Statement();

    account.addTransaction(50);
    account.addTransaction(150);
    account.addTransaction(-25);

    const transactions = account.getTransactions();
    statement.showStatement(transactions);

    expect(console.log.mock.calls.length).toBe(4);
    expect(console.log.mock.calls[3][0]).toBe(
      "17/07/2023  ||      ||   -25   ||  175"
    );
  });
});
