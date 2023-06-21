import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  margin-top: ${(props) => props.theme.spacing.m};

  #search-container {
    display: flex;
    align-items: center;
  }
`;
