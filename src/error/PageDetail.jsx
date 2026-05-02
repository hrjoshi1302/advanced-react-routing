import React from 'react'
import { useParams } from 'react-router-dom'

// Page_detail component handles dynamic route parameters
// Example route: /contact/:id
const PageDetail = () => {

  // Extract route parameters from URL
  const params = useParams()

  // Log params for debugging (e.g., { id: "123" })
  console.log(params)

  return (
    // Display dynamic content using route parameter
    <div className='h-screen w-screen flex justify-center items-center text-4xl'>
      Page Detail ID: {params.id}
    </div>
  )
}

export default PageDetail