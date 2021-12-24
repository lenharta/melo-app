import React, { useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styled from 'styled-components'


const Loader = () => {
  const [isMounted, setIsMounted] = useState(false)
  const loaderFadeUp = 'loaderfadeup'
  
  const one = <span>M</span>
  const two = <span>e</span>
  const three = <span>l</span>
  const four = <span>o</span>
  const logoItems = [one, two, three, four]

  return (
    <>
      <StyledLoader>
        <AnimatedLogo>
          <TransitionGroup component={null}>
            {logoItems.map((item, i) => (
              <CSSTransition key={i} classNames={loaderFadeUp}>
                <div style={{ transitionDelay: `${i * 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
          </TransitionGroup>
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
  border: 10px solid var(--green);
`;

const AnimatedLogo = styled.div`
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
