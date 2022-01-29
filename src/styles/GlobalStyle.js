import { createGlobalStyle } from "styled-components";
import variables from "./variables";

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
    display: none;
    width: 8px;
  }

  body::-webkit-scrollbar-track {
    ${(props) => props.theme.scrollbarTrack}
  }

  body::-webkit-scrollbar-thumb {
    ${(props) => props.theme.scrollbarThumb}
    border-radius: 5px;
  }

  body {
    ${(props) => props.theme.body}
    width: 100%;
    min-height: 100%;
    line-height: 1;
  }

  nav {
    ${(props) => props.theme.nav}
    width: 100%;
    margin: 0 125px;

  @media (max-width: 1080px) {
    margin: 0 100px;
  }

  @media (max-width: 768px) {
    margin: 0 50px;
  }

  @media (max-width: 480px) {
    margin: 0 25px;
  }
  }

  section {
    max-width: 1200px;
    margin: 150px auto;

    @media (max-width: 768px) {
      margin: 125px 0;
    }

    @media (max-width: 480px) {
      margin: 100px 0;
    }
  }

  h1, h2 {
    letter-spacing: -1px;
  }

  h1 {
    ${(props) => props.theme.h1}
    font-size: clamp(var(--fz-xs), 5vw, var(--fz-xxl));
    font-size: var(--fz-xxl);
    font-family: var(--barlow);
    font-weight: var(--barlow-reg);
  }

  h2 {
    ${(props) => props.theme.h2}
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
    ${(props) => props.theme.p}
    font-size: var(--fz-md);
    font-family: var(--roboto);
    font-weight: var(--roboto-reg);
  }

  a {
    ${(props) => props.theme.a}
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-nav));
    cursor: pointer;
    // text-decoration: none;
    font-family: var(--roboto);
    font-weight: var(--roboto-bold);
  }

  button {
    ${(props) => props.theme.button}
  }

  ol {
    ${(props) => props.theme.ol}
  }
`;

export default GlobalStyle;
