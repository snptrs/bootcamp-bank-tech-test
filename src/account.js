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
