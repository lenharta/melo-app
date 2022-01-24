import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion, AnimateSharedLayout } from "framer-motion";
import { spring } from "../utils";

const Nav = () => {
  const [selected, setSelected] = useState([0]);
  
  const one = <Link to="/">Dashboard</Link>;
  const two = <Link to="/uscharts">US Top 100</Link>;
  const three = <Link to="/uscharts">US Top 100</Link>;
  const navItems = [one, two, three];


  return (
    <>
      <StyledHeader>
        <StyledNavContainer>
          <StyledNavLogo>
            <Link to="/">
              <span>Melo</span>
            </Link>
          </StyledNavLogo>
          <StyledNavLinks>
            {navItems.map((item) => (
              <li key={item} >
                {item}
                <Outline/>
              </li>
            ))}
          </StyledNavLinks>
        </StyledNavContainer>
      </StyledHeader>
    </>
  );
};

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
  ${(props) => props.theme.navLinks};
  span {
    font-size: var(--fz-lg);
    font-family: var(--righteous);
  }
`;

const StyledNavLinks = styled.ul`
  ${({ theme }) => theme.mixins.flexCenter}
  flex-direction: row;
  transform: translateX(20px);
  list-style-type: none;
  justify-content: flex-end;
  li {
    ${(props) => props.theme.navLinks};
    position: relative;
    padding: 10px 0;
    a {
      padding: 20px;
      cursor: pointer;
    }
  }
`;

const Outline = styled(motion.div)`
  ${(props) => props.theme.navSelectedLink}
  position: absolute;
  border-radius: 10px;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default Nav;
