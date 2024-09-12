import React from 'react'
import "./App.css"
import { ColorTheme, useTheme } from './common/ColorTheme'

const App = () => {
  const { toggleTheme, theme } = useTheme()

  return (
    <div>
      <button className='button button--flex' onClick={() => toggleTheme()}>
        {theme === "light" ? "light mode" : "dark mode"}
      </button>
    </div>
  )
}

export default App