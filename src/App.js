import { useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles'
import { Loader } from './components'
import { loaderTimeout } from './utils'
import { lightTheme, darkTheme } from './styles/theme'
import { FaMoon, FaSun } from 'react-icons/fa'
import { Route, Routes } from 'react-router-dom'
import { Charts, Home, Result } from './pages';
import axios from 'axios'

const App = () => {
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
        {loading ? (<Loader />) : (
          <>
            <ThemeController>
              <button className="theme__button" onClick={() => themeToggler()}>
                <>
                  { theme === 'dark' ? <FaMoon /> : <FaSun /> }
                </>
              </button>
            </ThemeController>
            <Routes>
              <Route path='/' element={ <Home /> } />
              <Route path='Charts' element={ <Charts /> } />
              <Route path='Results' element={ <Result /> } />
              {/* Import API id path for Results */}
            </Routes>
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

