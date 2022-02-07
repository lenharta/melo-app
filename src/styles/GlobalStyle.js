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
    padding: 25px 0;

    @media (max-width: 1600px) {
      padding: 20px 0;
    }

    @media (max-width: 1080px) {
      padding: 10px 0;
    }
    @media (max-width: 768px) {
      padding: 0px 0;
    }
    @media (max-width: 480px) {
      padding: 10px 0;
    }
  }
  
  a {
    text-decoration: none;
    text-decoration-color: none;
    font-size: clamp(var(--fz-sm-1), 5vw, var(--fz-sm-4));
    font-family: var(--secondary-font);
    font-weight: var(--fw-800);
  }

  h1 {
    font-size: clamp(var(--fz-sm-1), 5vw, var(--fz-sm-4));
    font-family: var(--primary-font);
    font-weight: var(--fw-800);
  }
  
  h2 {
    font-size: clamp(var(--fz-sm-4), 5vw, var(--fz-lg-1));
    font-family: var(--primary-font);
    font-weight: var(--fw-900);
  }
  
  h3 {
    font-size: clamp(var(--fz-sm-4), 2vw, var(--fz-md-4));
    font-family: var(--secondary-font);
    font-weight: var(--fw-500);
  }

  h4 {
    // add styles here
  }

  h5 {
    // add styles here
  }

  p {
    font-size: clamp(var(--fz-sm-1), 5vw, var(--fz-md-2));
    font-family: var(--secondary-font);
    font-weight: var(--fw-800);
  }

  img {
    ${(props) => props.theme.img}
  }


  
  select {
    ${(props) => props.theme.select}
    border-radius: 10px;
    font-family: var(--secondary-font);
    font-size: var(--fz-sm-3);
    font-weight: var(--fw-600);
    text-transform: uppercase;
    letter-spacing: 4px;
    cursor: pointer;
  }

  // =========================================================
  //   GLOBAL CLASSES

  .header__title {
    ${(props) => props.theme.header__title}
    // need to edit
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
      @media (max-width: 480px) {
        border-radius: 10px;
        width: 60px;
        height: 60px;
      }
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
