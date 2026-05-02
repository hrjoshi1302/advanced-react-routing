import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import Navigationbuttons from '../components/NavigationButtons '

// Products component handles product categories and nested routes
const Products = () => {
  
  // Hook for programmatic navigation
  const navigate = useNavigate()

  return (
    <div className='text-white bg-black h-screen w-screen'>

      {/* Navigation buttons */}
      <Navigationbuttons />


      {/* Navigation links for product categories */}
      <div className='flex justify-center text-xl gap-6 py-5'>

        {/* Link to Men category */}
        <Link to='/products/men'>Men</Link>

        {/* Link to Women category */}
        <Link to='/products/women'>Women</Link>

        {/* Link to Kids category */}
        <Link to='/products/kids'>Kids</Link>

      </div>

      {/* Outlet renders the selected nested route component */}
      <Outlet />

    </div>
  )
}

export default Products