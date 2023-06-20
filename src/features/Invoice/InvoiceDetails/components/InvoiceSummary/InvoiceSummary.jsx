import Status from "../../../../../components/custom/Status/Status";
import STATUS from "../../../../../constants/status";
import {
  Container,
  Title,
  Description,
  Wrapper,
} from "./InvoiceSummary.styles";

export default function InvoiceSummary() {
  return (
    <Container>
      <Wrapper>
        <Title>Status</Title>
        <Status status={STATUS.OVERDUE} />
      </Wrapper>

      <Wrapper>
        <Title>Customer</Title>
        <Description>Anishka Mackey</Description>
      </Wrapper>

      <Wrapper>
        <Title>Amount Due</Title>
        <Description>$200.00</Description>
      </Wrapper>

      <Wrapper>
        <Title>Due on</Title>
        <Description>May 25, 2023</Description>
      </Wrapper>
    </Container>
  );
}
