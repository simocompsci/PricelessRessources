'use client'
import React, { useState } from 'react'
import { DM_Sans } from 'next/font/google'
import { Menu, X } from 'lucide-react'

const DmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
})

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className={`${DmSans.className} w-full py-6`}>
      <div className='flex justify-between items-center mx-6 md:mx-20'>
        {/* Logo */}
        <h1 className='text-3xl md:text-5xl font-medium'>Logo</h1>

        {/* Desktop Nav Links */}
        <ul className='hidden md:flex justify-center items-center rounded-full bg-white px-8 py-3 text-lg font-medium gap-6 shadow-sm'>
          <li className='cursor-pointer'>About</li>
          <li className='cursor-pointer'>Features</li>
          <li className='cursor-pointer'>Testimonials</li>
          <li className='cursor-pointer'>Contact Us</li>
        </ul>

        {/* Right Section */}
        <div className='flex items-center gap-3'>
          <button className='inline-flex items-center justify-center px-5 bg-white text-gray-900 h-10 md:h-12 rounded-full font-semibold text-sm md:text-base'>
            Login
          </button>
          <button className='inline-flex items-center justify-center px-5 bg-black text-white h-10 md:h-12 rounded-full font-semibold text-sm md:text-base'>
            Register
          </button>

          {/* Hamburger */}
          <button
            className='ml-2 md:hidden p-2'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} className='bg-gray-300 rounded-lg' /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className='md:hidden bg-black text-white rounded-3xl mt-4 mx-6'>
          <ul className='flex flex-col items-center gap-4 p-6 text-lg font-medium'>
            <li>About</li>
            <li>Features</li>
            <li>Testimonials</li>
            <li>Contact Us</li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
