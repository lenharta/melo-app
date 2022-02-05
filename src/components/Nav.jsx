import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LayoutGroup, motion } from "framer-motion";
import { navSpring, navVariant } from "../utils";

const navLinkData = [
  {
    id: 1,
    title: "Dashboard",
    path: "/",
    aria: "/Dasboard",
  },
  {
    id: 2,
    title: "Charts",
    path: "/charts",
    aria: "Top Charts",
  },
  {
    id: 3,
    title: "Artists",
    path: "/#",
    aria: "Artists",
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

            <LayoutGroup>
          <StyledNavLinks>
            {navLinkData.map(({ title, path, aria }, id) => (
                <motion.li key={id} onClick={() => setSelected(id)}>
                  <Link aria-label={aria} to={path}>
                    {title}
                    {id === selected ? (
                      <Outline layoutId="outline" transition={navSpring} />
                    ) : null}
                  </Link>
                </motion.li>
            ))}
          </StyledNavLinks>
            </LayoutGroup>
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
  ${({ theme }) => theme.mixins.flexCenter}
  ${(props) => props.theme.styledHeader}
  position: fixed;
  width: 100%;
  height: 100px;
  z-index: 100;

  @media (max-width: 1080px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

const StyledNav = styled.nav`
  ${({ theme }) => theme.mixins.flexBetween}
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
  position: fixed;
  height: 50px;
  top: 25px;
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

const StyledNavLinks = styled.ul`
  ${({ theme }) => theme.mixins.flexBetween}
  ${(props) => props.theme.navList};
  justify-content: flex-end;
  height: 100%;
  list-style-type: none;

  li {
    ${({ theme }) => theme.mixins.flexCenter}
    position: relative;
    text-align: center;
    height: 100%;
    /* margin: 0 10px; */
    a {
      height: 100%;
      padding: 12.5px 25px;
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
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  border-radius: 25px;

  @media (max-width: 1080px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

export default Nav;

/* ${({ theme }) => theme.mixins.flexCenter} */
/* ${({ theme }) => theme.mixins.flexBetween} */
