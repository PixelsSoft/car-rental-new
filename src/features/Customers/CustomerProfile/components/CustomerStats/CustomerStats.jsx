import { Container, ItemWrap, Label, Desc } from "./CustomerStats.styles";
import { LinkText } from "../../../../../components/custom/Text/Text";
export default function CustomerStats() {
  return (
    <Container>
      <ItemWrap>
        <Label>Paid last 12 months</Label>
        <Desc>$6,075 USD</Desc>
      </ItemWrap>
      <ItemWrap>
        <Label>Total unpaid</Label>
        <Desc>$1000 USD</Desc>
      </ItemWrap>
      <ItemWrap>
        <Label>Last item sent</Label>
        <LinkText>Invoice on May 26</LinkText>
      </ItemWrap>
    </Container>
  );
}
