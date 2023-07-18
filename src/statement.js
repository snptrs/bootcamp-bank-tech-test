class Statement {
  constructor() {}

  showStatement(transactions) {
    console.log("date        || credit || debit || balance");

    if (transactions) {
      transactions.forEach((item) => {
        // Convert all amounts to floats with 2 decimal places
        const debit =
          item.amount < 0 ? Number.parseFloat(item.amount).toFixed(2) : "";
        const credit =
          item.amount > 0 ? Number.parseFloat(item.amount).toFixed(2) : "";
        const balance = Number.parseFloat(item.balance).toFixed(2);

        const date = new Date(item.date);
        const formattedDate = new Intl.DateTimeFormat("en-GB", {
          dateStyle: "short",
        }).format(date);

        console.log(
          `${formattedDate}  ||   ${credit}   ||   ${debit}   ||  ${balance}`
        );
      });
    }
  }
}

module.exports = Statement;
