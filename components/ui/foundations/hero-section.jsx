import React from 'react'


const HeroSection = () => {
    return (

        <div className="w-full bg-[url(/hero_bg.jpeg)] text-[#fefefe]/110  bg-cover">

            <div className='container'>
                <div className="pt-[220px] pb-[170px] min-h-[960px] ">
                    <div className='md:max-w-[800px] max-w-[370px] '>
                        <h1 className="text-[#fefefe]/130  lg:text-[100px] md:text-[56px] lg:max-w-[750px] md:max-w-[450px] text-[42px] font-bold font-[family-name:var(--font-poppins)] mb-[60px]  leading-[1.25em]">
                            Creativity In Our Blood Line
                        </h1>
                    </div>

                    <div className="flex lg:flex-row flex-col-reverse lg:justify-between lg:items-center gap-4">
                        <div className="text-white text-sm font-normal text-[16px] decoration-orange-700 hover:text-orange-700 ">
                            <a
                                href="/#"
                                className="hover:underline flex "
                            >
                                Get a Quote

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    role="img"
                                    viewBox="0 0 16 16"
                                    className="w-6 h-6 text-[24px] ml-[15px]  "
                                >
                                    <path
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                    />
                                </svg>

                            </a>
                        </div>


                        <div className='text-[16px] md:max-w-[550px] max-w-[350px] leading-[1.9em]'>
                            We deliver best problem solving solution for our client and provide
                            finest finishing product in present and upcoming future.
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default HeroSection
