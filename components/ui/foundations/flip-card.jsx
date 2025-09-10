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

            <div className='h-[100px]'></div>

            <div className="relative overflow-hidden">
           {/* Marquee wrapper */}
      <div className="flex whitespace-nowrap">
        {/* Animated inner container */}
        <div className="flex animate-marquee">
          <span className="marquee__item">
            Our reputed world wide partners
          </span>
          <span className="marquee__item">
            Our reputed world wide partners
          </span>
        </div>

        {/* Duplicate for seamless looping */}
        <div className="flex animate-marquee">
          <span className="marquee__item">
            Our reputed world wide partners
          </span>
          <span className="marquee__item">
            Our reputed world wide partners
          </span>
        </div>
      </div>


                {/* Local styles */}
                <style>{`

        /* Marquee container */
        .marquee {
          display: block;
          width: 100%;
        }

        /* Inner scrolling wrapper */
        .marquee__inner {
          display: inline-flex;
          align-items: center;
          white-space: nowrap;
          will-change: transform;
          animation: marquee-scroll 15s linear infinite;
          transform: translate3d(0, 0, 0);
        }

        /* Text styling */
        .marquee__item {
          display: inline-block;
          font-size: 56px;             
          line-height: 1.2em;

          padding: 5px 6px;            /* space between repeating text */
          color: transparent;             /* no fill, just stroke */
          -webkit-text-stroke-width: 3px;
          -webkit-text-stroke-color: #ee4717; /* orange outline */
          text-stroke: 2px #ee4717;       /* fallback for some browsers */
          font-weight: 700;
          font-family: "Helvetica";
          white-space: nowrap;
        }


         /* Medium screens: 80px */
        @media (min-width: 768px) {
          .marquee__item {
            font-size: 80px;
             padding: 5px 6px;
              
          }
        }

        /* Large screens: 100px */
        @media (min-width: 1024px) {
          .marquee__item {
            font-size: 100px;
             padding: 5px 6px;   
          }
        }

        /* Keyframes for continuous left scroll */
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }

        .animate-marquee {
          animation: marquee-scroll 15s linear infinite;
        }

        /* Accessibility: disable motion for reduced-motion users */
        @media (prefers-reduced-motion: reduce) {
          .marquee__inner { animation: none; }
        }
      `}</style>
            </div>
            <div className='h-[105px]'></div>

            <div className='container'>
                <div className='flex lg:justify-between md:justify-center items-center gap-2'>
                    {["/partner_1.svg", "/partner_2.svg", "/partner_3.svg", "/partner_4.svg", "/partner_5.svg"].map((src, i) => (
                        <div key={i} className="relative w-20 h-8 md:w-35 md:h-20 lg:w-[250px] lg:h-[90px]">
                            <Image src={src} alt="logo" fill className="object-contain" />
                        </div>
                    ))}
                </div>
            </div>


            <div className='h-[50px]'></div>

            <div className='container'>
                <div className='w-full bg-[url(/cta_bg.jpeg)] py-[90px] gap-4 rounded-2xl  bg-cover'>

                    <div className='lg:max-w-[1140px] 2xl:max-w-[1650px] text-center'>
                        <h2 className="text-[#fefefe]/200 font-bold font-[family-name:var(--font-poppins)] text-center lg:text-[50px] md:text-[36px] text-[28px]  ">
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
