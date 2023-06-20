import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.theme.spacing.xl};
  border: 1px solid ${(props) => props.theme.colors.borders};
  width: 100%;
  border-radius: 14px;
  margin-top: ${(props) => props.theme.spacing.l};
`;

export const Stat = styled.div``;

export const Title = styled.h2`
  font-size: 14px;
  color: ${(props) => props.theme.colors.labels};
`;

export const Description = styled.p`
  font-size: 24px;
  margin-top: ${(props) => props.theme.spacing.m};
`;
