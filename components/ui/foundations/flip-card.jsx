import React from 'react'
import Image from 'next/image'
import { AnimatedTestimonials } from '../shadcn/animated-testimonials'


const testimonialsData = [
    {
        src: "/testimonial_1.jpeg",
        quote: "I wish I would have thought of it first. Creative agency is the most tech valuable business resource we have ever purchased. Dude your stuff  is the bomb! eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt to the explicabo.",
        name: "Ahon Monsery",
        designation: "- CEO AT TECH"

    },
    {
        src: "/testimonial_2.jpeg",
        quote: "I wish I would have thought of it first. Creative agency is the most tech valuable business resource we have ever purchased. Dude your stuff  is the bomb! eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt to the explicabo.",
        name: "Ahon Monsery",
        designation: "- CEO AT TECH"


    },
    {
        src: "/testimonial_3.jpeg",
        quote: "I wish I would have thought of it first. Creative agency is the most tech valuable business resource we have ever purchased. Dude your stuff  is the bomb! eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt to the explicabo.",
        name: "Ahon Monsery",
        designation: "- CEO AT TECH"

    }
    // Add more testimonials as needed
];

const FlipCard = () => {
    return (
        <div className='bg-[#181818] text-[#fefefe]/95 w-full'>

            <div className='h-[40px]'></div>


            <div className='bg-[#0a0a0a] w-full'>
                <div className='container'>
                    <div>
                       
                        <AnimatedTestimonials testimonials={testimonialsData} autoplay={true} />
                    </div>
                </div>

            </div>

            <div className='h-[50px]'></div>

            <div className='container'>
                <div className='flex lg:justify-between md:justify-center items-center gap-2'>
                    {["/partner_1.svg", "/partner_2.svg", "/partner_3.svg", "/partner_4.svg", "/partner_5.svg"].map((src, i) => (
                        <div key={i} className="relative w-20 h-8 md:w-35 md:h-20 lg:w-[210px] lg:h-[75px]">
                            <Image src={src} alt="logo" fill className="object-contain" />
                        </div>
                    ))}
                </div>
            </div>


            <div className='h-[50px]'></div>

            <div className='container'>
                <div className='w-full bg-[url(/cta_bg.jpeg)] py-[90px] gap-4 rounded-2xl'>
                    
                    <div className='lg:max-w-[1140px] 2xl:max-w-[1400px] text-center'>
                    <h2 className="text-[#fefefe]/200 font-bold font-[family-name:var(--font-poppins)] text-center lg:text-[50px] md:text-[36px] text-[28px]  mx-auto bg-cover ">
                        Let's disscuse make something
                        <span>
                            <i className="lg:mx-3 mx-1">cool</i>
                        </span>
                        together
                    </h2>
                    </div>
                    <div className='h-[50px]'></div>
                    <div className='' >
                        <div className='flex justify-center items-center'>
                            <a className='hover:underline hover:text-orange-700 text-[16px]  text-[#FFFFFF] font-bold' href='/#'>
                                Apply For Meeting
                            </a>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                role="img"
                                className="ml-[15px] text-[24px]  hover:text-orange-700 "
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
            </div>

            <div className='h-[90px]'></div>




        </div>
    )
}

export default FlipCard
