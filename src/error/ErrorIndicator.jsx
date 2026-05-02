import React from 'react'

// Error_indicator component renders a 404 (Not Found) page
const ErrorIndicator = () => {

  return (
    // Full-screen container centered using Flexbox
    <div className='h-screen w-screen flex flex-col justify-center items-center text-6xl'>

      {/* 404 Error Code */}
      <div className='text-red-400 mb-4'>
        404
      </div>

      {/* Error message */}
      <div>
        Not Found
      </div>

    </div>
  )
}

export default ErrorIndicator