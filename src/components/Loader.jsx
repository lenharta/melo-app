import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { framerLogoContainer, framerLogoItem } from '../utils'


const Loader = () => {
  const one = <span>M</span>
  const two = <span>e</span>
  const three = <span>l</span>
  const four = <span>o</span>
  const logoItems = [one, two, three, four]

  return (
    <>
      <StyledLoader>
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

const AnimatedLogo = styled(motion.div)`
  ${({ theme }) => theme.mixins.flexCenter}
  margin: 0 auto;
  color: var(--green);
  font-size: var(--fz-xxl);
  font-family: var(--righteous);

  span {
    margin: 0 5px;
  }
`;

export default Loader

// style={{ transitionDelay: `${i * 1}00ms` }}