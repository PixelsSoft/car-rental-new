function getDueBalance(customer) {
  if (customer) {
    return customer.invoices.reduce((acc, invoice) => {
      return acc + invoice.amountDue;
    }, 0);
  }
  return "";
}

export default getDueBalance;
