import styled from "styled-components";

export const CustomInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.width ? props.width + "px" : "100%")};
  margin-top: ${({ mt = 0 }) => `${mt}px`};
  margin-bottom: ${({ mb = 0 }) => `${mb}px`};
`;

export const InputLabel = styled.label`
  font-weight: bold;
  color: ${(props) => props.theme.colors.labels};
  margin-bottom: 5px;
`;

export const Input = styled.input`
  background-color: transparent;
  padding: 8px;
  flex: 1;
  border: none;
  border-radius: 9px;
  outline: none;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  border-radius: 9px;
`;
