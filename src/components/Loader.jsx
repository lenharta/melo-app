import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { draw, framerLogoContainer, framerLogoItem } from '../utils'


const Loader = () => {
  const one = <span>M</span>
  const two = <span>e</span>
  const three = <span>l</span>
  const four = <span>o</span>
  const logoItems = [one, two, three, four]

  return (
    <>
      <StyledLoader>
        <AnimatedLogoBorder>
          <motion.svg
            width="300"
            height="300"
            viewbow="0 0 300 300"
            initial="hidden"
            animate="visible"
          >
            <motion.circle
              cx="150"
              cy="150"
              r="100"
              stroke="var(--green)"
              stroke-width="2"
              fill="transparent"
              variants={draw}
            />
          </motion.svg>
        </AnimatedLogoBorder>

        <AnimatedLogo initial="hidden" animate="show" variants={framerLogoContainer}>
          {logoItems.map((item, i) => (
            <motion.div variants={framerLogoItem}>{item}</motion.div>
          ))}
        </AnimatedLogo>
      </StyledLoader>
    </>
  )
}

const StyledLoader = styled.div`
  ${({ theme }) => theme.mixins.flexCenter}
  width: 100vw;
  height: 100vh;
  background: var(--black);
  // border: 10px solid var(--green);
`;

const AnimatedLogoBorder = styled.div`
  ${({ theme }) => theme.mixins.flexCenter}
  position: absolute;
  margin: 0 auto;
`;

const AnimatedLogo = styled(motion.div)`
  ${({ theme }) => theme.mixins.flexCenter}
  margin: 0 auto;
  color: var(--green);
  font-size: var(--fz-xxl);
  font-family: var(--righteous);
  z-index: 100;

  span {
    margin: 0 5px;
  }
`;

export default Loader

// style={{ transitionDelay: `${i * 1}00ms` }}