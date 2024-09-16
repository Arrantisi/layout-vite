import React, { useState } from 'react'
import "./App.css"
import { useTheme } from './common/ColorTheme'
import { FaAirbnb } from "react-icons/fa";


const App = () => {
  const { toggleTheme, theme } = useTheme();
  const [snackbar, setSnackbar] = useState(true)

  const toggleSnackbar = () => {
    setSnackbar(!snackbar);
    setTimeout(() => {
      setSnackbar(snackbar)
    }, 2000);
  }

  return (
    <div className='main'>
      <div className="main__container ">
        <h1 className="main__title ">pres to change the theme</h1>

        <button className='main__button button button--flex' onClick={() => { toggleTheme(); toggleSnackbar() }}>
          {theme === "light" ? "light mode" : "dark mode"}<i className="main__button-icon"><FaAirbnb className='react-icons' /></i>
          <p className='main__tap'>tap</p>
        </button>

      </div>
      <p className={`main__button-subtitle ${snackbar ? ' ' : 'show-button-subtitle'}`}>mode has been changed</p>
    </div>
  )
}

export default App