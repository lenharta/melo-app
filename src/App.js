import React, { useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles'
import { Credentials, Loader } from './components'
import { loaderTimeout } from './utils'
import { lightTheme, darkTheme } from './styles/theme'
import { FaMoon, FaSun } from 'react-icons/fa'
import axios from 'axios'

const App = () => {
  const [loading, setLoading] = useState(false)
  const [theme, setTheme] = useState('dark')
  const spotify = Credentials()
  const [token, setToken] = useState('')

  console.log('RENDERING APP.JS');

  const themeToggler = () => (
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  )

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, loaderTimeout)
  }, [])

  useEffect(() => {
    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    })
    .then(tokenResponse => {
      console.log(tokenResponse.data.access_token)
      setToken(tokenResponse.data.access_token)
    })
  }, [])

  return (
    <>
      <ThemeProvider theme={ theme === 'dark' ? darkTheme : lightTheme }>
        <GlobalStyle />
        {loading ? (<Loader />) : (
          <>
            <h1>Melo</h1>
            <ThemeController>
              <button className="theme__button" onClick={() => themeToggler()}>
                <>
                  { theme === 'dark' ? <FaMoon /> : <FaSun /> }
                </>
              </button>
            </ThemeController>
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

