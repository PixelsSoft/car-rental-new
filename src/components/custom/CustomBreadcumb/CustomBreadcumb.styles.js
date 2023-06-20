import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
  padding: ${(props) => props.theme.spacing.s};
  border-radius: 10px;
  width: fit-content;
`;

export const Item = styled.div`
  /* font-weight: ${(props) => (props.isActive ? "700" : "400")}; */
`;

export const ItemWrap = styled.div`
  margin: ${(props) => props.theme.spacing.s};
  border-radius: 10px;
  display: flex;
  padding: ${(props) => props.theme.spacing.s};
  cursor: pointer;
  font-weight: ${(props) => (props.isActive ? "700" : "400")};
  background-color: ${(props) =>
    props.isActive ? props.theme.colors.white : "transparent"};
  box-shadow: ${(props) =>
    props.isActive
      ? "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)"
      : null};
`;

export const ItemCount = styled.span`
  background-color: ${(props) => props.theme.colors.foreground};
  padding: 3px 6px;
  font-size: 14px;
  font-weight: 700;
  margin-left: 5px;
  border-radius: 10px;
`;
