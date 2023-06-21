import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: ${(props) => (props.width ? props.width + "px" : "100%")};
  border-radius: 14px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  padding: ${(props) => props.theme.spacing.s};
  margin: ${({ mt, mb, ml, mr }) => `${mt}px ${mr}px ${mb}px ${ml}px`};

  input {
    background-color: ${(props) => props.theme.colors.white};
    border: none;
    font-weight: 500;
    font-size: ${(props) => props.theme.textVariants.body.fontSize};
    cursor: pointer;
    width: 100%;
    font-style: italic;
    color: ${(props) => props.theme.colors.labels};
    flex: 1;
    outline: none;
    margin-right: 5px;
  }
`;

export const IconContainer = styled.div`
  background-color: ${(props) => props.theme.colors.gray};
`;
