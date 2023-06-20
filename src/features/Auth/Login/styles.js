import styled from "styled-components";

export const PageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const LoginForm = styled.form`
  width: 100%;
`;
