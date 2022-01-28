import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { isHome, navSpring } from "../utils";

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
          <StyledNavLogo>
            <span>Melo</span>
          </StyledNavLogo>
          <StyledNavLinks>
            {navLinkData.map(({ id, title, path }) => (
              <StyledNavList key={id} onClick={() => setSelected(id)}>
                <Link to={path}>{title}</Link>
                {id === selected ? (
                  <Outline layoutId="outline" transition={navSpring} />
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
  ${({ theme }) => theme.mixins.flexCenter}
  ${(props) => props.theme.header};
  position: fixed;
  width: 100%;
  height: 100px;
`;

const StyledNavContainer = styled.nav`
  ${({ theme }) => theme.mixins.flexBetween}
  width: 100%;
  margin: 0 auto;
  padding: 0 150px;

  @media (max-width: 1080px) {
    padding: 0 100px;
  }

  @media (max-width: 768px) {
    padding: 0 50px;
  }

  @media (max-width: 480px) {
    padding: 0 25px;
  }
`;

const StyledNavLogo = styled.div`
  ${(props) => props.theme.navLogo};
  span {
    font-size: clamp(var(--fz-lg), 5vw, var(--fz-xl));
    font-family: var(--righteous);
  }
`;

const StyledNavLinks = styled(motion.ul)`
  ${({ theme }) => theme.mixins.flexCenter}
  ${(props) => props.theme.navList};
  padding: 6px;
  border-radius: 30px;
  flex-direction: row;
  list-style-type: none;
  justify-content: flex-end;
  overflow: hidden;

  @media (max-width: 480px) {
    display: none;
  }
`;

// NavLink Styles
const StyledNavList = styled(motion.li)`
  ${(props) => props.theme.navLinks};
  height: 100%;
  position: relative;
  padding: 10px 0;
  a {
    padding: 20px;
    cursor: pointer;
  }
`;

const Outline = styled(motion.div)`
  ${(props) => props.theme.navSelectedLink}
  position: absolute;
  display: block;
  border-radius: 20px;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default Nav;
