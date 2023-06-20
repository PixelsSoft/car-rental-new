import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.spacing.m};
  list-style: none;
  text-decoration: none;
  color: black;

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.primary};
  }
`;

const MenuLinkLabel = styled.span`
  margin-left: 10px;

  &:hover {
    font-weight: 500;
  }
`;

const DropdownLink = styled(Link)`
  padding-left: ${(props) => props.theme.spacing.s};
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: ${(props) => props.theme.textVariants.body.fontSize};
  padding: ${(props) => props.theme.spacing.m};
  color: black;

  &:hover {
    cursor: pointer;
  }
`;

export default function SubMenu({ item }) {
  const [subnav, setSubnav] = useState(false);
  const showSubNav = () => setSubnav(!subnav);

  return (
    <>
      <MenuLink to={item.path} onClick={item.subNav && showSubNav}>
        <div style={{ display: "flex", alignItems: "center" }}>
          {item.icon}
          <MenuLinkLabel>{item.title}</MenuLinkLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </MenuLink>
      {subnav &&
        item.subNav.map((item, idx) => {
          return (
            <DropdownLink to={item.path} key={idx}>
              <MenuLinkLabel>{item.title}</MenuLinkLabel>
            </DropdownLink>
          );
        })}
    </>
  );
}
