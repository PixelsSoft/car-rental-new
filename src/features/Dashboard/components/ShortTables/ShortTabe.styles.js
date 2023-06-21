import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th {
    border-bottom: 2px solid ${(props) => props.theme.colors.borders};
    padding: ${(props) => props.theme.spacing.s};
    text-align: start;
  }

  td {
    padding: ${(props) => props.theme.spacing.s};
    border-bottom: 2px solid #f8f8f8;
  }
`;

export const Container = styled.div`
  width: 50%;
  margin-left: 10px;
`;
