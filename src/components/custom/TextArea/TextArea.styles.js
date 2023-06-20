import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  align-items: ${(props) => (props.row ? "center" : "start")};
  justify-content: ${(props) =>
    props.row ? "space-between" : "justify-start"};

  margin-top: ${(props) => props.mt + "px"};
  margin-right: ${(props) => props.mr + "px"};
  margin-left: ${(props) => props.ml + "px"};
  margin-bottom: ${(props) => props.mb + "px"};
`;

export const Label = styled.label`
  font-size: 14px;
  color: ${(props) => props.theme.colors.labels};
  font-weight: bold;
`;

export const StyledTextArea = styled.textarea`
  border: 1px solid ${(props) => props.theme.colors.inputBorder};
  border-radius: 9px;
  width: ${(props) => (props.width ? props.width + "px" : "100%")};
`;
