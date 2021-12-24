import React, { useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from './styles'
import { Loader } from './components'
import { loaderTimeout } from './utils'

const App = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, loaderTimeout)
  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {loading ? (<Loader />) : (
          <>
            <h1>Melo</h1>
            <h1>Melo</h1>
            <h1>Melo</h1>
            <h1>Melo</h1>
          </>
        )}
      </ThemeProvider>
    </>
  )
}

export default App

