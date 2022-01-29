import React from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { spring } from "../utils";

const ThemeToggle = ({ loading, theme, toggleTheme }) => {
  
  return (
    <>
      <StyledSwitch isSwitched={theme} onClick={toggleTheme}>
    {/* {loading ? (<StyledFadeContainer />) : null} */}
        <StyledHandle layout transition={spring} />
      </StyledSwitch>
    </>
  );
};



const StyledSwitch = styled.button`
  ${({ theme }) => theme.mixins.flexCenter};
  ${(props) => props.theme.themeButton};
  justify-content: flex-start;
  ${(props) =>
    props.isSwitched === "dark"
      ? css`
          justify-content: flex-end;
        `
      : null};
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 100;
  width: 90px;
  height: 55px;
  padding: 5px;
  border-radius: 50px;
  cursor: pointer;
`;

const StyledHandle = styled(motion.div)`
  ${({ theme }) => theme.mixins.flexCenter};
  width: 40px;
  height: 40px;
  border-radius: 40px;
`;

export default ThemeToggle;
