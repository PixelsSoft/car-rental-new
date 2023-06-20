import Menu from "../Menu/Menu";
import { Container } from "./PageLayout.styles";

export default function PageLayout({ children }) {
  return (
    <>
      {/* <Menu /> */}
      <Container>
        <Menu />
        {children}
      </Container>
    </>
  );
}
