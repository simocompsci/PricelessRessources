import React from 'react'
import { Bungee_Shade } from 'next/font/google'

const BungeeShade = Bungee_Shade({
    subsets: ['latin'],
    weight: '400',
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
                </div>
            </section>
        </>


    )
}
