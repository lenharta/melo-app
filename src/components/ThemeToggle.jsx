import React, { useState } from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { spring } from "../utils";

const ThemeToggle = (props) => {
  const [themeOn, setThemeOn] = useState(true);
  const toggleSwitch = () => setThemeOn(!themeOn);

  if (themeOn === true) {
    props.setTheme('dark')
  } else {
    props.setTheme('light')
  }

  return (
    <>
      <StyledSwitch
        isSwitched={themeOn}
        onClick={() => toggleSwitch()}
      >
        <StyledHandle layout transition={spring} />
      </StyledSwitch>
    </>
  );
};

const StyledSwitch = styled.button`
  ${({ theme }) => theme.mixins.flexCenter};
  justify-content: flex-start;
  ${(props) =>
    props.isSwitched === true
      ? css`
          justify-content: flex-end;
        `
      : null};
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 100;
  width: 70px;
  height: 40px;
  padding: 5px;
  border-radius: 50px;
  cursor: pointer;
`;

const StyledHandle = styled(motion.div)`
  ${({ theme }) => theme.mixins.flexCenter};
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export default ThemeToggle;
