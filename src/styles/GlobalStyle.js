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
    height: 100%;
    line-height: 1;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scrollbar-width: thin;
    scrollbar-color: gray;
  }

  main {
    margin: 100px auto;
    padding: 0 100px;

    @media (max-width: 1080px) {
      padding: 0 50px;
    }

    @media (max-width: 768px) {
      padding: 0 25px;
    }

    @media (max-width: 480px) {
      padding: 0px 10px;
    }
  }

  header {
    margin: 0 auto;
    padding: 0 100px;

    @media (max-width: 1080px) {
      padding: 0 50px;
    }
    @media (max-width: 768px) {
      padding: 0 25px;
    }
    @media (max-width: 480px) {
      padding: 0 10px;
    }
  }

  section {
    margin: 0 auto;
    padding: 50px 0;
    @media (max-width: 768px) {
      padding: 25px 0;
    }
    @media (max-width: 480px) {
      padding: 0px 0;
    }
  }

  h1 {
    ${(props) => props.theme.h1}
    font-size: clamp(var(--fz-lg), 5vw, var(--fz-xxl));
    font-size: var(--fz-xxl);
    font-family: var(--barlow);
    font-weight: var(--barlow-reg);
  }

  h2 {
    ${(props) => props.theme.h2}
    font-size: clamp(var(--fz-nav), 5vw, var(--fz-lg));
    font-family: var(--righteous);
    font-weight: 100;
  }

  h3 {
    font-size: var(--fz-xs);
    font-family: var(--roboto);
    font-weight: var(--roboto-bold);
  }

  p {
    ${(props) => props.theme.p}
    font-size: clamp(var(--fz-xxs), 5vw, var(--fz-md));
    font-family: var(--roboto);
    font-weight: var(--roboto-light);
  }

  a {
    ${(props) => props.theme.a}
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-nav));
    cursor: pointer;
    text-decoration: none;
    font-family: var(--roboto);
    font-weight: var(--roboto-bold);
  }

  // =========================================================
  //   GLOBAL CLASSES

  .header__divider {
    ${(props) => props.theme.header__divider}
    width: 100%;
    height: 3px;
  }

  .header__title {
    ${(props) => props.theme.header__title}
    font-size: clamp(var(--fz-nav), 5vw, var(--fz-xxl));
    font-family: var(--righteous);
    font-weight: 100;
  }
`;

export default GlobalStyle;
