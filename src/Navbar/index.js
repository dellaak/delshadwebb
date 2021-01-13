import React, { useState, useRef, useEffect } from "react";
import {
  StyledNavbar,
  StyledNavBrand,
  StyledNavItem,
  StyledNavLink,
  StyledNav,
  Stylednv,
  StyledCollapse,
} from "./StyledNavbar";
import { goToAnchor } from "react-scrollable-anchor";
import "./style.css";

const scrollTop = () => {
  window.scrollTo(0, 0);
  window.history.pushState("", "", "/");
};

function NavbarComp() {
  let myurl = window.location.hash.substr(1);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  function ScrollToId() {
    const [] = useState(0);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      // Update the document title using the browser API

      let el = document.getElementById("#" + myurl);
      if (el === null) {
        return;
      }
      goToAnchor(el);
    });
  }

  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 370;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  ScrollToId();

  return (
    <StyledNavbar colorprop={navBackground ? 1 : 0} light expand="md">
      <StyledNavBrand textcolorprop={navBackground ? 1 : 0} onClick={scrollTop}>
        #DELSHAD
      </StyledNavBrand>
      <Stylednv onClick={toggle} />
      <StyledCollapse isOpen={isOpen} navbar>
        <StyledNav className="ml-auto" navbar>
          <StyledNavItem>
            <StyledNavLink smooth to="/#aboutme" activeClassName="selected">
              {" "}
              Om mig
            </StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledNavLink smooth to="/#portfolio" activeClassName="selected">
              Portfolio
            </StyledNavLink>
          </StyledNavItem>

          <StyledNavItem>
            <StyledNavLink smooth to="/#contactme" activeClassName="selected">
              Kontakt
            </StyledNavLink>
          </StyledNavItem>
        </StyledNav>
      </StyledCollapse>
    </StyledNavbar>
  );
}

export default NavbarComp;
