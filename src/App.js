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
  margin: 100px auto 0;
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
`;



export default App;
