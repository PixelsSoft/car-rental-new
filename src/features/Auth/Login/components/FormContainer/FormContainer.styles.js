import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.spacing.l};
  border-radius: 20px;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 68vh;
  justify-content: center;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 100%;
  }
`;
