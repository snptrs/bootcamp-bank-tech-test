class Account {
  constructor() {
    this.transactions = [];
  }

  addCredit(amount) {
    const transactionDetails = {
      date: Date.now(),
      type: "credit",
      amount: amount,
      balance: this.getBalance() + amount,
    };
    this.transactions.push(transactionDetails);
  }

  addDebit(amount) {
    const transactionDetails = {
      date: Date.now(),
      type: "debit",
      amount: amount,
      balance: this.getBalance() - amount,
    };
    this.transactions.push(transactionDetails);
  }

  getBalance() {
    if (this.transactions.length > 0) {
      return this.transactions.at(-1).balance;
    } else {
      return 0;
    }
  }

  getTransactions() {
    return this.transactions;
  }
}
module.exports = Account;
