import React from 'react'
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
  ${(props) => props.theme.loader}
  width: 100vw;
  height: 100vh;
  z-index: 99;
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
    position: absolute;
    max-height: 100vh;
    max-width: 100vw;
  }
  div:nth-child(2) {
    position: absolute;
    max-height: 100vh;
    max-width: 100vw;
  }
`;

export default Loader