import React from 'react'
import { Bungee_Shade } from 'next/font/google'
import { Mona_Sans } from 'next/font/google'
import Image from 'next/image'

const BungeeShade = Bungee_Shade({
    subsets: ['latin'],
    weight: '400',
    display: 'swap',
})

const MonaSans = Mona_Sans({
    subsets: ['latin'],
    weight: '800',
    display: 'swap',
})

export default function Features() {
    return (
        <>
            <section className='mt-20 text-center'>
                <div>
                    <h1 className={`${BungeeShade.className} text-5xl md:text-7xl font-serif mb-6 leading-tight`}>
                        Features
                    </h1>

                    <div className='flex flex-col justify-between gap-20 mt-20'>
                        <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
                            <div className='flex flex-col items-start ml-10 md:ml-20 gap-5'>
                                <div className='bg-yellow-300 p-3 rounded-3xl'>
                                    <span className='text-center text-sm font-sans' style={{ fontWeight: '500' }}>
                                        First Feature
                                    </span>
                                </div>
                                <h1
                                    className={`${MonaSans.className} text-4xl md:text-6xl font-bold text-start leading-tight max-w-xl md:max-w-xl`}
                                >
                                    Use Our Product<br />For Your Benefit
                                </h1>

                                <ul className="flex flex-col items-start ml-8 md:ml-10 mt-2 space-y-3 md:space-y-4">
                                    <li className="flex gap-3 items-center">
                                        <span className="text-2xl font-semibold text-black">+</span>
                                        <p className="text-lg md:text-xl font-medium text-gray-700">
                                            Authentication To App
                                        </p>
                                    </li>

                                    <li className="flex gap-3 items-center">
                                        <span className="text-2xl font-semibold text-black">+</span>
                                        <p className="text-lg md:text-xl font-medium text-gray-700">
                                            Safety Of Your Account
                                        </p>
                                    </li>

                                    <li className="flex gap-3 items-center">
                                        <span className="text-2xl font-semibold text-black">+</span>
                                        <p className="text-lg md:text-xl font-medium text-gray-700">
                                            Availability Every Day
                                        </p>
                                    </li>
                                </ul>

                            </div>
                            <div className="flex justify-center items-center p-4 sm:p-6 mt-8 md:p-8 mx-4 sm:mx-6 md:mx-8">
                                <img
                                    src="/images/pexels-droosmo-2945595.jpg"
                                    alt="Product Preview"
                                    className="w-full max-w-sm h-[500px] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-3xl object-cover"
                                />
                            </div>

                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
                            <div className='flex flex-col items-start ml-10 md:ml-20 gap-5'>
                                <div className='bg-yellow-300 p-3 rounded-3xl'>
                                    <span className='text-center text-sm font-sans' style={{ fontWeight: '500' }}>
                                        First Feature
                                    </span>
                                </div>
                                <h1
                                    className={`${MonaSans.className} text-4xl md:text-6xl font-bold text-start leading-tight max-w-xl md:max-w-xl`}
                                >
                                    Use Our Product<br />For Your Benefit
                                </h1>

                                <ul className="flex flex-col items-start ml-8 md:ml-10 mt-2 space-y-3 md:space-y-4">
                                    <li className="flex gap-3 items-center">
                                        <span className="text-2xl font-semibold text-black">+</span>
                                        <p className="text-lg md:text-xl font-medium text-gray-700">
                                            Authentication To App
                                        </p>
                                    </li>

                                    <li className="flex gap-3 items-center">
                                        <span className="text-2xl font-semibold text-black">+</span>
                                        <p className="text-lg md:text-xl font-medium text-gray-700">
                                            Safety Of Your Account
                                        </p>
                                    </li>

                                    <li className="flex gap-3 items-center">
                                        <span className="text-2xl font-semibold text-black">+</span>
                                        <p className="text-lg md:text-xl font-medium text-gray-700">
                                            Availability Every Day
                                        </p>
                                    </li>
                                </ul>

                            </div>
                            <div className="flex justify-center items-center p-4 sm:p-6 mt-8 md:p-8 mx-4 sm:mx-6 md:mx-8">
                                <img
                                    src="/images/pexels-droosmo-2945595.jpg"
                                    alt="Product Preview"
                                    className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-3xl object-cover"
                                />
                            </div>

                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
                            <div className='flex flex-col items-start ml-10 md:ml-20 gap-5'>
                                <div className='bg-yellow-300 p-3 rounded-3xl'>
                                    <span className='text-center text-sm font-sans' style={{ fontWeight: '500' }}>
                                        First Feature
                                    </span>
                                </div>
                                <h1
                                    className={`${MonaSans.className} text-4xl md:text-6xl font-bold text-start leading-tight max-w-xl md:max-w-xl`}
                                >
                                    Use Our Product<br />For Your Benefit
                                </h1>

                                <ul className="flex flex-col items-start ml-8 md:ml-10 mt-2 space-y-3 md:space-y-4">
                                    <li className="flex gap-3 items-center">
                                        <span className="text-2xl font-semibold text-black">+</span>
                                        <p className="text-lg md:text-xl font-medium text-gray-700">
                                            Authentication To App
                                        </p>
                                    </li>

                                    <li className="flex gap-3 items-center">
                                        <span className="text-2xl font-semibold text-black">+</span>
                                        <p className="text-lg md:text-xl font-medium text-gray-700">
                                            Safety Of Your Account
                                        </p>
                                    </li>

                                    <li className="flex gap-3 items-center">
                                        <span className="text-2xl font-semibold text-black">+</span>
                                        <p className="text-lg md:text-xl font-medium text-gray-700">
                                            Availability Every Day
                                        </p>
                                    </li>
                                </ul>

                            </div>
                            <div className="flex justify-center items-center p-4 sm:p-6 mt-8 md:p-8 mx-4 sm:mx-6 md:mx-8">
                                <img
                                    src="/images/pexels-droosmo-2945595.jpg"
                                    alt="Product Preview"
                                    className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-3xl object-cover"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>


    )
}
