import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

// Create a Context for managing theme globally (Dark / Light)
export const context_for_theme = createContext()

// Context Provider component
const ThemeContext = (props) => {

    // State to store current theme (default is 'Dark')
    const [inittheme, setinittheme] = useState('Dark')

  return (
    <div>

        {/* Provider makes theme state available to all child components */}
        <context_for_theme.Provider value={[inittheme, setinittheme]}>

            {/* Render all child components inside the provider */}
            {props.children}

        </context_for_theme.Provider>

    </div>
  )
}

export default ThemeContext