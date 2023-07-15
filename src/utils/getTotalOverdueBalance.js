function getTotalOverdueBalance(invoices) {
  if (invoices) {
    const totalOverdueBalance = invoices.reduce((acc, invoice) => {
      return acc + (invoice.status === "overdue" ? invoice.amountDue : 0);
    }, 0);

    return totalOverdueBalance.toFixed(2);
  }
}

export default getTotalOverdueBalance;
