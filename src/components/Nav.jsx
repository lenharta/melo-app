import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { navSpring } from "../utils";

const navLinkData = [
  {
    id: 0,
    title: "Dasboard",
    path: "/",
  },
  {
    id: 1,
    title: "Top Charts",
    path: "/charts",
  },
];
const Nav = () => {
  const [selected, setSelected] = useState(navLinkData[0]);

  // useEffect(() => {
  //   {isHome ? setSelected(0) : null}
  // }, [])

  return (
    <>
      <StyledHeader>
        <StyledNavContainer>
          <StyledNavInner>
            <StyledNavLogo>
              <span>Melo</span>
            </StyledNavLogo>
            <StyledNavLinks>
              {navLinkData.map(({ id, title, path }) => (
                <StyledNavList key={id} onClick={() => setSelected(id)}>
                  <Link to={path}>
                    {title}
                    {id === selected ? (
                      <Outline layoutId="outline" transition={navSpring} />
                    ) : null}
                  </Link>
                </StyledNavList>
              ))}
            </StyledNavLinks>
          </StyledNavInner>
        </StyledNavContainer>
      </StyledHeader>
    </>
  );
};

// Nav Styles
const StyledHeader = styled.header`
  ${(props) => props.theme.header};
  ${({ theme }) => theme.mixins.flexCenter}
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;
  z-index: 100;
`;

const StyledNavContainer = styled.nav`
  ${({ theme }) => theme.mixins.flexCenter}
  width: 100%;
`;

const StyledNavInner = styled.div`
  ${({ theme }) => theme.mixins.flexBetween}
  width: 100%;
`;

const StyledNavLogo = styled.div`
  ${(props) => props.theme.navLogo};
  justify-content: flex-start;
  span {
    font-size: clamp(var(--fz-lg), 5vw, var(--fz-xl));
    font-family: var(--righteous);
  }
`;

const StyledNavLinks = styled(motion.ul)`
  ${(props) => props.theme.navList};
  ${({ theme }) => theme.mixins.flexCenter}
  padding: 15px 5px;
  margin: auto 0;
  border-radius: 50px;
  flex-direction: row;
  justify-content: flex-end;
  overflow: hidden;

  @media (max-width: 480px) {
    display: none;
  }
`;

// NavLink Styles
const StyledNavList = styled(motion.li)`
  ${(props) => props.theme.navLinks};
  display: block;
  position: relative;
  a {
    z-index: 1;
    padding: 45px 30px;
    cursor: pointer;
  }
`;

const Outline = styled(motion.div)`
  ${(props) => props.theme.navSelectedLink}
  display: block;
  position: absolute;
  border-radius: 30px;
  margin: auto 0;
  z-index: -1;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 38px;
`;

export default Nav;
