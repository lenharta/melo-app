import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styled from 'styled-components'

const one = <span>M</span>
const two = <span>e</span>
const three = <span>l</span>
const four = <span>o</span>
const logoLetters = [one, two, three, four]
const loaderLogoDelay = 2000;

const Loader = () => {
  return (
    <>
      <StyledLoader>
        <AnimatedLogo>
          <TransitionGroup component={null}>
            {logoLetters.map((item, i) => (
              <CSSTransition key={i} classNames="loaderfadeup" timeout={loaderLogoDelay}>
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
  ${({ theme }) => theme.mixins.FlexCenter}
  width: 100vw;
  height: 100vh;
`;

const AnimatedLogo = styled.div`

`;

export default Loader
