import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: ${(props) => props.theme.spacing.l};
  margin-top: ${(props) => props.theme.spacing.xl};
`;

export const Title = styled.span`
  font-weight: bold;
  color: ${(props) => props.theme.colors.labels};
  font-size: 15px;
`;

export const Description = styled.p`
  font-size: 24px;
`;

export const Wrapper = styled.div``;
