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
    max-width: 1600px;
    margin: 0px auto;
    padding: 0 100px;
    padding-top: 150px;

    @media (max-width: 1600px) {
      padding-top: 130px;
    }
    @media (max-width: 1080px) {
      padding: 0 50px;
      padding-top: 120px;
    }
    @media (max-width: 768px) {
      padding: 0 25px;
      padding-top: 110px;
    }
    @media (max-width: 480px) {
      padding: 0 10px;
      padding-top: 100px;
    }
  }

  section {
    padding: 100px 0;

    @media (max-width: 1080px) {
      padding: 60px 0;
    }
    @media (max-width: 768px) {
      padding: 25px 0;
    }
    @media (max-width: 480px) {
      padding: 10px 0;
    }
  }

  h1 {
    ${(props) => props.theme.h1}
    font-size: clamp(var(--fz-lg), 5vw, var(--fz-xxl));
    font-family: var(--barlow);
    font-weight: var(--barlow-reg);
  }

  h2 {
    ${(props) => props.theme.h2}
    font-size: clamp(var(--fz-nav), 5vw, var(--fz-lg));
    font-weight: var(--roboto-reg);
    font-family: var(--roboto);
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
    text-decoration: none;
  }

  select {
    ${(props) => props.theme.select}
    border-radius: 10px;
    font-family: var(--barlow);
    font-weight: 800;
    letter-spacing: 2px;
    font-weight: 600;
  }

  // =========================================================
  //   GLOBAL CLASSES

  .header__title {
    ${(props) => props.theme.header__title}
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    /* border-top-left-radius: 20px; */
    width: 100%;
    padding: 50px 0px;
    
    @media (max-width: 1080px) {
    }
    @media (max-width: 768px) {
      padding: 25px 0px;
    }
    @media (max-width: 480px) {
    }
    h1 {
      font-size: clamp(var(--fz-nav), 5vw, var(--fz-xxl));
      font-weight: 600;
      letter-spacing: 5px;
      margin-left: 20px;
    }
  }

  .section__border {
    border-width: 5px;
    border-style: solid;
    ${(props) => props.theme.section__border};
  }

  .section__border_right {
    ${(props) => props.theme.section__border_right};
    border-right-width: 5px;
    border-right-style: solid;
  }

  .section__border_noRight {
    ${(props) => props.theme.section__border_noRight};
    border-width: 5px;
    border-style: solid;
    border-right-style: hidden;

    @media (max-width: 1080px) {
      border: none;
    }
    @media (max-width: 768px) {
    }
    @media (max-width: 480px) {
    }
  }
  
  
  
  
  .section__image {
    img {
      ${(props) => props.theme.section__image};
      width: 250px;
      height: 250px;
      border-radius: 20px;
      margin-bottom: 35px;
      
      @media (max-width: 1600px) {
        border-radius: 15px;
        margin-bottom: 25px;
        width: 200px;
        height: 200px;
      }
      
      @media (max-width: 1080px) {
        border-radius: 10px;
        margin-bottom: 0px;
        width: 100px;
        height: 100px;
      }
      
      @media (max-width: 768px) {
        border-radius: 10px;
        width: 80px;
        height: 80px;
      }
    }
  }
  
  // may change into new styled component
  /* .card__background {
    ${(props) => props.theme.card__background};
    padding: 35px 20px;

    @media (max-width: 768px) {
      padding: 25px 5px;
    }
    @media (max-width: 480px) {
      padding: 20px;
    }
  } */

  .card__background_aside {
    ${(props) => props.theme.card__background_aside};
    padding: 35px 20px;

    @media (max-width: 1080px) {
      padding: 30px 15px;
      /* padding: 0px; */
    }
    @media (max-width: 480px) {
      /* padding: 20px; */
    }
  }
`;

export default GlobalStyle;

// @media (max-width: 1080px) {
// }
// @media (max-width: 768px) {
// }
// @media (max-width: 480px) {
// }
