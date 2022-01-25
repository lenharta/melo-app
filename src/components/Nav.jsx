import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { spring } from "../utils";

const Nav = () => {
  const one = <Link to="/">Dashboard</Link>;
  const two = <Link to="/uscharts">US Top 100</Link>;
  const navItems = [one, two];
  const [selected, setSelected] = useState(navItems[0]);

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
            {navItems.map((item, i) => (
              <StyledNavList key={item} onClick={() => setSelected(i)}>
                {item}
                {i === selected ? (
                  <Outline layoutId="outline" transition={spring} />
                ) : null}
              </StyledNavList>
            ))}
          </StyledNavLinks>
        </StyledNavContainer>
      </StyledHeader>
    </>
  );
};

// const NavLink = ({ item, isSelected }) => {
//   return (
//       <>
//         {item}
//         {isSelected && (
//           <Outline
//             layoutId="outline"
//             transition={spring}
//           />
//         )}
//       </>
//   );
// };

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
  ${(props) => props.theme.navLinks};
  span {
    font-size: var(--fz-lg);
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
  border-radius: 20px;
  z-index: -1;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

export default Nav;
