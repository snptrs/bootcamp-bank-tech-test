const Account = require("../account.js");

describe("Account", () => {
  it("returns the current balance", () => {
    const account = new Account();
    expect(account.getBalance()).toBe(0);
  });

  it("adds a credit transaction", () => {
    const account = new Account();
    account.addCredit(100);
    expect(account.getBalance()).toBe(100);
  });

  it("adds a debit transaction", () => {
    const account = new Account();
    account.addDebit(100);
    expect(account.getBalance()).toBe(-100);
  });
});
