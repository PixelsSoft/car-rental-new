import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  align-items: ${(props) => (props.row ? "center" : "start")};
  justify-content: ${(props) =>
    props.row ? "space-between" : "justify-start"};
  width: ${(props) => (props.width ? props.width : "100%")};
  margin-top: ${(props) => props.mt + "px"};
  margin-right: ${(props) => props.mr + "px"};
  margin-left: ${(props) => props.ml + "px"};
  margin-bottom: ${(props) => props.mb + "px"};
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.labels};
  width: 35%;
`;

export const StyledTextArea = styled.textarea`
  border: 1px solid ${(props) => props.theme.colors.inputBorder};
  border-radius: 9px;
  width: 65%;
  resize: none;
  padding: 10px;
`;
