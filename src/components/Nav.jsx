import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LayoutGroup, motion } from "framer-motion";
import { navSpring, navVariant } from "../utils";

const navLinkData = [
  {
    id: 1,
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    id: 2,
    title: "Top Charts",
    path: "/charts",
  },
];
const Nav = () => {
  const [selected, setSelected] = useState(true);

  // useEffect(() => {
  //   setSelected()
  // }, []);

  return (
    <>
      <StyledHeader>
        <StyledNavContainer>
          <StyledNavLogo>
            <span>Melo</span>
          </StyledNavLogo>
          <StyledNavLinks>
            {navLinkData.map(({title, path}, id) => (
              <StyledNavList key={id} onClick={() => setSelected(id)}>
                <Link to={path}>{title}</Link>
                {id  === selected ? (
                  <Outline layoutId="outline" transition={navSpring} variants={navVariant}  />
                ) : null}
              </StyledNavList>
            ))}
          </StyledNavLinks>
        </StyledNavContainer>
      </StyledHeader>
    </>
  );
};

// Nav Styles
const StyledHeader = styled.header`
  ${(props) => props.theme.header}
  ${({ theme }) => theme.mixins.flexCenter}
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 100px;
`;

const StyledNavContainer = styled.nav`
  ${(props) => props.theme.nav}
  ${({ theme }) => theme.mixins.flexBetween}
  width: 100%;
  overflow: hidden;
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
  list-style-type: none;
  border-radius: 50px;
  overflow: hidden;
  justify-content: flex-end;

  @media (max-width: 575px) {
    display: none;
  }
`;

// NavLink Styles
const StyledNavList = styled(motion.li)`
  ${(props) => props.theme.navLinks};
  position: relative;
  margin: 3px;  
  padding: 10px 0px;
  
  a {
    padding: 6px 30px;
    border-radius: 50px;
  }
`;

const Outline = styled(motion.div)`
  ${(props) => props.theme.navSelectedLink}
  ${({ theme }) => theme.mixins.flexCenter}
  text-align: center;
  position: absolute;
  border-radius: 50px;
  top: 0;
  left: 0;
  width: 100%;
  height: 42px;
`;

export default Nav;
