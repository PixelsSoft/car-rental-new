import styled from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: ${({ ml, mb, mr, mt }) => `${mt}px ${mr}px ${mb}px ${ml}px`};
`;

export const THead = styled.th`
  border-bottom: 1px solid ${(props) => props.theme.colors.borders};
  padding-top: ${(props) => props.theme.spacing.s};
  padding-bottom: ${(props) => props.theme.spacing.s};
  text-align: ${(props) => (props.align ? props.align : "start")};
`;

export const TRow = styled.tr`
  border-bottom: 1px solid ${(props) => props.theme.colors.borders};

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    cursor: pointer;
  }
`;

export const TData = styled.td`
  padding-top: ${(props) => props.theme.spacing.m};
  padding-bottom: ${(props) => props.theme.spacing.m};
  text-align: ${(props) => (props.align ? props.align : "start")};
`;

export const TDataAction = styled.td`
  div {
    display: flex;
    align-items: center;
  }
`;
