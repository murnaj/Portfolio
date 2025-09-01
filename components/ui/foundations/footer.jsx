// import React from 'react'
// import { Input } from '../shadcn/input'
// import { Button } from '../shadcn/button'

// const Footer = () => {
//     return (
//         <div className="text-white bg-neutral-800 w-full h-max">
//             <div className='container'>
//                 <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
//                     <div className=''>
//                         <div className="col1-item  ">
//                             <img src="/logo.svg" alt="Logo" className="h-auto " />
//                             <p className=" mt-[30px] max-w-[350px] text-neutral-500 ">Welcome to arino sed ut perspiciae omunde omnis iste natus error sitort voluptatem accusantium.</p>
//                         </div>

//                         <div className="cs_socialbtn flex flex-nowrap space-x-5 mt-[25px] -mr-[7px] -mb-[7px] sm:flex-row">
// <div className="btn1 ">
//     <a href="#">
//         <svg xmlns="http://www.w3.org/2000/svg"
//             aria-hidden="true"
//             role="img"
//             className="iconify iconify--fa6-brands"
//             width="0.88em"
//             height="1em" viewBox="0 0 448 512">
//             <path fill="currentColor"
//                 d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3M447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2c-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3c94 0 111.28 61.9 111.28 142.3V448z"
//             /></svg>
//     </a>
// </div>
// <div className="btn2">
//     <a href="#">
//         <svg xmlns="http://www.w3.org/2000/svg"
//             aria-hidden="true"
//             role="img"
//             className="iconify iconify--fa6-brands"
//             width="1em"
//             height="1em"
//             viewBox="0 0 512 512">
//             <path fill="currentColor"
//                 d="M459.37 151.716c.325 4.548.325 9.097.325 13.645c0 138.72-105.583 298.558-298.558 298.558c-59.452 0-114.68-17.219-161.137-47.106c8.447.974 16.568 1.299 25.34 1.299c49.055 0 94.213-16.568 130.274-44.832c-46.132-.975-84.792-31.188-98.112-72.772c6.498.974 12.995 1.624 19.818 1.624c9.421 0 18.843-1.3 27.614-3.573c-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319c-28.264-18.843-46.781-51.005-46.781-87.391c0-19.492 5.197-37.36 14.294-52.954c51.655 63.675 129.3 105.258 216.365 109.807c-1.624-7.797-2.599-15.918-2.599-24.04c0-57.828 46.782-104.934 104.934-104.934c30.213 0 57.502 12.67 76.67 33.137c23.715-4.548 46.456-13.32 66.599-25.34c-7.798 24.366-24.366 44.833-46.132 57.827c21.117-2.273 41.584-8.122 60.426-16.243c-14.292 20.791-32.161 39.308-52.628 54.253"
//             />
//         </svg>
//     </a>
// </div>
// <div className="btn3">
//     <a href="#">
//         <svg
//             xmlns="http://www.w3.org/2000/svg"
//             aria-hidden="true"
//             role="img"
//             className="iconify iconify--fa6-brands"
//             width="1.13em"
//             height="1em"
//             viewBox="0 0 576 512">
//             <path fill="currentColor"
//                 d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305m-317.51 213.508V175.185l142.739 81.205z"
//             /></svg>
//     </a>
// </div>
// <div className="btn4">
//     <a href="#">
//         <svg
//             xmlns="http://www.w3.org/2000/svg"
//             aria-hidden="true"
//             role="img"
//             className="iconify iconify--fa6-brands"
//             width="0.88em"
//             height="1em"
//             viewBox="0 0 448 512"
//         >
//             <path
//                 fill="currentColor"
//                 d="M94.12 315.1c0 25.9-21.16 47.06-47.06 47.06S0 341 0 315.1s21.16-47.06 47.06-47.06h47.06zm23.72 0c0-25.9 21.16-47.06 47.06-47.06s47.06 21.16 47.06 47.06v117.84c0 25.9-21.16 47.06-47.06 47.06s-47.06-21.16-47.06-47.06zm47.06-188.98c-25.9 0-47.06-21.16-47.06-47.06S139 32 164.9 32s47.06 21.16 47.06 47.06v47.06zm0 23.72c25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06H47.06C21.16 243.96 0 222.8 0 196.9s21.16-47.06 47.06-47.06zm188.98 47.06c0-25.9 21.16-47.06 47.06-47.06S448 171 448 196.9s-21.16 47.06-47.06 47.06h-47.06zm-23.72 0c0 25.9-21.16 47.06-47.06 47.06s-47.06-21.16-47.06-47.06V79.06c0-25.9 21.16-47.06 47.06-47.06s47.06 21.16 47.06 47.06zM283.1 385.88c25.9 0 47.06 21.16 47.06 47.06S309 480 283.1 480s-47.06-21.16-47.06-47.06v-47.06zm0-23.72c-25.9 0-47.06-21.16-47.06-47.06s21.16-47.06 47.06-47.06h117.84c25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06z"
//             />
//         </svg>
//     </a>
// </div>
//                         </div>
//                     </div>
//                     <div>
{/* <div className='col2-content '>
    <h2 className='mb-[35px] text-[18px] text-white'>Services</h2>
    <ul className="cs-menu_widget list text-neutral-600 ">
        <li className='mb-[20px] text-[16px] hover:text-orange-700 flex' ><a href="/service/service-details" >UI/UX design</a></li>
        <li className='mb-[20px] text-[16px] hover:text-orange-700 flex'><a href="/service/service-details" >WP development</a></li>
        <li className='mb-[20px] text-[16px] hover:text-orange-700 flex'><a href="/service/service-details" >Digital marketing</a></li>
        <li className='mb-[20px] text-[16px] hover:text-orange-700 flex'><a href="/service/service-details" >React development</a></li>
    </ul>
</div> */}
//                     </div>
// <div>
//     <h2 className='mb-[35px] text-[18px] text-white'>Contact Us</h2>
//     <ul className="cs-menu_widget list2 text-neutral-600 ">
//         <li className='mb-[20px] text-[16px]'>+44 454 7800 112</li>
//         <li className='mb-[20px] text-[16px]' >infotech@arino.com</li>
//         <li className='mb-[20px] text-[16px]'>50 Wall Street Suite, 44150
//             <br />Ohio, United States</li>
//     </ul>
// // </div>
//                     <div >
//                         <h2 className='mb-[35px] text-[18px] text-white'>Subscribe</h2>
//                         <div className='w-full flex   rounded-[10px]   h-[50px] bg-black pt-[5px] pr-[90px] pb-[5px] pl-[15px] '  >
//                             <Input className="placeholder:text-neutral-500 " type="email" placeholder="example@gmail.com" />
//                             <Button variant='destructive' size='default' >Send</Button>

