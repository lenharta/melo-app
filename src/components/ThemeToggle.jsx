import React from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { spring } from "../utils";

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <>
      <StyledSwitch onClick={toggleTheme}>
        <HandleContainer layout isSwitched={theme}>
          <StyledHandle className="handle__Color" transition={spring} />
        </HandleContainer>
      </StyledSwitch>
    </>
  );
};
const HandleContainer = styled.button`
  ${(props) => props.theme.themeButton};
  position: fixed;
  width: 140px;
  height: 80px;
  right: 100px;
  bottom: 30px;
  cursor: pointer;
  padding: 5px;
  border-radius: 50px;

  @media (max-width: 1080px) {
    right: 50px;
  }
  @media (max-width: 768px) {
    width: 120px;
    height: 60px;
    right: 25px;
  }
  @media (max-width: 480px) {
    right: 10px;
  }
`;

const StyledSwitch = styled.div`
  ${({ theme }) => theme.mixins.flexCenter}
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* ${(props) =>
    props.isSwitched === "dark"
      ? css`
          justify-content: flex-end;
        `
      : null}; */

  @media (max-width: 1080px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

const StyledHandle = styled(motion.div)`
  width: 65px;
  height: 65px;
  border-radius: 40px;

  @media (max-width: 1080px) {
  }
  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
  }
  @media (max-width: 480px) {
  }
`;

export default ThemeToggle;
