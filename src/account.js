class Account {
  constructor() {
    this.transactions = [];
  }

  addTransaction(amount) {
    const transactionDetails = {
      date: Date.now(),
      amount: amount,
      balance: this.getBalance() + amount,
    };
    this.transactions.push(transactionDetails);
  }

  getBalance() {
    // If there's at least one transaction in the array, return the balance
    // from the latest transaction. Otherwise, balance is 0.
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
