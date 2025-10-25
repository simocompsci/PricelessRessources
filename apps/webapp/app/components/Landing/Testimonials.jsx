import React from 'react'
import { Bungee_Shade } from 'next/font/google'
import { Mona_Sans } from 'next/font/google'
import { DM_Sans } from 'next/font/google'

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

const DmSans = DM_Sans({
    subsets: ['latin'],
    weight: '800',
    display: 'swap',
})

export default function Testimonials() {
    return (
        <div className='flex flex-col justify-center mx-auto mt-20'>
            <div>
                <div>
                    <h1 className={`${BungeeShade.className} text-4xl md:text-7xl text-black text-center font-bold leading-tight max-w-xl md:max-w-4xl`}>
                        Hear From People Like You And Me
                    </h1>
                </div>
                <div>
                    <p className='text-lg md:text-xl leading-relaxed text-black text-center'>See how this application improved their workflow and daily life</p>
                </div>
                <div></div>
            </div>

        </div>
    )
}
