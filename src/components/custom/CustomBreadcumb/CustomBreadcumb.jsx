import { Container, ItemWrap, Item, ItemCount } from "./CustomBreadcumb.styles";

export default function CustomBreadCumb({ items = [] }) {
  return (
    <Container>
      {items.map((item) => (
        <ItemWrap isActive={true}>
          <Item>{item.title}</Item>
          {item.count ? <ItemCount>{item.count}</ItemCount> : null}
        </ItemWrap>
      ))}
    </Container>
  );
}
