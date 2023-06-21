import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.theme.spacing.m};
  border-radius: 10px;
`;

export const ItemWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.strong`
  color: ${(props) => props.theme.colors.labels};
`;

export const Desc = styled.span`
  font-weight: 500;
  margin-top: 10px;
`;
