import { useEffect, useState } from "react";
import { Loader, Nav, Playlist, ProgressBar, ThemeToggle } from "./components";
import { isHome, loaderTimeout } from "./utils";
import { GlobalStyle } from "./styles";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { Routes, Route } from "react-router-dom";
import { Charts, Dashboard, Playlists } from "./routes";
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
            <Main>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="charts" element={<Charts />} />

                <Route path="playlist" element={<Playlists />}>
                  <Route path=":playlistId" element={<Playlist />} />
                </Route>

                {/* <Route path="artist" element={<Artist />}>
                  <Route path=":artistId" element={<Artist />} />
                </Route>

                <Route path="album" element={<Album />}>
                  <Route path=":albumId" element={<Album />} />
                </Route> */}
              </Routes>
            </Main>
          </>
        )}
      </ThemeProvider>
    </>
  );
};

const Main = styled.main`
  // Styles for main in Global Styles
  max-width: 1600px;
`;

export default App;                                                             
