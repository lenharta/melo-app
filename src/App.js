import { useEffect, useState } from "react";
import { Loader, Nav, ProgressBar, ThemeSwitcher } from "./components";
import { loaderTimeout } from "./utils";
import { GlobalStyle } from "./styles";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Album, Artist, USCharts, Dashboard, Track } from "./pages";

const App = () => {
  const isHome = window.location.pathname === "/";
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {  
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, loaderTimeout);
  }, []);

  return (
    <>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyle />
        {loading && isHome ? (
          <Loader />
        ) : (
          <>
            <Router>
              {/* <ThemeController>
                <button
                  className="theme__button"
                  onClick={() => themeToggler()}
                >
                  <>{theme === "dark" ? <FaMoon /> : <FaSun />}</>
                </button>
              </ThemeController> */}
              
              <ThemeSwitcher theme={theme} setTheme={setTheme} />

              <Nav />
                <ProgressBar />
              <StyledMain>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/uscharts" element={<USCharts />} />
                  <Route path="/artist" element={<Artist />} />
                  <Route path="/album" element={<Album />} />
                  <Route path="/track" element={<Track />} />
                </Routes>
              </StyledMain>
            </Router>
          </>
        )}
      </ThemeProvider>
    </>
  );
};

const StyledMain = styled.main`
  margin: 0 auto;
  max-width: 1600px;
  padding: 0 150px;

  @media (max-width: 1080px) {
    padding: 0 100px;
  }

  @media (max-width: 768px) {
    padding: 0 50px;
  }

  @media (max-width: 480px) {
    padding: 0 25px;
  }
`;

// const ThemeController = styled.div`
//   position: fixed;
//   bottom: 25px;
//   right: 25px;
//   .theme__button {
//     width: 60px;
//     svg {
//       ${({ theme }) => theme.mixins.flexCenter}
//       padding: 5px;
//       width: 30px;
//       height: 30px;
//     }
//   }
// `;

export default App;
