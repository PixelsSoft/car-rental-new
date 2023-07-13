import Status from "../../../../../components/custom/Status/Status";
import moment from "moment";

import {
  Container,
  Title,
  Description,
  Wrapper,
} from "./InvoiceSummary.styles";

export default function InvoiceSummary({ status, customer, amountDue, dueAt }) {
  return (
    <Container>
      <Wrapper>
        <Title>Status</Title>
        <Status status={status} />
      </Wrapper>

      <Wrapper>
        <Title>Customer</Title>
        <Description>{customer}</Description>
      </Wrapper>

      <Wrapper>
        <Title>Amount Due</Title>
        <Description>${amountDue}</Description>
      </Wrapper>

      <Wrapper>
        <Title>Due on</Title>
        <Description>{moment(dueAt).format("LL")}</Description>
      </Wrapper>
    </Container>
  );
}
