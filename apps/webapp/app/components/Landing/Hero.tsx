import React from 'react'
import { ArrowRightIcon } from 'lucide-react'

export default function Hero() {
  return (
    <section className='flex flex-col items-center text-center gap-6 mt-16 px-6'>
      <h1 className='text-4xl md:text-6xl lg:text-8xl font-serif leading-tight max-w-4xl'>
        Save It To Never Lose It
      </h1>
      <p className='text-base md:text-lg font-medium text-gray-700 max-w-2xl'>
        Save all of your helpful resources in one place to find them easily when needed.
      </p>
      <button className='flex items-center gap-2 bg-black text-white px-6 py-3 rounded-2xl cursor-pointer hover:bg-gray-900 transition'>
        <span className='font-medium text-md'>Get Started For Free</span>
        <span className='bg-white text-black rounded-md p-1'>
          <ArrowRightIcon size={18} />
        </span>
      </button>
    </section>
  )
}
