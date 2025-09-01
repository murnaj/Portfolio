"use client";

import React, { useEffect, useState } from 'react'
import Image from 'next/image'


const Navbar = () => {

   const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change 50 to the scrollY value where you want the bg to switch
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // <div className=" w-full bg-black ">


    //         <div className=" w-full  text-white fixed  bg-transparent ">
    //             <div className="flex flex-wrap justify-between items-center h-[90px] mx-[90.5556px] px-[12px]">
    //                 {/* Logo */}
    //                 <div className="max-h-[45px] ">
    //                     <img src="/logo.svg" alt="Logo" className=" max-w-auto" />
    //                 </div>


    //                 <div >   

    //                     <div className="flex flex-row space-x-10 text-[15px] ">
    //                     <a href="#home" className="hover:text-orange-700 font-bold py-[10px]">Home</a>
    //                     <a href="#about" className="hover:text-orange-700 font-bold py-[10px]">About</a>
    //                     <a href="#services" className="hover:text-orange-700 font-bold py-[10px]">Services</a>
    //                     <a href="#portfolio" className="hover:text-orange-700 font-bold py-[10px]">Portfolio</a>
    //                 </div>
    //                 </div>

    //                  <img src="/sort.svg" alt="Logo" className="w-[18px] h-[16px] bg-white" />

    //             </div>


    //         </div>
    // </div>
    <div className={`${scrolled ? 'bg-black' : 'bg-transparent'} text-[#efefef]/90 w-full fixed transition-colors duration-300 z-50 bg-cover bg-no-repeat bg-center`}>
      <div className='container'>
        <div className='flex justify-between' >
          <div className='flex items-center justify-between py-4'>
            <Image src="/logo.svg" alt="alt" width={90} height={35} />
          </div>
          <div className=' md:hidden lg:flex justify-center items-center gap-8 font-[family-name:var(--font-poppins)] text-[15px]'>
            <a href="#home" className="hover:text-orange-700">HOME</a>
            <a href="#about" className="hover:text-orange-700">ABOUT</a>
            <a href="#services" className="hover:text-orange-700">SERVICES</a>
            <a href="#portfolio" className="hover:text-orange-700">PORTFOLIO</a>
            <a href="#services" className="hover:text-orange-700">BLOG</a>
            <a href="#portfolio" className="hover:text-orange-700">PAGES</a>
          </div>
          <div className='py-4'>
            <Image src="/sort.svg" alt="alt" width={40} height={25} className='rounded-full border-1' />

          </div>

        </div>



      </div>
    </div>
  )
}

export default Navbar
