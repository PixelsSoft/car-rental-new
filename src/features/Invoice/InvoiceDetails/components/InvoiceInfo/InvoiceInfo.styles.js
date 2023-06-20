import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.borders};
  padding: ${(props) => props.theme.spacing.l};
  border-radius: 10px;
  justify-content: space-between;

  margin-top: 20px;
  margin-bottom: ${(props) => props.mb} + "px";
  margin-right: ${(props) => props.mr} + "px";
  margin-left: ${(props) => props.ml} + "px";

  h2 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
    color: ${(props) => props.theme.colors.labels};
  }
`;

export const IconContainer = styled.div`
  border: 1px solid ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  padding: 10px;
`;

export const CardBody = styled.div`
  flex: 1;
  margin-left: 14px;
`;
