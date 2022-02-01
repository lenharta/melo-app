import React from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { spring } from "../utils";

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <>
      <StyledSwitch onClick={toggleTheme}>
        <HandleContainer layout isSwitched={theme} transition={spring}>
          <StyledHandle className="handle__Color" />
        </HandleContainer>
      </StyledSwitch>
    </>
  );
};

const StyledSwitch = styled.button`
  ${(props) => props.theme.themeButton};
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 110px;
  height: 60px;
  border-radius: 50px;
  cursor: pointer;

  @media (max-width: 1080px) {
    width: 100px;
    height: 55px;
  }
  @media (max-width: 480px) {
    width: 90px;
    height: 50px;
  }
`;

const HandleContainer = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  width: 100%;
  height: 100%;
  background: none;
  padding: 5px;
  justify-content: flex-start;
  ${(props) => props.isSwitched === "dark"
    ? css`
          justify-content: flex-end;
          `
      : null};
`;

const StyledHandle = styled(motion.div)`
  flex-direction: row;
  width: 50%;
  height: 100%;
  border-radius: 50%;

  /* width: 50px;
  height: 50px;
  border-radius: 50%;

  @media (max-width: 1080px) {
    width: 40px;
    height: 40px;
  }
  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  } */
`;

export default ThemeToggle;
