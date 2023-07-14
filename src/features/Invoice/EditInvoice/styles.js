import styled from "styled-components";

export const Content = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${(props) => props.theme.spacing.m};
`;
