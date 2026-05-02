import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navigationbuttons from '../components/NavigationButtons '

// About component displays About page and navigation controls
const About = () => {
 
  return (
    <div className='text-white bg-black'>

      {/* Navigation buttons */}
      <Navigationbuttons />

      {/* About page content */}
      <div className='h-screen w-screen flex justify-center items-center text-8xl'>
        About
      </div>

    </div>
  )
}

export default About