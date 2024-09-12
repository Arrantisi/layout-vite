import React from 'react'
import "./App.css"
import { useTheme } from './common/ColorTheme'
import { FaAirbnb } from "react-icons/fa";


const App = () => {
  const { toggleTheme, theme } = useTheme()

  return (
    <div className='main'>
      <div className="main__container">
        <h1 className="main__title ">pres to change the theme</h1>

        <button className='main__button button button--flex' onClick={() => toggleTheme()}>
          {theme === "light" ? "light mode" : "dark mode"}<i className="button__icon"><FaAirbnb /></i>
          <p className='main__tap'>tap</p>
        </button>

      </div>
    </div>
  )
}

export default App