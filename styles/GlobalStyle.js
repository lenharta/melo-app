import { createGlobalStyle } from 'styled-components'
import variables from './variables'

const GlobalStyle = createGlobalStyle`
  ${variables}

  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
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
    width: 11px;
  }

  body::-webkit-scrollbar-track {
    background: white;
  }

  body::-webkit-scrollbar-thumb {
    background: white;
    opacity: 0.25;
    border: 3px solid gray;
    border-radius: 10px;
  }

  body {
    width: 100%;
    min-height: 100%;
  }
`;

export default GlobalStyle