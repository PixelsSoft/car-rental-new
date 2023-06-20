import { HeaderContainer, HeaderTitle } from "./Header.styles";

export default function Header({ pageTitle, children }) {
  return (
    <HeaderContainer>
      <HeaderTitle>{pageTitle}</HeaderTitle>
      <div style={{ display: "flex", flex: 1, justifyContent: "end" }}>
        {children}
      </div>
    </HeaderContainer>
  );
}
