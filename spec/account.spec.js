const Account = require("../account.js");

describe("Account", () => {
  it("returns the current balance", () => {
    const account = new Account();
    expect(account.balance()).toBe(0);
  });

  it("adds a credit transaction", () => {
    const account = new Account();
    account.credit(100);
    expect(account.balance()).toBe(100);
  });
});
