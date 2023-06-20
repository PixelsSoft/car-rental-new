import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${(props) => props.theme.textVariants.header.fontSize};
  border-bottom: 1px solid ${(props) => props.theme.colors.borders};
  width: 100%;
  padding: ${(props) => props.theme.spacing.m};
`;

export const HeaderTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;
