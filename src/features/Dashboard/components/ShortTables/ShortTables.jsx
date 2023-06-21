import { Table, Container } from "./ShortTabe.styles";

export default function ShortTable() {
  return (
    <Container>
      <h3>Payables & Owings</h3>
      <Table>
        <tr>
          <th>Fiscal Year</th>
          <th>Previous</th>
          <th>Current</th>
        </tr>
        <tr>
          <td>Income</td>
          <td>$0.00</td>
          <td>$0.00</td>
        </tr>
        <tr>
          <td>Expense</td>
          <td>$0.00</td>
          <td>$0.00</td>
        </tr>
        <tr>
          <td>Net Income</td>
          <td>$0.00</td>
          <td>$0.00</td>
        </tr>
      </Table>
    </Container>
  );
}
