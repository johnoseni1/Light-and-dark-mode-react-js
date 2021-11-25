import React, {useState} from 'react'
import logo from './logo.svg'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import './App.css'

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${(props) =>
    props.theme.mode === 'dark' ? '#282c34' : '#eee'};
  color: ${(props) => (props.theme.mode === 'dark' ? '#eee' : '#282c34')}
}
`

function App() {
  const [theme, setTheme] = useState({ mode: 'dark' })
  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyle/>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           click on the button below to change mode
          </p>
          <button style={{backgroundColor: "#999", border: "none", padding: "20px", color: "#fff"}} onClick={e => setTheme (theme.mode === 'dark' ? {mode : "light"} : { mode : "dark"})}>Change mode</button>
        </header>
      </div>
      </>
    </ThemeProvider>
  )
}

export default App
