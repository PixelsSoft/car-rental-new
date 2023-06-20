import styled from "styled-components";

export const Button = styled.button`
  width: ${(props) => (props.width ? `${props.width}px` : "100%")};
  padding: ${(props) => props.theme.spacing.s};
  border-radius: 16px;
  border: ${(props) =>
    props.outline ? `1px solid ${props.theme.colors.primary}` : "none"};
  background-color: ${(props) =>
    props.outline ? "transparent" : props.theme.colors.primary};
  color: ${(props) =>
    props.outline ? props.theme.colors.primary : props.theme.colors.white};
  font-size: 16px;
  font-weight: 600;

  margin-top: ${(props) => `${props.mt}px`};
  margin-right: ${(props) => `${props.mr}px`};
  margin-left: ${(props) => `${props.ml}px`};
  margin-bottom: ${(props) => `${props.mb}px`};

  &:hover {
    cursor: pointer;
  }
`;
