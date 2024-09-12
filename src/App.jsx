import React from 'react'
import "./App.css"
import { useTheme } from './common/ColorTheme'
import { FaAirbnb } from "react-icons/fa";


const App = () => {
  const { toggleTheme, theme } = useTheme()

  return (
    <div>
      <button className='button button--flex' onClick={() => toggleTheme()}>
        {theme === "light" ? "light mode" : "dark mode"} <i className="button__icon"><FaAirbnb /></i>
      </button>
    </div>
  )
}

export default App