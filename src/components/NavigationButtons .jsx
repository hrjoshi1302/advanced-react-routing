import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navigationbuttons  = () => {

      // Hook to programmatically navigate between routes
      const navigate = useNavigate()

  return (
      <div className='flex mx-5 my-4 gap-3'>

        {/* Navigate to Home page */}
        <button
          className='bg-cyan-600 px-6 py-1'
          onClick={() => navigate('/')}
        >
          Home
        </button>

        {/* Navigate to previous page */}
        <button
          className='bg-cyan-600 px-6 py-1'
          onClick={() => navigate(-1)}
        >
          Back
        </button>

        {/* Navigate to next page */}
        <button
          className='bg-cyan-600 px-6 py-1'
          onClick={() => navigate(1)}
        >
          Next
        </button>

      </div>
  )
}

export default Navigationbuttons 