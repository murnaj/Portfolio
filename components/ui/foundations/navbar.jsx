"use client";

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/shadcn/button';
import { Input } from '@/components/ui/shadcn/input';
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
    <div className={`${scrolled ? 'bg-black':'bg-transparent'} text-[#FFFFFF]/100 w-full fixed z-60`}>
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


          <div className='side_bar py-4  relative'>
            <button
              onClick={() => setSidebarOpen(true)}
              className="focus:outline-none"
              aria-label="Open sidebar"
            >
              <Image
                src="/menu2.svg"
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
                   <div className=''>
                  <div className="fixed top-0 right-0 h-full w-90 bg-[#181818] z-50 transition-transform duration-300 overflow-auto">
                    <button
                      onClick={() => setSidebarOpen(false)}
                      className="text-[#efefef]/130 border-1 border-white hover:text-orange-600 rounded-full h-[25px] w-[25px] items-center float-right mx-5 my-5 "
                      aria-label="Close sidebar"
                    >
                      &times;
                    </button>
                    <div className=" items-center p-4 mx-[6px]">
                      <span className="font-bold text-lg ">
                        <Image src="/logo.svg" alt="alt" width={90} height={35} />
                      </span>

                    </div>

                    {/* Sidebar content here */}
                    <div className="p-4 py-[35px] mx-[6px]">
                      <p className=' text-[#efefef]/130 text-[22px] font-bold leading-[1.4em] font-[family-name:var(--font-poppins)] max-w-[400px]'>
                        Do you have a project in your
                        mind? Keep connect us.
                      </p>
                      {/* 90px 50px 50px; */}
                    </div>
                    <div className='py-[35px] p-4 '>
                      <h2 className='text-[#efefef]/150 font-bold text-[18px] mb-[35px] mx-[6px]'>Contact Us</h2>
                      <div>
                        <li className='mb-[20px] flex text-[#b4b9aa]'>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="img"
                            className="text-[24px] mx-[6px]"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                              fill="#ff4a17"
                              d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3M16 8h-2q-.425 0-.712-.288T13 7t.288-.712T14 6h2V4q0-.425.288-.712T17 3t.713.288T18 4v2h2q.425 0 .713.288T21 7t-.288.713T20 8h-2v2q0 .425-.288.713T17 11t-.712-.288T16 10z">
                            </path>
                          </svg>
                          +44 454 7800 112
                        </li>
                        <li className='mb-[20px] flex text-[#b4b9aa]'>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="img"
                            className="text-[24px] mx-[6px]"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                              fill="#ff4a17"
                              d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2">
                            </path>
                          </svg>
                          infotech@arino.com</li>
                        <li className=' flex text-[#b4b9aa]'>
                          <svg xmlns='http://www.w3.org/2000/svg'
                            aria-hidden="true"
                            role="img"
                            className="text-[24px] mx-[6px]"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path fill="#ff4a17"
                            d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7">
                            </path>
                          </svg>
                          50 Wall Street Suite, 44150
                          Ohio, United States </li>

                          <div className='py-[35px] mx-[6px]'>
                               <div className='mb-[35px] text-[18px] text-[#fefefe]/200 font-bold  font-[family-name:var(--font-poppins)]'>Subscribe</div>
                        <div className="h-[50px] w-full max-w-full flex items-center gap-2 rounded-[10px] bg-black py-[5px] px-2">
                            <Input className="flex-1 min-w-0 bg-black text-white placeholder:text-neutral-500 border-none focus:outline-none focus:ring-0 " type="email" placeholder="example@gmail.com" />
                            <Button variant='destructive' size='default' className='whitespace-nowrap'>Send</Button>

                            {/* flex items-center lg:justify-center rounded-[10px] md:justify-between sm:justify-between justify-between bg-black px-[6px] md:gap-1  */}

                        </div>
                        <div className='text-[16px] mt-[25px] mx-[6px] block text-[#b4b9aa]'>
                            At vero eos et accusamus et iusto odio as part dignissimos ducimus qui blandit.
                        </div>
                          </div>

                          <div className='py-[35px] mx-[6px]'>
                              <div className='flex justify-start space-x-3 '>
                            <div className="h-9 w-9 rounded-full border-1 border-white  text-white flex items-center justify-center">
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        role="img"
                                        className=""
                                        width="0.88em"
                                        height="1em" viewBox="0 0 448 512">
                                        <path fill="currentColor"
                                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3M447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2c-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3c94 0 111.28 61.9 111.28 142.3V448z"
                                        /></svg>
                                </a>
                            </div>
                            <div className='h-9 w-9 rounded-full border-1 border-white  text-white flex items-center justify-center'>
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        role="img"
                                        className=""
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 512 512">
                                        <path fill="currentColor"
                                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645c0 138.72-105.583 298.558-298.558 298.558c-59.452 0-114.68-17.219-161.137-47.106c8.447.974 16.568 1.299 25.34 1.299c49.055 0 94.213-16.568 130.274-44.832c-46.132-.975-84.792-31.188-98.112-72.772c6.498.974 12.995 1.624 19.818 1.624c9.421 0 18.843-1.3 27.614-3.573c-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319c-28.264-18.843-46.781-51.005-46.781-87.391c0-19.492 5.197-37.36 14.294-52.954c51.655 63.675 129.3 105.258 216.365 109.807c-1.624-7.797-2.599-15.918-2.599-24.04c0-57.828 46.782-104.934 104.934-104.934c30.213 0 57.502 12.67 76.67 33.137c23.715-4.548 46.456-13.32 66.599-25.34c-7.798 24.366-24.366 44.833-46.132 57.827c21.117-2.273 41.584-8.122 60.426-16.243c-14.292 20.791-32.161 39.308-52.628 54.253"
                                        />
                                    </svg>
                                </a>
                            </div>
                            <div className='h-9 w-9 rounded-full border-1 border-white  text-white flex items-center justify-center' >
                                <a href="#">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        role="img"
                                        className=""
                                        width="1.13em"
                                        height="1em"
                                        viewBox="0 0 576 512">
                                        <path fill="currentColor"
                                            d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305m-317.51 213.508V175.185l142.739 81.205z"
                                        /></svg>
                                </a>
                            </div>
                            <div className='h-9 w-9 rounded-full border-1 border-white  text-white flex items-center justify-center'>
                                <a href="#">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        role="img"
                                        className=""
                                        width="0.88em"
                                        height="1em"
                                        viewBox="0 0 448 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M94.12 315.1c0 25.9-21.16 47.06-47.06 47.06S0 341 0 315.1s21.16-47.06 47.06-47.06h47.06zm23.72 0c0-25.9 21.16-47.06 47.06-47.06s47.06 21.16 47.06 47.06v117.84c0 25.9-21.16 47.06-47.06 47.06s-47.06-21.16-47.06-47.06zm47.06-188.98c-25.9 0-47.06-21.16-47.06-47.06S139 32 164.9 32s47.06 21.16 47.06 47.06v47.06zm0 23.72c25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06H47.06C21.16 243.96 0 222.8 0 196.9s21.16-47.06 47.06-47.06zm188.98 47.06c0-25.9 21.16-47.06 47.06-47.06S448 171 448 196.9s-21.16 47.06-47.06 47.06h-47.06zm-23.72 0c0 25.9-21.16 47.06-47.06 47.06s-47.06-21.16-47.06-47.06V79.06c0-25.9 21.16-47.06 47.06-47.06s47.06 21.16 47.06 47.06zM283.1 385.88c25.9 0 47.06 21.16 47.06 47.06S309 480 283.1 480s-47.06-21.16-47.06-47.06v-47.06zm0-23.72c-25.9 0-47.06-21.16-47.06-47.06s21.16-47.06 47.06-47.06h117.84c25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06z"
                                        />
                                    </svg>
                                </a>
                            </div>


                        </div>


                          </div>



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
