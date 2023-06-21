import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  width: 300px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
`;

export const Details = styled.div`
  margin-top: ${(props) => props.theme.spacing.m};
  width: 100%;

  #customer-details {
    margin-top: 20px;
  }
`;
