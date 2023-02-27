import React, { useState, useEffect } from 'react'
import type { ReactElement } from 'react'
import { Helmet } from 'react-helmet'
import '../../globals.css'
import logo from './logo.svg'
import './App.css'
import Header from '../Header/Header'

function App (): ReactElement {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light')

  const toggleTheme = (): void => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.body.className = theme
  }, [theme])

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>CV Application</title>
      </Helmet>
      <header className="App-header">
        <Header setThemeFunction={setTheme}></Header>
      </header>
      <main>
        <div className="form-container">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
      </main>
    </div>
  )
}

export default App
