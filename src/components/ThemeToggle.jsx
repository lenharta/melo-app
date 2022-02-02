import React from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { spring } from "../utils";

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <>
      <HandleContainer
        onClick={toggleTheme}
        isswitched={theme}
        transition={spring}
      >
        <StyledHandle layout className="handle__Color" />
      </HandleContainer>
    </>
  );
};
const HandleContainer = styled(motion.button)`
  ${(props) => props.theme.themeButton};
  ${({ theme }) => theme.mixins.flexCenter}
  justify-content: flex-start;
  position: fixed;
  width: 130px;
  height: 70px;
  right: 100px;
  bottom: 30px;
  cursor: pointer;
  padding: 5px;
  border-radius: 50px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  z-index: 100;

  ${(props) =>
    props.isswitched === "dark"
      ? css`
          justify-content: flex-end;
        `
      : null};

  @media (min-width: 1600px) {
    border-bottom-right-radius: 50px;
    border-top-right-radius: 50px;
  }

  @media (max-width: 1080px) {
    right: 50px;
    width: 120px;
    height: 65px;
  }
  @media (max-width: 768px) {
    right: 25px;
    width: 110px;
    height: 60px;
  }
  @media (max-width: 480px) {
    right: 10px;
  }
`;

const StyledHandle = styled(motion.div)`
  width: 55px;
  height: 55px;
  border-radius: 40px;

  @media (max-width: 1080px) {
    width: 50px;
    height: 50px;
  }
  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
  }
  @media (max-width: 480px) {
  }
`;

export default ThemeToggle;