//                         </div>
//                         <div className='news-letter-text text-[16px] text-neutral-500 mt-[25px] box-content size-72 block'>
//                             At vero eos et accusamus et iusto odio as part dignissimos ducimus qui blandit.
//                         </div>
//                     </div>
//                 </div>


//                 <div>
//                     {/* Left */}
//         <div className="flex justify-between py-[20px] border-t-2 border-neutral-700">
//             <div className="py-[4px] block   ">
//                 <div className='text-[16px] box-border'>
//                     Coypright © 2025 Laralink.
//                 </div>
//             </div>

//             {/* Right */}
//             <div className="py-[4px]">
//                 <ul className="flex  m-0 ">
//                     <li className="hover:text-gray-300 text-[16px] ">
//                         <a href="#" >Terms of Use</a>
//                     </li>
//                     <div className='mx-[10px]'> | </div>
//                     <br />
//                     <li className="hover:text-gray-300  text-[16px">
//                         <a href="#">Privacy Policy</a>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     </div>
// </div>
//         </div>
//     )
// }

// export default Footer

import Image from 'next/image'
import React from 'react'
import { Input } from '../shadcn/input'
import { Button } from '../shadcn/button'

const Footer = () => {
    return (
        <footer className='bg-[#181818] text-[#efefef]/70 w-full'>
            <div className="container">
                <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 py-6'>
                    <div className='mb-[40px]'>
                        <Image width={110} height={45} src="/logo.svg" alt="logo" />
                        <div className=''>
                            <p className='text-sm font-normal mt-[30px] '>Welcome to arino sed ut perspiciae omunde omnis iste natus error sitort voluptatem accusantium.</p>
                        </div>
                        <div className='flex justify-start space-x-3 mt-[25px] -mr-[7px] -mb-[7px]'>
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

                    <div className='mb-[40px]'>

                        <div className='mb-[35px] text-[18px] text-white font-[family-name:var(--font-poppins)]'>Services</div>
                        <ul className="cs-menu_widget list text-sm font-normal ">
                            <li className='mb-[20px]  hover:text-orange-700 ' ><a href="/service/service-details">UI/UX design</a></li>
                            <li className='mb-[20px]  hover:text-orange-700 '><a href="/service/service-details" >WP development</a></li>
                            <li className='mb-[20px]  hover:text-orange-700 '><a href="/service/service-details" >Digital marketing</a></li>
                            <li className='mb-[20px]  hover:text-orange-700 '><a href="/service/service-details" >React development</a></li>
                        </ul>

                    </div>


                    <div className='mb-[40px]'>
                        <div className='mb-[35px] text-[18px] text-white font-[family-name:var(--font-poppins)]'>Contact Us</div>
                        <ul>
                            <li className='mb-[20px] text-[16px]'>+44 454 7800 112</li>
                            <li className='mb-[20px] text-[16px]' >infotech@arino.com</li>
                            <li className='mb-[20px] text-[16px]'>50 Wall Street Suite, 44150
                                <br />Ohio, United States</li>
                        </ul>
                    </div>

                    <div className='mb-[40px]'>

                        <div className='mb-[35px] text-[18px] text-white font-[family-name:var(--font-poppins)]'>Subscribe</div>
                        <div className='flex items-center lg:justify-center rounded-[10px] md:justify-between sm:justify-between justify-between   bg-black p-[6px] md:gap-1 '>
                            <Input className="placeholder focus:outline-none focus:ring-0 focus:border-transparent " type="email" placeholder="example@gmail.com" />
                            <Button variant='destructive' size='default'>Send</Button>

                        </div>
                        <div className='text-[16px] mt-[25px]'>
                            At vero eos et accusamus et iusto odio as part dignissimos ducimus qui blandit.
                        </div>

                    </div>
                </div>

                <div className=" lg:justify-between md:flex md:justify-between text-center py-[20px] border-t-2 border-neutral-700  ">
                    <div className="py-[4px] block   ">
                        <div className='text-[16px] box-border font-opensans'>
                            Coypright © 2025 Laralink.
                        </div>
                    </div>

                    {/* Right */}
                    <div className="py-[4px] ">
                        <ul className="flex justify-center items-center m-0 ">
                            <li className="hover:text-orange-600 text-[16px] ">
                                <a href="#" >Terms of Use</a>
                            </li>
                            <div className='mx-[10px]'> | </div>
                            <br />
                            <li className="hover:text-orange-600 text-[16px">
                                <a href="#">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>





            </div>
        </footer >
    )
}

export default Footer
