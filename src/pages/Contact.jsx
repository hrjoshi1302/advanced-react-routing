import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navigationbuttons from '../components/NavigationButtons '

// Contact component displays Contact page and navigation controls
const Contact = () => {

  // Hook to programmatically navigate between routes
  const navigate = useNavigate()

  return (
    <div className='text-white bg-black'>

      {/* Navigation buttons */}
      <Navigationbuttons />

      {/* Contact page content */}
      <div className='h-screen w-screen flex justify-center items-center text-8xl'>
        Contact
      </div>

    </div>
  )
}

export default Contact