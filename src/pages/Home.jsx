import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navigationbuttons from '../components/Navigationbuttons '

// Home component displays the landing page and basic navigation controls
const Home = () => {

  // Hook to programmatically navigate between routes
  const navigate = useNavigate()

  return (
    <div className='text-white bg-black'>

      {/* Navigation buttons */}
      <Navigationbuttons />

      {/* Home page content */}
      <div className='h-screen w-screen flex justify-center items-center text-8xl'>
        Home
      </div>

    </div>
  )
}

export default Home