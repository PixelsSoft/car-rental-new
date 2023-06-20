import styled from "styled-components";

export const Container = styled.div`
  margin-left: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${(props) => props.theme.spacing.l};
`;
