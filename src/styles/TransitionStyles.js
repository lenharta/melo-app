import { css } from 'styled-components'

const TransitionStyles = css`

  /* Loader Fade up */
  .loaderfadeup-enter {
    opacity: 0.01;
    transform: translateY(200px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }
  .loaderfadeup-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }

  /* Fade */
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 300ms var(--easing);
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: opacity 300ms var(--easing);
  }
`;

export default TransitionStyles;