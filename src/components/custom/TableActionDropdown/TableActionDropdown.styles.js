import styled from "styled-components";

export const StyledActionButton = styled.div`
  border-radius: 100%;
  border: 1px solid ${(props) => props.theme.colors.primary};
  padding: 5px;
  position: relative;
  cursor: pointer;
  /* display: flex; */
  /* justify-content: center;
  align-items: center; */
`;

export const DropdownList = styled.ul`
  display: ${(props) => (props.open ? "flex" : "none")};
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.white};
  list-style: none;
  position: absolute;
  top: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  width: 200px;
  right: 0px;
  z-index: 10;
`;

export const DropdownItem = styled.li`
  padding-left: ${(props) => props.theme.spacing.m};
  padding-right: ${(props) => props.theme.spacing.m};
  padding-top: ${(props) => props.theme.spacing.s};
  padding-bottom: ${(props) => props.theme.spacing.s};
  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    cursor: pointer;
  }
`;
