import styled from "styled-components";

export const InvoiceContainer = styled.div`
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  padding: ${(props) => props.theme.spacing.m};
  border-radius: 10px;
`;

export const Left = styled.div`
  width: 40%;
`;

export const Right = styled.div`
  width: 40%;
`;

export const AddCustomerBox = styled.div`
  border: 1px solid ${(props) => props.theme.colors.borders};
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 40px;
  padding-top: 40px;
  border-radius: 10px;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    cursor: pointer;
  }
`;

export const InputsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InvoiceTable = styled.table`
  width: 100%;
  margin-top: ${(props) => props.theme.spacing.xl};
  border-collapse: collapse;
  overflow: scroll;
`;

export const THead = styled.th`
  border: 1px solid ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.secondary};
  padding: ${(props) => props.theme.spacing.m};
  width: ${(props) => (props.size ? props.size + "%" : "initial")};
  text-align: start;
`;

export const TRow = styled.tr`
  border-bottom: 1px solid ${(props) => props.theme.colors.borders};
`;

export const TData = styled.td`
  padding: ${(props) => props.theme.spacing.m};
`;
