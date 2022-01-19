import { createGlobalStyle } from 'styled-components'
import variables from './variables'


const GlobalStyle = createGlobalStyle`
  ${variables}

  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
    box-sizing: border-box;
    scroll-behavior: smooth;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scrollbar-width: thin;
    scrollbar-color: gray;
  }

  // Scroll Bar
  body::-webkit-scrollbar {
    width: 8px;
  }

  body::-webkit-scrollbar-track {
    background: transparent;
  }

  body::-webkit-scrollbar-thumb {
    background: var(--l-gray);
    opacity: 0.25;
    border: 1px solid var(--l-gray);
    border-radius: 8px;
  }

  body {
    ${( props ) => props.theme.body};
    width: 100%;
    min-height: 100%;
    line-height: 1;
  }

  section {
    max-width: 1100px;
    margin: 0 auto;
    padding: 100px 0;

    @media (max-width: 768px) {
      padding: 75px 0;
    }

    @media (max-width: 480px) {
      padding: 50px 0;
    }
  }

  h1, h2 {
    letter-spacing: -1px;
  }

  h1 {
    ${( props ) => props.theme.h1}
    font-size: var(--fz-xxl);
    font-family: var(--barlow);
    font-weight: var(--barlow-reg);
  }

  h2 {
    ${( props ) => props.theme.h2}
    font-size: clamp(var(--fz-xxs), 5vw, var(--fz-xl));
    font-family: var(--barlow);
    font-weight: var(--barlow-light);
  }

  h3 {
    font-size: var(--fz-xs);
    font-family: var(--roboto);
    font-weight: var(--roboto-bold);
  }

  p {
    ${( props ) => props.theme.p}
    font-size: var(--fz-md);
    font-family: var(--roboto);
    font-weight: var(--roboto-reg);
  }

  a {
    font-size: var(--fz-sm);
    cursor: pointer;
    text-decoration: none;
    font-family: var(--roboto);
    font-weight: var(--roboto-reg);
  }

  button {
    ${( props ) => props.theme.button};
  }

  ol {
    ${( props ) => props.theme.ol};
  }
`;

export default GlobalStyle