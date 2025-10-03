import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full mt-10'>
        <ul className='flex justify-between mx-20  items-center'>
            <li className='text-3xl'>Logo</li>
            <li>
                <ul className='flex justify-center items-center rounded-full bg-white text-md font-normal gap-4 w-100 h-15'>
                    <li>About</li>
                    <li>Features</li>
                    <li>Testemonials</li>
                    <li>Contact Us</li>
                </ul>
            </li>
            <li className='flex gap-4'>
                <button type='button'>Login</button>
                <button type='button'>Register</button>
            </li>
        </ul>
    </div>
  )
}

export default Navbar;