import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  margin-top: ${(props) => props.theme.spacing.l};
  margin-bottom: ${(props) => props.theme.spacing.l};

  #filters {
    display: flex;
  }
`;
