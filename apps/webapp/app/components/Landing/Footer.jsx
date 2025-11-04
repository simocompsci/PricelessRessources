import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import { Mona_Sans } from 'next/font/google'

const MonaSans = Mona_Sans({
  subsets: ['latin'],
  weight: '800',
  display: 'swap',
})


const Footer = () => {
  return (
    <footer className="w-full px-6 md:px-20 py-10 text-black">
      {/* Top row: email and phone */}
      <div className={`${MonaSans.className} flex flex-col md:flex-row items-center gap-10 justify-center mb-8 text-6xl font-bold`}>
        <a
          href="mailto:contact@gmail.com"
          className="underline underline-offset-4 hover:text-gray-700 transition-colors"
        >
          contact@gmail.com
        </a>

        <a
          href="tel:+21266325487"
          className="hover:text-gray-700 transition-colors mt-2 md:mt-0"
        >
          (+212)66325487
        </a>
      </div>

      {/* Bottom row: copyright */}
      <div className={`${MonaSans.className} flex items-center justify-start ml-16 mt-10 gap-2 text-3xl font-semibold text-primary`}>
        <FaRegCopyright className="text-base" />
        <p>2025/2026 all rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
