import styled from "styled-components";

export const ModalContainer = styled.div`
  padding: ${(props) => props.theme.spacing.m};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors.borders};
  padding: ${(props) => props.theme.spacing.s};
  margin-bottom: ${(props) => props.theme.spacing.m};
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
