import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  margin-top: ${(props) => props.theme.spacing.l};
  margin-bottom: ${(props) => props.theme.spacing.l};

  #filters {
    display: flex;
  }
`;
export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin-top: 30px;
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.colors.borders};
  padding-top: ${(props) => props.theme.spacing.m};
`;
