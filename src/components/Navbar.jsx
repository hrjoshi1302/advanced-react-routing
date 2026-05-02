import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { context_for_theme } from '../context/ThemeContext';
import { useState } from 'react';

// Navbar component handles navigation and theme switching
const Navbar = () => {

  // Access global theme state from Context API
  const [inittheme, setinittheme] = useContext(context_for_theme)

  // State for navbar background color
  const [navbg, setnavbg] = useState('bg-cyan-600')

  // State for navbar text color (currently not used)
  const [navtxt, setnavtxt] = useState('text-white')

  // State for theme button background color
  const [backcolor, setbackcolor] = useState('bg-black')

  // State for theme button text color
  const [txt, settxt] = useState('text-white')

  // Function to toggle theme between Dark and Light
  const change_theme = () => {

    // If current theme is Dark → switch to Light
    if (inittheme == 'Dark') {
      setnavbg('bg-black')          // Change navbar background
      setbackcolor('bg-white')      // Change button background
      settxt('text-black')          // Change button text color
      setinittheme('Light')         // Update global theme
    }

    // If current theme is Light → switch to Dark
    else if (inittheme == 'Light') {
      setnavbg('bg-cyan-600')       // Reset navbar background
      setbackcolor('bg-black')      // Reset button background
      settxt('text-white')          // Reset button text color
      setinittheme('Dark')          // Update global theme
    }
  }

  return (
    // Navbar container with dynamic background color
    <div className={`${navbg} flex flex-col flex-wrap justify-center`}>

      {/* Top section: Logo + Navigation */}
      <div className='flex flex-wrap justify-between py-3'>

        {/* Logo and Brand Name */}
        <div className='text-white flex flex-wrap text-5xl gap-6 px-18 font-bold'>

          {/* Logo Image */}
          <img
            className='h-[13vh] w-[13vh] rounded-4xl my-3'
            src='https://media.licdn.com/dms/image/v2/D4D0BAQGrIE0x5nOW7A/company-logo_200_200/B4DZcb5hz4GgAU-/0/1748519756625/the_sheryians_coding_school_logo?e=2147483647&v=beta&t=p6R8eq-bz2pkHOc4TdyuYd5WI_lJ88uQlmgIeMjhtyo'
            alt='Logo'
          />

          {/* Brand Name */}
          <div className='tracking-wider my-10'>
            LionBlaze
          </div>

        </div>

        {/* Navigation Links + Theme Button */}
        <div className='text-white flex flex-wrap justify-end text-3xl px-12 my-12 font-light'>

          {/* Navigation Links */}
          <div className='mx-5'><Link to='/'>Home</Link></div>
          <div className='mx-5'><Link to='/about'>About</Link></div>
          <div className='mx-5'><Link to='/contact'>Contact</Link></div>
          <div className='mx-5'><Link to='/products'>Products</Link></div>

          {/* Theme Toggle Button */}
          <button
            onClick={change_theme}
            className={`px-4 py-2 ${backcolor} ${txt} rounded-2xl tracking-wider`}
          >
            {inittheme}
          </button>

        </div>

      </div>

    </div>
  )
}

export default Navbar