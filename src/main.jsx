import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Import BrowserRouter for handling routing in the app
import { BrowserRouter } from 'react-router-dom'

// Import custom Context API for theme management (light/dark mode etc.)
import ThemeContext from './context/ThemeContext.jsx'

// Create root element and render the React application
createRoot(document.getElementById('root')).render(

  // BrowserRouter wraps the entire app to enable navigation between pages
  <BrowserRouter>

    {/* Context Provider wraps the app to provide global theme state */}
    <ThemeContext>

      {/* Main App component */}
      <App />

    </ThemeContext>

  </BrowserRouter>
)

