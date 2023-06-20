import { StyledLinkText } from "./Text.styles";

export function HeadingText({ children, variant }) {
  return <h1 variant={variant}>{children}</h1>;
}

export function LinkText({
  children,
  ml = 0,
  mr = 0,
  mt = 0,
  mb = 0,
  ...rest
}) {
  return (
    <StyledLinkText ml={ml} mb={mb} mr={mr} mt={mt} {...rest}>
      {children}
    </StyledLinkText>
  );
}
