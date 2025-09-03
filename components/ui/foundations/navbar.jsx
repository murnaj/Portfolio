"use client";

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
// import DrawerDemo from './DrawerDemo';
// import App from 'next/app';
// import AppSidebar from './app-sidebar';
// import { SidebarProvider, SidebarTrigger } from "@/components/ui/shadcn/sidebar"


const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
    <div className={`${scrolled ? 'bg-black':'bg-transparent'} text-[#FFFFFF]/100 w-full fixed z-10`}>
      <div className='container'>
        <div className='flex justify-between' >
          <div className='flex items-center justify-between'> 
            <Image src="/logo.svg" alt="alt" width={90} height={35} />
          </div>
          <div className='md:hidden lg:flex justify-center items-center gap-12 font-[family-name:var(--font-poppins)] text-[15px]'>
            <a href="#home" className="hover:text-orange-700">HOME</a>
            <a href="#about" className="hover:text-orange-700">ABOUT</a>
            <a href="#services" className="hover:text-orange-700">SERVICES</a>
            <a href="#portfolio" className="hover:text-orange-700">PORTFOLIO</a>
            <a href="#services" className="hover:text-orange-700">BLOG</a>
            <a href="#portfolio" className="hover:text-orange-700">PAGES</a>
          </div>


          <div className='side_bar py-4 relative'>
            <button
              onClick={() => setSidebarOpen(true)}
              className="focus:outline-none"
              aria-label="Open sidebar"
            >
              <Image
                src="/sort.svg"
                alt="Open Sidebar"
                width={40}
                height={25}
                className="rounded-full border-1 cursor-pointer"
              />
            </button>

            {/* Sidebar */}
            {sidebarOpen && (
              <>
                {/* Overlay */}
                <div
                  className=""
                  onClick={() => setSidebarOpen(false)}
                />
                {/* Sidebar panel */}

                <div className='contianer'>
                  <div className="fixed top-0 right-0 h-full w-90 bg-[#181818] z-50 transition-transform duration-300">
                    <button
                      onClick={() => setSidebarOpen(false)}
                      className="text-[#efefef]/130 border-1 border-white hover:text-orange-600 rounded-full h-[25px] w-[25px] items-center float-right"
                      aria-label="Close sidebar"
                    >
                      &times;
                    </button>
                    <div className=" items-center p-4 ">
                      <span className="font-bold text-lg ">
                        <Image src="/logo.svg" alt="alt" width={90} height={35} />
                      </span>

                    </div>

                    {/* Sidebar content here */}
                    <div className="p-4 py-[35px]">
                      <p className=' text-[#efefef]/130 text-[20px] leading-[1.4em] font-[family-name:var(--font-poppins)] max-w-[260px]'>
                        Do you have a project in your
                        mind? Keep connect us.
                      </p>
                      {/* 90px 50px 50px; */}
                    </div>
                    <div className='py-[35px] p-4 '>
                      <h2 className='text-[#efefef]/150 mb-[35px]'>Contact Us</h2>
                      <div>
                        <li className='mb-[20px] flex'>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="img"
                            className="text-[24px]"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3M16 8h-2q-.425 0-.712-.288T13 7t.288-.712T14 6h2V4q0-.425.288-.712T17 3t.713.288T18 4v2h2q.425 0 .713.288T21 7t-.288.713T20 8h-2v2q0 .425-.288.713T17 11t-.712-.288T16 10z">
                            </path>
                          </svg>
                          +44 454 7800 112
                        </li>
                        <li className='mb-[20px] flex'>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="img"
                            className="text-[24px]"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2">
                            </path>
                          </svg>
                          infotech@arino.com</li>
                        <li className='mb-[20px] flex'>
                          <svg xmlns='http://www.w3.org/2000/svg'
                            aria-hidden="true"
                            role="img"
                            class="text-[24px]"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path fill="currentColor"
                            d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7">
                            </path>
                          </svg>
                          50 Wall Street Suite, 44150
                          Ohio, United States </li>



                      </div>
                    </div>
                  </div>
                </div>

              </>
            )}

          </div>


        </div>



      </div>
    </div>
  )
}

export default Navbar
