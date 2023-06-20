import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainHeading = styled.h1`
  font-size: ${(props) => props.theme.textVariants.header.fontSize};
  font-weight: ${(props) => props.theme.textVariants.header.fontWeight};
`;

export const StyledLinkText = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
  margin-top: ${(props) => props.mt + "px"};
  margin-bottom: ${(props) => props.mb + "px"};
  margin-left: ${(props) => props.ml + "px"};
  margin-right: ${(props) => props.mr + "px"};

  &:hover {
    text-decoration: underline;
  }
`;
