import { css } from 'styled-components'

const TransitionStyles = css`

  /* Loader Fade up */
  .loaderfadeup-enter {
    opacity: 0.01;
    transform: translateY(20px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }
  .loaderfadeup-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }
`;

export default TransitionStyles;