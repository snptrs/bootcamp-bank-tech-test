const Account = require("../src/account");

describe("Account", () => {
  it("returns the current balance", () => {
    const account = new Account();
    expect(account.getBalance()).toBe(0);
  });

  it("adds a credit transaction", () => {
    const account = new Account();
    account.addTransaction(100);
    expect(account.getBalance()).toBe(100);
  });

  it("adds a debit transaction", () => {
    const account = new Account();
    account.addTransaction(-100);
    expect(account.getBalance()).toBe(-100);
  });

  it("returns all transactions", () => {
    const account = new Account();
    account.addTransaction(100);
    account.addTransaction(-20);
    expect(account.getTransactions().length).toBe(2);
    expect(account.getTransactions()[0].amount).toBe(100);
  });
});
