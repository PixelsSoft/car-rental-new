import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 180px;
  text-align: center;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border-radius: 14px;
  border: none;
  font-weight: 800;
  font-size: ${(props) => props.theme.textVariants.body.fontSize};
  padding: 10px 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

export const Dropdown = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  top: 100%;
  left: 0;
  padding: 10px 0px;
  background-color: ${(props) => props.theme.colors.white};
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
`;

export const DropdownItem = styled.div`
  padding: 14px;
  cursor: pointer;
  width: 100%;
  font-size: 14px;
  display: flex;
  justify-content: flex-start;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
  }
`;
