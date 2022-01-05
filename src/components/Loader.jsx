import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { draw, framerLogoContainer, framerLogoItem, overlayAnimation } from '../utils'


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
              strokeWidth="3"
              fill="transparent"
              variants={draw}
            />
          </motion.svg>
        </AnimatedLogoBorder>

        <AnimatedLogo initial="hidden" animate="show" variants={framerLogoContainer}>
          {logoItems.map((item, i) => (
            <motion.div key={i} variants={framerLogoItem}>{item}</motion.div>
          ))}
        </AnimatedLogo>

        <AnimatedOverlay
          initial="hidden"
          animate="show"
          variants={overlayAnimation}
          transition={{ delay: 500, staggerChildren: 0.3, }}
        >
          <motion.div variants={overlayAnimation}></motion.div>
          <motion.div variants={overlayAnimation}></motion.div>
        </AnimatedOverlay>

      </StyledLoader>
    </>
  )
}

const StyledLoader = styled.div`
  ${({ theme }) => theme.mixins.flexCenter}
  width: 100vw;
  height: 100vh;
  background: var(--black);
  -webkit-scroll-bar: none;
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
    margin: 0 2px;
  }
`;

const AnimatedOverlay = styled(motion.div)`
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
  
  div:nth-child(1) {
    postition: absolute;
    max-height: 100vh;
    max-width: 100vw;
    background: var(--green);
  }
  div:nth-child(2) {
    postition: absolute;
    max-height: 100vh;
    max-width: 100vw;
    background: var(--black);
  }
`;

export default Loader