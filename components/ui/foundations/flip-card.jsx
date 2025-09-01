import React from 'react'
import Image from 'next/image'

const FlipCard = () => {
    return (
        <div className='bg-[#181818] text-[#fefefe]/95 w-full'>
            <div className='container'>
                <div className='h-[40px]'></div>
                <div className='flex lg:justify-between md:justify-center items-center gap-2'>
                    {["/partner_1.svg", "/partner_2.svg", "/partner_3.svg", "/partner_4.svg", "/partner_5.svg"].map((src, i) => (
                        <div key={i} className="relative w-20 h-8 sm:w-28 sm:h-11 lg:w-[210px] lg:h-[75px]">
                            <Image src={src} alt="logo" fill className="object-contain" />
                        </div>
                    ))}
                </div>
                <div className='h-[50px]'></div>
                <div className='w-full bg-[url(/cta_bg.jpeg)] py-[90px] gap-4 rounded-2xl'>
                    <h2 className="font-semibold font-[family-name:var(--font-poppins)] text-center lg:text-[50px] text-[25px] lg:max-w-[1110px] mx-auto">
                        Let's disscuse make something
                        <span>
                            <i className="lg:mx-3 mx-1">cool</i>
                        </span>
                        together
                    </h2>
                    <div className='h-[50px]'></div>
                    <div className='' >
                        <div className='flex justify-center items-center'>
                            <a className='hover:underline hover:text-orange-700 lg:text-[16px] text-[12px]' href='/#'>
                                Apply For Meeting
                            </a>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                role="img"
                                className="ml-[15px] lg:text-[24px] mg:text-[24px] text-[24px] hover:text-orange-700 "
                                width="1em"
                                height="1em"
                                viewBox="0 0 16 16">
                                <path fill="currentColor"
                                    
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8">
                                </path>
                            </svg>
                        </div>


                    </div>
                </div>

                <div className='h-[90px]'></div>



            </div>
        </div>
    )
}

export default FlipCard
