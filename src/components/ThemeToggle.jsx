import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { spring } from '../utils';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = () => {
  const [themeOn, setThemeOn] = useState(false);
  const toggleSwitch = () => setThemeOn(!themeOn);

  return (
    <>
      <StyledSwitch className='switch' isSwitched={themeOn} onClick={toggleSwitch}>
        <StyledHandle layout transition={spring}>
          <>
          {themeOn ? <FaMoon /> : <FaSun />}
          </>
        </StyledHandle>
      </StyledSwitch>
    </>
  );
};

const StyledSwitch = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  justify-content: flex-start;
  ${props => props.isSwitched === true ? css`justify-content: flex-end;` : null}
  width: 100px;
  height: 60px;
  padding: 5px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 50px;
  cursor: pointer;
`;

const StyledHandle = styled(motion.div)`
  ${({ theme }) => theme.mixins.flexCenter};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  svg {
    position: absolute;
    height: 40px;
    width: 40px;
  }
`;

export default ThemeToggle;
