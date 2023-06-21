import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${(props) => props.mt + "px"};
  margin-left: ${(props) => props.ml + "px"};
  margin-right: ${(props) => props.mr + "px"};
  margin-bottom: ${(props) => props.mb + "px"};
  width: ${(props) => (props.width ? props.width : "100%")};
`;

export const Label = styled.label`
  font-weight: 700;
  color: ${(props) => props.theme.colors.labels};
  font-size: 14px;
  margin-right: 10px;
  width: 50%;
`;
