import React from "react";
import { ArrowRightIcon } from "lucide-react";
import { Bungee_Shade } from 'next/font/google'
import Image from "next/image";

const BungeeShade = Bungee_Shade({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

export default function Hero() {
  return (
    <>
      {/* HERO TEXT SECTION */}
      <section className="flex flex-col items-center text-center gap-6 mt-16 px-6">
        <h1 className={`${BungeeShade.className} text-5xl md:text-6xl lg:text-8xl font-serif font-bold leading-tight tracking-tight text-gray-900`}>
          <span className="block text-black">Save It</span>
          <span className="block text-black">
            To Never Lose It
          </span>
        </h1>

        <p className="text-lg md:text-xl font-light text-gray-600 max-w-2xl leading-relaxed">
          Save all of your helpful resources in one place — videos, articles,
          tutorials, and more — so you can easily find them when you need them most.
        </p>

        <button className="flex items-center gap-2 bg-black text-white px-7 py-3 rounded-full cursor-pointer hover:bg-gray-900 transition-all duration-300 group">
          <span className="font-medium text-lg">Get Started For Free</span>
          <span className="bg-white text-black rounded-md p-1 group-hover:translate-x-1 transition-transform duration-300">
            <ArrowRightIcon size={18} />
          </span>
        </button>
      </section>

      {/* IMAGE SECTION (unchanged layout) */}
      <section className="mt-80">
        <div className="relative mx-auto mt-150">
          {/* Blue rounded background */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-gray-400 w-[1400px] h-[700px] rounded-4xl"></div>

          {/* Image container */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[1200px] h-[850px] overflow-hidden z-10">
            <Image
              src="/images/pexels-tara-winstead-8383412.jpg"
              alt="papers"
              fill
              className="object-cover rounded-t-4xl"
            />
          </div>
        </div>
      </section>
    </>
  );
}
