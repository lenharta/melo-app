import { useEffect, useState } from 'react'
import { Loader, Nav } from './components'
import { loaderTimeout } from './utils'
import { GlobalStyle } from './styles'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './styles/theme'
import { FaMoon, FaSun } from 'react-icons/fa'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Album, Artist, Charts, Dashboard, Track } from './pages'



const App = () => {
  const isHome = window.location.pathname === '/'
  const [loading, setLoading] = useState(false)
  const [theme, setTheme] = useState('dark')

  const themeToggler = () => (
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  )
  
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, loaderTimeout)
  }, [])

  return (
    <>
      <ThemeProvider theme={ theme === 'dark' ? darkTheme : lightTheme }>
      <GlobalStyle />
      {loading && isHome ? (<Loader />) : (
        <>
          <Router>
            <ThemeController>
              <button className="theme__button" onClick={() => themeToggler()}>
                <>
                  { theme === 'dark' ? <FaMoon /> : <FaSun /> }
                </>
              </button>
            </ThemeController>

            <Nav />

            <Routes>
              <Route path='/' element={ <Dashboard /> } />
              <Route path='/charts' element={ <Charts /> } />
              <Route path='/artist' element={ <Artist /> } />
              <Route path='/album' element={ <Album /> } />
              <Route path='/track' element={ <Track /> } />
            </Routes>
          </Router>
        </>
      )}
      </ThemeProvider>
    </>
  )
}

const ThemeController = styled.div`
  position: fixed;
  top: 25px;
  right: 25px;
  .theme__button {
    width: 60px;
    svg {
      ${({ theme }) => theme.mixins.flexCenter}
      padding: 5px;
      width: 30px;
      height: 30px;
    }
  }
`;

export default App
