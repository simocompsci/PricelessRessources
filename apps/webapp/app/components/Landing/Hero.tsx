import React from 'react'
import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <>
      <section className='flex flex-col items-center text-center gap-6 mt-16 px-6'>
        <h1 className='text-5xl md:text-6xl lg:text-8xl font-serif leading-tight max-w-4xl'>
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

      <section className='mt-80'>
        <div className="relative mx-auto mt-150">
          {/* Blue rounded background */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-gray-400 w-[1400px] h-[700px] rounded-4xl"></div>

          {/* Image container */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[1200px] h-[850px]  overflow-hidden z-10">
            <Image
              src="/images/pexels-tara-winstead-8383412.jpg"   
              alt="papers"
              fill                       
              className="object-cover rounded-t-4xl" />

          </div>
        </div>
      </section>

      <h1 className='text-center text-9xl font-serif mt-20 '>About Us</h1>
    </>


  )
}
