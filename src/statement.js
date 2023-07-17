class Statement {
  constructor() {}

  showStatement(transactions) {
    console.log("date || credit || debit || balance");

    transactions.forEach((item) => {
      const debit = item.amount < 0 ? item.amount : "";
      const credit = item.amount > 0 ? item.amount : "";
      const date = new Date(item.date);
      const formattedDate = new Intl.DateTimeFormat("en-GB", {
        dateStyle: "short",
      }).format(date);
      console.log(
        `${formattedDate}  ||  ${credit}  || ${debit}  ||  ${item.balance}`
      );
    });
  }
}

module.exports = Statement;
