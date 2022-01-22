import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion, AnimateSharedLayout } from "framer-motion";
import { navSpring } from "../utils";

const Nav = () => {
  // const [selectedLink, setSelectedLink] = useState(navItems[0]);

  const one = <Link to="/">Dashboard</Link>;

  const two = <Link to="/uscharts">US Top 100</Link>;

  const navItems = [one, two];

  return (
    <>
      <StyledNavContainer>
        <StyledNavLogo>
          <Link to="/">
            <span>MELO</span>
          </Link>
        </StyledNavLogo>
        <StyledNavLinks>
          <ul>
            {navItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </StyledNavLinks>
      </StyledNavContainer>
    </>
  );
};

const StyledNavContainer = styled.nav`
  ${({ theme }) => theme.mixins.flexAround}
  width: 100%;
  height: 100px;
  position: fixed;
`;

const StyledNavLogo = styled.div`
  span {
    font-size: var(--fz-lg);
    font-family: var(--righteous);
  }
`;

const StyledNavLinks = styled.div`
  ${({ theme }) => theme.mixins.flexCenter}
  flex-direction: row;
  width: 50%;
  ul {
    ${({ theme }) => theme.mixins.flexCenter}
    justify-content: flex-end;
    width: 100%;
    list-style-type: none;
    a {
      padding: 15px;
    }
  }

  .outline {
    position: absolute;
    border: 10px solid var(--green);
    border-radius: 50%;
  }
`;

export default Nav;
