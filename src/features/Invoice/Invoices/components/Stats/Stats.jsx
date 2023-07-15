import { Container, Stat, Title, Description } from "./Stats.styles";

export default function Stats({
  totalOverdues,
  dueIn30Days,
  totalDueInvoices,
  totalInvoices,
}) {
  console.log(totalOverdues);
  return (
    <Container>
      <Stat>
        <Title>Overdue</Title>
        <Description>${totalOverdues} USD</Description>
      </Stat>

      <Stat>
        <Title>Due within next 30 days</Title>
        <Description>${dueIn30Days} USD</Description>
      </Stat>

      <Stat>
        <Title>Total Due Invoices</Title>
        <Description>{totalDueInvoices}</Description>
      </Stat>

      <Stat>
        <Title>Total Invoices</Title>
        <Description style={{ textDecoration: "underline" }}>
          {totalInvoices}
        </Description>
      </Stat>
    </Container>
  );
}
