import styled from "styled-components";

export const Content = styled.div`
  width: 80%;
`;

export const OverviewSection = styled.div`
  width: 100%;
  padding: ${(props) => props.theme.spacing.m};
  border-bottom: 1px solid ${(props) => props.theme.colors.borders};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: small;
`;
