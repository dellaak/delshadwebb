import styled from "styled-components";
import {
  Navbar,
  NavbarBrand,
  NavItem,
  Nav,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import { NavHashLink as NavLink } from "react-router-hash-link";

export const StyledNavbar = styled(Navbar)`
  height: 65px;
  display: flex;
  position: fixed !important;
  width: 100vw;
  background: ${(props) => (props.colorprop ? "white" : "transparent")};
  transition: ease 1s;
  z-index: 2;
  padding-left: 0 !important;
  padding-top: 20px !important;
  @media screen and (max-width: 600px) {
    background-color: white !important;
  }
`;
export const Stylednv = styled(NavbarToggler)`
  color: red !important;
`;
export const StyledCollapse = styled(Collapse)`
  @media screen and (max-width: 600px) {
    background-color: white !important;
  }

  @media screen and (max-width: 760px) {
    background-color: white !important;
  }
`;

export const StyledNav = styled(Nav)`
  list-style: none;
  width: 100vw;
  text-align: right;
  flex: 1;
  display: flex;
  justify-content: center;
  padding-right: 50px;
`;

export const StyledNavBrand = styled(NavbarBrand)`
  transition: ease 1s;
  color: ${(props) => (props.textcolorprop ? "black" : "white")} !important;
  font-size: 2rem;
  align-self: center;
  margin-left: 30px;
  line-height: 2;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-style: normal;
  text-shadow: 0.07em 0.07em 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  @media screen and (max-width: 600px) {
    font-size: 1rem;
    color: black !important;
  }
`;

export const StyledNavItem = styled(NavItem)`
  color: black;
`;
export const StyledNavLink = styled(NavLink)`
  color: black;
  font-size: 1rem;
  align-self: center;
  margin-left: 30px;
  line-height: 2;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-style: normal;
  text-shadow: 0.07em 0.07em 0 rgba(0, 0, 0, 0.1);
  text-decoration: none;
  background-color: white;
`;
