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
  ${(props) => props.theme.header}
  ${({ theme }) => theme.mixins.flexCenter}
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 100px;
  margin: 0 auto;
  padding: 0 100px;

  @media (max-width: 1080px) {
    padding: 0 50px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

const StyledNavContainer = styled.nav`
  ${(props) => props.theme.nav}
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
  list-style-type: none;
  border-radius: 50px;
  padding: 5px 8px;
  overflow: hidden;

  @media (max-width: 575px) {
    display: none;
  }
`;

// NavLink Styles
const StyledNavList = styled(motion.li)`
  ${(props) => props.theme.navLinks};
  ${({ theme }) => theme.mixins.flexCenter}
  position: relative;
  margin: 3px;
  a {
    padding: 10px 30px;
    border-radius: 50px;
  }
`;

const Outline = styled(motion.div)`
  ${(props) => props.theme.navSelectedLink}
  position: absolute;
  border-radius: 50px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default Nav;
