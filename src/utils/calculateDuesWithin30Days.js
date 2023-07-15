function calculateDuesWithin30Days(invoices) {
  const currentDate = new Date();
  const next30Days = new Date(currentDate.getTime() + 30 * 24 * 60 * 60 * 1000);

  const duesWithin30Days = invoices.reduce((acc, invoice) => {
    const dueDate = new Date(invoice.dueAt);
    if (dueDate <= next30Days && invoice.status === "due") {
      return acc + invoice.amountDue;
    }
    return acc;
  }, 0);

  return duesWithin30Days.toFixed(2);
}

export default calculateDuesWithin30Days;
