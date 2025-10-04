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
        <nav className={`${DmSans.className} w-full mt-6`}>
            <div className='flex justify-between items-center mx-6 md:mx-20'>
                {/* Logo */}
                <h1 className='text-3xl md:text-5xl font-medium'>Logo</h1>

                {/* Desktop Nav Links */}
                <ul className='hidden md:flex justify-center items-center rounded-full bg-white w-120 h-15 text-lg font-medium gap-6'>
                    <li className='cursor-pointer'>About</li>
                    <li className='cursor-pointe'>Features</li>
                    <li className='cursor-pointer'>Testimonials</li>
                    <li className='cursor-pointer'>Contact Us</li>
                </ul>

                {/* Right Section (Buttons + Mobile Menu Icon) */}
                <div className='flex items-center gap-3'>
                    <button className='inline-flex items-center justify-center w-20 md:w-23 bg-white text-gray-900 h-10 md:h-12 rounded-full font-semibold text-sm md:text-base'>
                        Login
                    </button>
                    <button className='inline-flex items-center justify-center w-20 md:w-23 bg-black text-white h-10 md:h-12 rounded-full font-semibold text-sm md:text-base '>
                        Register
                    </button>


                    {/* Hamburger (visible on mobile) */}
                    <button
                        className='ml-2 md:hidden p-2'
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X size={28} className='bg-gray-300 rounded-lg' /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className='md:hidden bg-black border border-black text-white rounded-3xl mt-4 mx-6'>
                    <ul className='flex flex-col items-center gap-4 p-6 text-lg font-medium'>
                        <li className='cursor-pointer'>About</li>
                        <li className='cursor-pointer'>Features</li>
                        <li className='cursor-pointer'>Testimonials</li>
                        <li className='cursor-pointer'>Contact Us</li>
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar
