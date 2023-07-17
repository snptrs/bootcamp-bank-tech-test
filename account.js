class Account {
  constructor() {
    this.transactions = [];
  }

  credit(amount) {
    const transactionDetails = {
      date: Date.now(),
      type: "credit",
      amount: amount,
      balance: this.balance() + amount,
    };
    this.transactions.push(transactionDetails);
  }

  balance() {
    if (this.transactions.length > 0) {
      return this.transactions.at(-1).balance;
    } else {
      return 0;
    }
  }
}
module.exports = Account;
