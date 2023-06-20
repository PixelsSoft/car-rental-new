import styled from "styled-components";

export const SearchInputContainer = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.borders};
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: ${(props) => props.theme.spacing.s};
  margin: ${(props) => props.theme.spacing.s};
  input {
    flex: 1;
    border: none;
    outline: none;
    margin-left: 6px;
  }
`;
