import { useEffect, useState } from "react";
import { Loader, Nav, ProgressBar, ThemeToggle } from "./components";
import { isHome, loaderTimeout } from "./utils";
import { GlobalStyle } from "./styles";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { Routes, Route } from "react-router-dom";
import { Charts, Dashboard } from "./routes";
import { useDarkMode } from "./utils/hooks/useDarkTheme";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [theme, toggleTheme] = useDarkMode();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, loaderTimeout);
  }, []);

  return (
    <>
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <GlobalStyle />
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        {loading && isHome ? (
          <Loader />
        ) : (
          <>
            <Nav />
            <ProgressBar />
            {!loading ? <StyledFadeContainer /> : null}
            <StyledMain>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/charts" element={<Charts />}/>
              </Routes>
            </StyledMain>
          </>
        )}
      </ThemeProvider>
    </>
  );
};

const StyledMain = styled.main`
  margin: 0 auto;
  max-width: 1600px;
  margin: 0 100px;

  @media (max-width: 1080px) {
    margin: 0 50px;
  }

  @media (max-width: 768px) {
    margin: 0 25px;
  }

  @media (max-width: 480px) {
    margin: 0px;
  }
`;

const StyledFadeContainer = styled.div`
  ${(props) => props.theme.scrollFade}
  position: fixed;
  height: 150px;
  width: 100%;
  bottom: 0;
  z-index: 99;

`;

export default App;
