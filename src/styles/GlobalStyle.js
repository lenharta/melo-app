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

  // ==========================================================
  //                  GLOBALS
  // ==========================================================
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

  //                  SCROLL BAR
  // ==========================================================
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
  
  //                  CONTAINERS
  // ==========================================================
  main {
    max-width: 1800px;
    margin: 0px auto;
    margin-top: 100px;
    padding: 0 100px;

    @media (max-width: 1600px) {
      margin-top: 100px;
    }
    @media (max-width: 1080px) {
      padding: 0 50px;
    }
    @media (max-width: 768px) {
      margin-top: 90px;
      padding: 0 25px;
    }
    @media (max-width: 480px) {
      padding: 0px 5px;
    }
  }

  section {
    ${({ theme }) => theme.mixins.flexCenter}
    flex-direction: column;
    width: 100%;
    padding: 100px 0;

    @media (max-width: 1600px) {
      padding: 100px 0;
    }
    
    @media (max-width: 1080px) {
      padding: 45px 0;
    }
    @media (max-width: 768px) {
      padding: 20px 0;
    }
    @media (max-width: 480px) {
      padding: 5px 0;

    }
  }

  //                  INPUTS & MENUS
  // ==========================================================  
  select {
    ${(props) => props.theme.select}
    font-size: clamp(var(--fz-sm-1), 4vw, var(--fz-md-2));
    font-family: var(--secondary-font);
    font-weight: var(--fw-800);
    cursor: pointer;
  }

  //                  LINKS
  // ==========================================================
  a {
    font-size: clamp(var(--fz-sm-1), 4vw, var(--fz-md-2));
    font-family: var(--secondary-font);
    font-weight: var(--fw-600);

    text-decoration-color: none;
    text-decoration: none;
  }

  //                  HEADERS
  // ==========================================================
  h1, h2, h3, h4, h5, h6 {
    text-decoration: none;
    text-decoration-color: none;
    text-overflow: ellipsis;
    background-clip: text;
    white-space: nowrap;
    overflow: hidden;
  }

  h1 {
    ${(props) => props.theme.h1}
    font-size: clamp(var(--fz-md-2), 4vw, var(--fz-xxxl-2));
    letter-spacing: var(--let-space-xs);
    font-family: var(--primary-font);
    font-weight: var(--fw-700);
  }
  
  h2 {
    ${(props) => props.theme.h2}
    font-size: clamp(var(--fz-md-2), 4vw, var(--fz-xxxl-1));
    letter-spacing: var(--let-space-xs);
    font-family: var(--primary-font);
    font-weight: var(--fw-300);
  }
  
  h3 {
    ${(props) => props.theme.h3}
    font-size: clamp(var(--fz-md-1), 4vw, var(--fz-xxl-2));
    letter-spacing: var(--let-space-xs);
    font-family: var(--primary-font);
    font-weight: var(--fw-700);
  }
  
  h4 {
    ${(props) => props.theme.h4}
    font-size: clamp(var(--fz-md-1), 4vw, var(--fz-xxl-1));
    font-family: var(--primary-font);
    font-weight: var(--fw-300);
  }
  
  h5 {
    ${(props) => props.theme.h5}
    font-size: clamp(var(--fz-sm-2), 4vw, var(--fz-lg-2));
    letter-spacing: var(--let-space-xs);
    font-family: var(--primary-font);
    font-weight: var(--fw-900);
  }

  h6 {
    ${(props) => props.theme.h6}
    font-size: clamp(var(--fz-sm-2), 4vw, var(--fz-lg-1));
    letter-spacing: var(--let-space-xs);
    font-family: var(--primary-font);
    font-weight: var(--fw-400);
  }
  
  
  //                  TEXT ELEMENTS
  // ==========================================================  
  
  p {
    font-size: clamp(var(--fz-sm-1), 2vw, var(--fz-md-2));
    font-family: var(--secondary-font);
    font-weight: var(--fw-600);
  }
  
  // Use with H1 or H2
  span {
    font-weight: var(--fw-300);
    font-family: var(--logo-font);
    letter-spacing: var(--let-space-sm);
    font-size: clamp(var(--fz-lg-2), 4vw, var(--fz-xl-2));
  }
  
  //                  LIST
  // ==========================================================  
  ul {
    list-style-type: none;
  }

  // ==========================================================
  //                    CLASSES
  // ==========================================================

  .tab__img {
    ${(props) => props.theme.tab__img};
    width: 250px;
    height: 250px;
    margin: 0px;
    
    @media (max-width: 1600px) {
      width: 200px;
      height: 200px;
    }
    
    @media (max-width: 1080px) {
      width: 150px;
      height: 150px;
    }
    
    @media (max-width: 768px) {
      width: 100px;
      height: 100px;
    }
    @media (max-width: 480px) {
    }
  }
  
  .track__img {
    ${(props) => props.theme.track__img};
    border-radius: var(--xs-radius);
    height: 95px;
    width: 95px;
    
    @media (max-width: 1600px) {
      height: 85px;
      width: 85px;
    }
    @media (max-width: 1080px) {
      height: 75px;
      width: 75px;
    }
    @media (max-width: 768px) {
    }
    @media (max-width: 480px) {
      height: 70px;
      width: 70px;
    }
  }

  .gradient__font {
    ${(props) => props.theme.gradient__font}
    display: inline-block;
  }

  .accent__line {
    ${(props) => props.theme.accent__line}
    ${({ theme }) => theme.mixins.flexCenter}
    width: 100%;
    height: 6px;

    @media (max-width: 1600px) {
      height: 5px;
    }
    @media (max-width: 1080px) {
    }
    @media (max-width: 768px) {
      height: 4px;
    }
    @media (max-width: 480px) {
    }
  }
`;

export default GlobalStyle;

// @media (max-width: 1600px) {
// }
// @media (max-width: 1080px) {
// }
// @media (max-width: 768px) {
// }
// @media (max-width: 480px) {
// }
