import React from 'react'
import { ArrowRightIcon } from 'lucide-react'
export default function() {
    return (
        <div className='flex flex-col items-center gap-8 mt-30 mx-6'>
            <h1 className='text-9xl max-w-200 text-center font-serif'>Save It To Never Lose It</h1>
            <p className='text-lg font-medium'>Save all of your helpful resources in one place to find them easily when needed</p>
            <button className='flex gap-2 bg-black text-white w-52 justify-center h-15 items-center rounded-2xl cursor-pointer p-2'>
                <span className='text-md font-medium'>Get Started For Free</span>
                <span className='bg-white text-black rounded-md'><ArrowRightIcon/></span>
            </button>
        </div>
    )
}
