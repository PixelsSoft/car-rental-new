import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  padding: ${(props) => props.theme.spacing.l};
  margin-top: ${(props) => props.theme.spacing.xl};
  font-size: 14px;
  height: 900px;
  #totals {
    display: flex;
    flex-direction: column;
    align-items: end;
    margin-top: ${(props) => props.theme.spacing.m};

    div {
      width: 40%;
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
    }
  }
`;

export const InvoiceHead = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const Details = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: ${(props) => props.theme.spacing.m};
`;

export const ItemsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: ${(props) => props.theme.spacing.l};

  th {
    border-bottom: 1px solid ${(props) => props.theme.colors.borders};
    padding-top: ${(props) => props.theme.spacing.s};
    padding-bottom: ${(props) => props.theme.spacing.s};
    background-color: #ffbd2b;
    padding: 10px 10px;
  }

  td {
    padding: 10px 10px;
  }

  tbody {
    border-bottom: 2px solid ${(props) => props.theme.colors.borders};
  }
`;
