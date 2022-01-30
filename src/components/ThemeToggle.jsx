import React from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { spring } from "../utils";

const ThemeToggle = ({ loading, theme, toggleTheme }) => {
  
  return (
    <>
      <StyledSwitch isSwitched={theme} onClick={toggleTheme}>
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
  border-radius: 50%;
  bottom: 30px;
  right: 30px;
  z-index: 110;
  width: 90px;
  height: 50px;
  padding: 5px;
  border-radius: 50px;
  cursor: pointer;

  @media (max-width: 480px) {
    width: 70px;
    height: 40px;
  }
`;

const StyledHandle = styled(motion.div)`
  ${({ theme }) => theme.mixins.flexCenter};
  width: 50%;
  height: 100%;
  border-radius: 40px;
`;

export default ThemeToggle;
