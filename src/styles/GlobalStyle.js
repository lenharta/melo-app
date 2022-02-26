import { createGlobalStyle } from "styled-components";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
  ${variables}

  // ======================================================================
  // =======---------------------------------------------------------------
  // =======  G - L - O - B - A - L  
  // =======---------------------------------------------------------------
  // ======================================================================
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

  // ============================================================
  // ======  S C R O L L - B A R
  // ============================================================  
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

  // ============================================================
  // ======  C O N T A I N E R S
  // ============================================================
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

  // ============================================================
  // ======  T E X T - T A G S
  // ============================================================  
  a {
    font-size: clamp(var(--fz-sm-1), 4vw, var(--fz-md-2));
    font-family: var(--secondary-font);
    font-weight: var(--fw-600);
  }

  p {
    font-size: clamp(var(--fz-xs-2), 3vw, var(--fz-sm-2));
    font-family: var(--secondary-font);
    font-weight: var(--fw-600);
  }

  span {
    font-size: clamp(var(--fz-lg-2), 3vw, var(--fz-xxl-2));
    letter-spacing: var(--let-space-sm);
    font-family: var(--logo-font);
    font-weight: var(--fw-400);
    letter-spacing: var(--let-space-xs);
  }
  
  ul {
    list-style-type: none;
  }

  // ============================================================
  // ======  H E A D E R - T A G S
  // ============================================================
  h1, h2, h3, h4, h5, h6, a, p {
    letter-spacing: var(--let-space-xs);
    font-family: var(--primary-font);

    text-decoration-color: none;
    text-decoration: none;
  }

  h1 {
    ${(props) => props.theme.h1}
    font-size: clamp(var(--fz-md-2), 5vw, var(--fz-xxxl-2));
    font-weight: var(--fw-900);
  }
  
  h2 {
    ${(props) => props.theme.h2}
    font-size: clamp(var(--fz-md-2), 4vw, var(--fz-xxxl-2));
    font-weight: var(--fw-400);
  }
  
  h3 {
    ${(props) => props.theme.h3}
    font-size: clamp(var(--fz-md-1), 4vw, var(--fz-xxl-1));
    font-weight: var(--fw-900);
  }
  
  h4 {
    ${(props) => props.theme.h4}
    font-size: clamp(var(--fz-md-1), 4vw, var(--fz-xxl-1));
    font-weight: var(--fw-400);
  }

  // TRACKS TEMPLATE
  h5 {
    ${(props) => props.theme.h5}
    font-size: clamp(var(--fz-md-1), 4vw, var(--fz-lg-1));
    font-weight: var(--fw-900);
  }

  h6 {
    ${(props) => props.theme.h6}
    font-size: clamp(var(--fz-sm-1), 4vw, var(--fz-md-2));
    font-weight: var(--fw-400);
  }

  
  // ============================================================
  // ======  G R A P H I C S
  // ============================================================
  svg {
    text-decoration-color: none;
    text-decoration: none;

    @media (max-width: 1600px) {
    }
    @media (max-width: 1080px) {
    }
    @media (max-width: 768px) {
    }
    @media (max-width: 480px) {
    }
  }

  // ============================================================
  // ======  I N P U T S  &  M E N U S
  // ============================================================
  select {
    ${(props) => props.theme.select}
    font-size: clamp(var(--fz-sm-1), 1vw, var(--fz-md-2));
    font-family: var(--secondary-font);
    font-weight: var(--fw-800);
    
    cursor: pointer;
  }
  
  // ============================================================
  // ======  C U S T O M - C L A S S E S
  // ============================================================
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
    border-radius: var(--sm-radius);
    height: 110px;
    width: 110px;
    
    @media (max-width: 1600px) {
      height: 100px;
      width: 100px;
    }
    
    @media (max-width: 1080px) {
      height: 90px;
      width: 90px;
    }
    @media (max-width: 768px) {
      border-radius: var(--xs-radius);
      height: 80px;
      width: 80px;
    }
    @media (max-width: 480px) {
      height: 70px;
      width: 70px;
    }
  }

  .ellipsis__titlebox {
    h5, h6 {
      width: 97%;
      background-clip: text;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
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
