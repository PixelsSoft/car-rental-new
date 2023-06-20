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
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  padding: 8px;
  border-radius: 9px;
  width: 100%;
`;
