const Statement = require("../src/statement");
console.log = jest.fn();

describe("Statement", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("just prints header row when there are no transactions", () => {
    const statement = new Statement();
    statement.showStatement([]);
    expect(console.log).toHaveBeenCalledWith(
      "date        || credit || debit || balance"
    );
  });

  it("prints header row and one debit transaction", () => {
    const transaction = {
      date: 1688579206000,
      amount: -50,
      balance: -50,
    };

    const statement = new Statement();
    statement.showStatement([transaction]);
    expect(console.log.mock.calls[0][0]).toBe(
      "date        || credit || debit || balance"
    );
    expect(console.log.mock.calls[1][0]).toBe(
      `05/07/2023  ||      ||   -50.00   ||  -50.00`
    );
  });

  it("prints header row and one credit transaction", () => {
    const transaction = {
      date: 1688579206000,
      amount: 50,
      balance: 50,
    };

    const statement = new Statement();
    statement.showStatement([transaction]);
    expect(console.log.mock.calls[0][0]).toBe(
      "date        || credit || debit || balance"
    );
    expect(console.log.mock.calls[1][0]).toBe(
      `05/07/2023  ||   50.00   ||      ||  50.00`
    );
  });

  it("prints header row and two credit transactions", () => {
    const transaction1 = {
      date: 1688579206000,
      amount: 50,
      balance: 50,
    };

    const transaction2 = {
      date: 1689011206000,
      amount: -10,
      balance: 40,
    };

    const statement = new Statement();
    statement.showStatement([transaction1, transaction2]);
    expect(console.log.mock.calls[0][0]).toBe(
      "date        || credit || debit || balance"
    );
    expect(console.log.mock.calls[1][0]).toBe(
      `05/07/2023  ||   50.00   ||      ||  50.00`
    );
    expect(console.log.mock.calls[2][0]).toBe(
      `10/07/2023  ||      ||   -10.00   ||  40.00`
    );
  });
});
