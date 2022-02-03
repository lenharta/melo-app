import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LayoutGroup, motion } from "framer-motion";
import { navSpring, navVariant } from "../utils";

const navLinkData = [
  {
    id: 1,
    title: "DASHBOARD",
    path: "/",
    aria: "/Dasboard",
  },
  {
    id: 2,
    title: "CHARTS",
    path: "/charts",
    aria: "Top Charts",
  },
];

const Nav = () => {
  const [selected, setSelected] = useState([]);

  return (
    <>
      <StyledHeader>
        <StyledNav>
          <StyledLogoContainer>
            <span>Melo</span>
          </StyledLogoContainer>

          {navLinkData.map(({ title, path, aria }, id) => (
            <StyledNavLinks key={id} onClick={() => setSelected(id)}>
              <li>
                <Link aria-label={aria} to={path}>
                  {title}
                </Link>

                {id === selected ? (
                  <Outline layoutId="outline" transition={navSpring} />
                ) : null}
              </li>
            </StyledNavLinks>
          ))}
        </StyledNav>
      </StyledHeader>

      {/* <StyledHeader>
        <StyledNavContainer>
          <StyledNavLogo>
            <span>Melo</span>
          </StyledNavLogo>
          <StyledNavLinks>
            {navLinkData.map(({ title, path, aria }, id) => (
              <StyledNavList key={id} onClick={() => setSelected(id)}>
                <Link aria-label={aria} to={path}>
                  {title}
                </Link>
                {id === selected ? (
                  <Outline
                    layoutId="outline"
                    transition={navSpring}
                    variants={navVariant}
                  />
                ) : null}
              </StyledNavList>
            ))}
          </StyledNavLinks>
        </StyledNavContainer>
      </StyledHeader> */}
    </>
  );
};

// Nav Styles
const StyledHeader = styled.header`
  ${(props) => props.theme.styledHeader}
  ${({ theme }) => theme.mixins.flexCenter}
  margin: 0 auto;
  width: 100%;
  height: 100px;
  position: fixed;
  z-index: 100;
  top: 0;

  @media (max-width: 1080px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

const StyledNav = styled.nav`
  ${(props) => props.theme.nav}
  ${({ theme }) => theme.mixins.flexBetween}
  width: 100%;
  max-width: 1600px;
  padding: 0 100px;

  @media (max-width: 1080px) {
    padding: 0 50px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }
  @media (max-width: 480px) {
    padding: 0px 10px;
  }
`;

const StyledLogoContainer = styled.div`
  span {
    ${(props) => props.theme.navLogo};
  }

  @media (max-width: 1080px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 575px) {
  }
`;

const StyledNavLinks = styled(motion.ul)`
  ${({ theme }) => theme.mixins.flexEven}
  ${(props) => props.theme.navList};
  ${(props) => props.theme.navLinks};
  list-style-type: none;

  li {
    a {
    }
  }

  @media (max-width: 1080px) {
  }
  @media (max-width: 768px) {
  }
  // !!
  @media (max-width: 575px) {
    display: none;
  }
`;

const Outline = styled(motion.div)`
  ${(props) => props.theme.navSelectedLink}

  @media (max-width: 1080px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

export default Nav;
