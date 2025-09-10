"use client";

import React from 'react'
import { Card, CardContent } from "@/components/ui/shadcn/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,

} from "@/components/ui/shadcn/carousel";
import Image from 'next/image';


const InfoFold = () => {

    const [api, setApi] = React.useState(null);
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);
    React.useEffect(() => {
        if (!api) {
            return;
        }
        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);



    return (
        //    <div className="main-content2 mx-[105.5px] px-[12px] bg-neutral-950  max-w-[1140px] rounded-lg -mt-[130px] absolute right-0 left-0 ">
        //                 <div className="cs_funfact text-white  flex grid-cols-2 gap-2 items-start p-8  md:flex-row bg-[url(/funfact_shape_bg.svg)]  ">
        //                     {/* Left Section */}
        //                     <div className="cs_funfact-left mb-8 md:mb-0 md:mr-12">
        //                         <h2 className="text-white text-[42px] font-bold mb-4">Our fun fact</h2>
        //                         <p className="text-gray-300 text-[16px] max-w-[360px] leading-[1.75em]">
        //                             Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque
        //                             laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
        //                         </p>
        //                     </div>


        //                     {/* Right Section */}
        //                     <div className="cs_funfact-right grid grid-cols-2 gap-x-12 gap-y-6 text-right">

        // {/* 40K Clients */}
        // <div className="flex items-center">
        //     <div className="text-white text-[42px] font-bold mr-3">40K</div>
        //     <div className="text-right">
        //         <div className="text-orange-700 text-[18px] font-[800] -mt-[4px] -mb-[1px] ">+</div>
        //         <p className="text-gray-300 text-[16px] min-w-42">Global Happy Clients</p>
        //     </div>
        // </div>

        // {/* 50K Projects */}
        // <div className="flex items-center justify-end">
        //     <div className="text-white text-[42px] font-bold mr-3">50K</div>
        //     <div className="text-right">
        //         <div className="text-orange-700 text-[18px] font-[800] -mt-[4px] -mb-[1px]">+</div>
        //         <p className="text-gray-300 text-[16px] min-w-38">Project Completed</p>
        //     </div>
        // </div>

        // {/* 245 Team Members */}
        // <div className="flex items-center justify-end">
        //     <div className="text-white text-[42px] font-bold mr-3">245</div>
        //     <div className="text-right">
        //         <div className="text-orange-700 text-[18px] font-[800] -mt-[4px] -mb-[1px]">+</div>
        //         <p className="text-gray-300 text-[16px] min-w-32">Team Members</p>
        //     </div>
        // </div>

        // {/* 550 Digital Products */}
        // <div className="flex items-center justify-end">
        //     <div className="text-white text-[42px] font-bold mr-3">550</div>
        //     <div className="text-right">
        //         <div className="text-orange-700 text-[18px]  -mt-[4px] -mb-[1px] font-[800]">+</div>
        //         <p className="text-gray-300 text-[16px] min-w-33">Digital Products</p>
        //     </div>
        // </div>

        //                     </div>
        //                 </div>

        //             </div>

        <div className=' bg-[#181818] w-full contents'>
            <div className='container '>

                <div className=' bg-[url(/cta_bg.jpeg)] bg-cover rounded-[15px] text-[#fefefe]/100 -mt-[130px] py-[60px] px-[50px] 
                flex xl:flex-row flex-col '>
                    <div className='left_content'>
                        <h2 className='text-[42px] xl:text-[42px] mb-[20px] font-[family-name:var(--font-poppins)] font-bold'>
                            Our fun fact
                        </h2>
                        <p className='text-[16px] text-[#fefefe]/70 xl:max-w-[550px] leading-[1.75em] mb-[20px]'>
                            Sed ut perspiciatis unde omnis iste natus error
                            voluptatem accusantium doloremque laudantium,
                            totam rem aperiam, eaque ipsa quae ab illo
                            inventore veritatis.
                        </p>
                    </div>

                    <div className='right_content xl:pl-[80px] '>
                        <div className='grid md:grid-cols-2 lg:gap-y-9 lg:gap-x-12 grid-cols-1 gap-4'>

                            {/* 40K Clients */}
                            <div className="flex items-center ">
                                <div className="font-bold mr-[13px] font-[family-name:var(--font-poppins)]  text-[42px] 2xl:text-[50px] ">40K</div>
                                <div className="">
                                    <div className="text-[#fe4817] text-[18px] -mt-[8px] -mb-[5px]">+</div>
                                    <p className=" text-[#fefefe]/70 text-[16px] whitespace-nowrap">Global Happy Clients</p>
                                </div>
                            </div>

                            {/* 50K Projects */}
                            <div className="flex items-center ">
                                <div className="font-bold  mr-[13px] font-[family-name:var(--font-poppins)]  text-[42px] 2xl:text-[50px]  ">50K</div>
                                <div className="">
                                    <div className="text-[#fe4817]  text-[18px] -mt-[8px] -mb-[5px]">+</div>
                                    <p className=" text-[#fefefe]/70 text-[16px] whitespace-nowrap ">Project Completed</p>
                                </div>
                            </div>

                            {/* 245 Team Members */}
                            <div className="flex items-center ">
                                <div className="  font-bold mr-[13px] font-[family-name:var(--font-poppins)] text-[42px] 2xl:text-[50px]">245</div>
                                <div className="">
                                    <div className="text-[#fe4817]  text-[18px] -mt-[8px] -mb-[5px]">+</div>
                                    <p className=" text-[#fefefe]/70 text-[16px]">Team Members</p>
                                </div>
                            </div>

                            {/* 550 Digital Products */}
                            <div className="flex items-center ">
                                <div className="  font-bold mr-[13px] font-[family-name:var(--font-poppins)] text-[42px] 2xl:text-[50px]">550</div>
                                <div className="">
                                    <div className="text-[#fe4817] -mt-[8px] -mb-[5px] text-[18px]">+</div>
                                    <p className=" text-[#fefefe]/70 text-[16px] ">Digital Products</p>
                                </div>
                            </div>


                        </div>
                    </div>


                </div>

            </div>

            <div className='bg-[#181818]'>
                <div className='h-[150px]'></div>

                <div className='container'>
                    <div className='Service text-[#fefefe]/100'>
                        <div className='flex xl:flex-row flex-col gap-8'>
                            <div className='px-[12px]'>
                                <h3 className='mb-[20px] font-[family-name:var(--font-poppins)] md:text-[18px] text-[16px] text-[#fefefe]/60'>
                                    What can we do
                                </h3>
                                <h2 className='font-[family-name:var(--font-poppins)] 2xl:text-[50px] lg:text-[42px] text-[36px] font-bold xl:max-w-[700px] md:max-w-[650px] max-w-[1100] leading-[1.3em] '>
                                    Services we can help you with
                                </h2>
                                <div className='md:h-[45px] h-[20px]'></div>
                                <div className='flex items-center'>
                                    <a className='hover:underline hover:text-orange-700 lg:text-[16px] text-[16px]' href='/#'>
                                        See All Services
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
                            <div className=' px-3 mt-0'>
                                <div className="grid md:grid-cols-1 grid-cols-1 lg:grid-cols-4 md:gap-2 gap-4">
                                    <div className="lg:px-[12px]"></div>
                                    <div className="relative px-[12px] flex items-center justify-center">
                                        <Image src="/service_1.jpeg" alt="alt" width={170} height={80} className="brightness-55 hover:brightness-100 rounded-[15px] w-full h-full object-cover" />
                                        <span className="absolute  font-[family-name:var(--font-poppins)] text-white font-bold lg:text-[20px] text-[30px]  leading-[1.5em]  ">UI/UX design</span>
                                    </div>
                                    <div className="lg:px-[12px] "></div>
                                    <div className="relative px-[12px] flex items-center justify-center">
                                        <Image src="/service_2.jpeg" alt="alt" width={170} height={80} className="brightness-55 hover:brightness-100 rounded-[15px] w-full h-full object-cover" />
                                        <span className="absolute  font-[family-name:var(--font-poppins)] text-white font-bold lg:text-[20px] text-[30px] lg:max-w-[135px] leading-[1.5em]">React.js Development</span>
                                    </div>
                                    <div className="relative px-[12px] flex items-center justify-center">
                                        <Image src="/service_3.jpeg" alt="alt" width={170} height={80} className="brightness-55 hover:brightness-100 rounded-[15px] w-full h-full object-cover" />
                                        <span className="absolute   font-[family-name:var(--font-poppins)] text-white  font-bold lg:text-[20px] text-[30px] lg:max-w-[120px] leading-[1.5em]">Digital Marketing</span>
                                    </div>
                                    <div className="lg:px-[12px]"></div>
                                    <div className="relative px-[12px] flex items-center justify-center">
                                        <Image src="/service_4.jpeg" alt="alt" width={170} height={80} className="brightness-55 hover:brightness-100 rounded-[15px] w-full h-full object-cover" />
                                        <span className="absolute  font-[family-name:var(--font-poppins)] text-white  font-bold lg:text-[20px] text-[30px]  leading-[1.5em]">Technology</span>
                                    </div>
                                    <div className="lg:px-[12px]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='h-[150px]'></div>

                <div>
                    <div className='container'>
                        <h3 className='text-center text-[#999696] text-[18px] font-[family-name:var(--font-poppins)] mb-[20px]'>
                            Latest Projects
                        </h3>
                        <h2 className='text-center text-[#FEFEFE] text-[42px] font-[family-name:var(--font-poppins)] font-bold'>
                            Portfolio to explore
                        </h2>
                    </div>

                    <div className='h-[90px]'></div>
                    <div>

                    </div>

                </div>

                <div className='h-[150px]'></div>

                <div className='container'>
                    <div className='flex lg:flex-row flex-col md:gap-4 gap-6 text-[#fefefe]/100'>
                        <div className='px-[12px]'>
                            <h3 className='mb-[20px] font-[family-name:var(--font-poppins)] md:text-[18px] text-[15px] text-[#fefefe]/80'>
                                On Awards
                            </h3>
                            <h2 className='font-[family-name:var(--font-poppins)] md:text-[42px] text-[28px] font-bold md:max-w-[450px] max-w-[500px]'>
                                We get multiple awards
                            </h2>
                        </div>

                        <div className='md:ml-[95px] md:px-[12px] '>
                            <div className="mx-auto max-w-xs">
                                <Carousel setApi={setApi} className="w-full max-w-xs">
                                    <CarouselContent  >
                                        {Array.from({ length: 5 }).map((_, index) => (
                                            <CarouselItem key={index} className='max-w-[500px]'>
                                                <div className=''>
                                                <Card>
                                                    <CardContent className="flex aspect-video items-center justify-between ">
                                                        <div className='flex flex-col'>
                                                            <div>
                                                                <h3 className='mb-[15px] text-[26px] text-[#ff4a17] font-bold'>
                                                                    2020
                                                                </h3>
                                                                <h2 className='mb-[10px] text-[20px] text-[#fefefe]'>New technology innovation</h2>
                                                                <p className='mb-[7px] text-[#b1b1b1] text-[16px]'>Honorable mention</p>
                                                                <p className='text-[#b1b1b1] text-[16px]'>Desktop exelence</p>
                                                            </div>
                                                            <div>
                                                                <h3 className='mb-[15px] text-[26px] text-[#ff4a17] font-bold'>
                                                                    2019
                                                                </h3>
                                                                <h2 className='mb-[10px] text-[20px] text-[#fefefe]'>Google awards</h2>
                                                                <p className='mb-[7px] text-[#b1b1b1] text-[16px]'>Website of the day</p>
                                                                <p className='text-[#b1b1b1] text-[16px]'>Mobile exelence</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex flex-col'>
                                                            <div>
                                                                <h3 className='mb-[15px] text-[26px] text-[#ff4a17] font-bold'>
                                                                    2022
                                                                </h3>
                                                                <h2 className='mb-[10px] text-[20px] text-[#fefefe]'>UI/UX design of the month</h2>
                                                                <p className='mb-[7px] text-[#b1b1b1] text-[16px]'>Website of the day</p>
                                                                <p className='text-[#b1b1b1] text-[16px]'>Mobile exelence</p>
                                                            </div>
                                                            <div>
                                                                <h3 className='mb-[15px] text-[26px] text-[#ff4a17] font-bold'>
                                                                    2021
                                                                </h3>
                                                                <h2 className='mb-[10px] text-[20px] text-[#fefefe]'>CSS awards design</h2>
                                                                <p className='mb-[7px] text-[#b1b1b1] text-[16px]'>Honorable mention</p>
                                                                <p className='text-[#b1b1b1] text-[16px]'>Desktop exelence</p>
                                                            </div>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                                </div>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <CarouselPrevious />
                                    <CarouselNext />
                                </Carousel>
                                {/* <div className="mt-4 text-center text-sm text-muted-foreground">
                                    Slide {current} of {count}
                                  </div> */}
                            </div>
                        </div>
                    </div>
                </div>


                {/* <div className='h-[130px]'></div>

                <div className='container'>
                    <h2 className='font-[family-name:var(--font-poppins)] md:text-[42px] text-[30px] md:max-w-[1300px] font-bold  max-w-[400px] text-[#fefefe]/100 text-center  '>
                        Our agile process is ability to adapt and respond to change.
                        Agile organizations view change as an opportunity, not a threat.
                    </h2>
                </div>

                <div className='h-[70px]'></div> */}

            </div>

            <div className='h-[130px]'></div>

            <div className='container'>
                <h2 className='font-[family-name:var(--font-poppins)] lg:text-[42px] text-[36px]  font-bold text-[#fefefe]/100 text-center '>
                    Our agile process is ability to adapt and respond to change.
                    Agile organizations view change as an opportunity, not a threat.
                </h2>
            </div>

            <div className='h-[100px]'></div>

        </div>






    )
}

export default InfoFold
