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

        <div className='bg-[#181818] w-full '>
            <div className='container'>
                <div className='bg-[url(/cta_bg.jpeg)]  rounded-[15px] text-[#fefefe]/100 -mt-[130px] '>
                    <div className="py-8 px-4 md:py-[60px] md:px-[80px] flex flex-col md:flex-row ">

                        <div className=''>
                            <h2 className='text-[30px] md:text-[50px] mb-[20px] font-[family-name:var(--font-poppins)] font-bold'>
                                Our fun fact
                            </h2>
                            <p className=' text-[14px] md:text-[16px] text-[#fefefe]/70 md:max-w-[500px] leading-[1.75em] max-w-[300px] md:mb-0 mb-[20px]'>
                                Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
                            </p>
                        </div>

                        <div className='md:pl-[80px]'>
                            <div className='grid md:grid-cols-2 grid-cols-1 gap-4 md:gap-3 md:gap-x-15'>

                                {/* 40K Clients */}
                                <div className="flex items-center ">
                                    <div className="font-bold mr-[13px] font-[family-name:var(--font-poppins)] text-[32px] md:text-[50px] ">40K</div>
                                    <div className="">
                                        <div className="text-[#fe4817] text-[20px] -mt-[4px] -mb-[1px]">+</div>
                                        <p className=" text-[#fefefe]/70 text-[14px] md:text-[16px] whitespace-nowrap">Global Happy Clients</p>
                                    </div>
                                </div>

                                {/* 50K Projects */}
                                <div className="flex items-center ">
                                    <div className="font-bold  mr-[13px] font-[family-name:var(--font-poppins)] text-[32px] md:text-[50px]  ">50K</div>
                                    <div className="">
                                        <div className="text-[#fe4817]  text-[20px] -mt-[4px] -mb-[1px]">+</div>
                                        <p className=" text-[#fefefe]/70 text-[14px] md:text-[16px] whitespace-nowrap ">Project Completed</p>
                                    </div>
                                </div>

                                {/* 245 Team Members */}
                                <div className="flex items-center ">
                                    <div className="  font-bold mr-[13px] font-[family-name:var(--font-poppins)] text-[32px] md:text-[50px] ">245</div>
                                    <div className="">
                                        <div className="text-[#fe4817]  text-[20px] -mt-[4px] -mb-[1px]">+</div>
                                        <p className=" text-[#fefefe]/70 text-[14px] md:text-[16px]">Team Members</p>
                                    </div>
                                </div>

                                {/* 550 Digital Products */}
                                <div className="flex items-center ">
                                    <div className="  font-bold mr-[13px] font-[family-name:var(--font-poppins)] text-[32px] md:text-[50px] ">550</div>
                                    <div className="">
                                        <div className="text-[#fe4817] -mt-[4px] -mb-[1px] text-[20px]">+</div>
                                        <p className=" text-[#fefefe]/70 text-[14px] md:text-[16px] ">Digital Products</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                </div>

                <div className='h-[100px]'></div>

                <div className=' Service text-[#fefefe]/100'>
                    <div className='flex'>
                        <div className='px-[12px]'>
                            <h3 className='mb-[20px] font-[family-name:var(--font-poppins)] md:text-[18px] text-[15px] text-[#fefefe]/60'>
                                What can we do
                            </h3>
                            <h2 className='font-[family-name:var(--font-poppins)] md:text-[50px] text-[30px] font-bold md:max-w-[450px] max-w-[700px]'>
                                Services we can help you with
                            </h2>
                            <div className='md:h-[45px] h-[20px]'></div>
                            <div className='flex items-center'>
                                <a className='hover:underline hover:text-orange-700 lg:text-[16px] text-[12px]' href='/#'>
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
                        <div className='pics px-2 mt-4'>


                        </div>
                    </div>
                </div>


                <div className='h-[50px]'></div>
                <div className='flex text-[#fefefe]/100'>
                    <div className='px-[12px]'>
                        <h3 className='mb-[20px] font-[family-name:var(--font-poppins)] md:text-[18px] text-[15px] text-[#fefefe]/60'>
                            On Awards
                        </h3>
                        <h2 className='font-[family-name:var(--font-poppins)] md:text-[50px] text-[28px] font-bold md:max-w-[450px] max-w-[500px]'>
                            We get multiple awards
                        </h2>
                    </div>

                    <div className='md:ml-[110px] md:px-[12px]'>
                        <div className="mx-auto max-w-xs">
                            <Carousel setApi={setApi} className="w-full max-w-xs">
                                <CarouselContent>
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <CarouselItem key={index}>
                                            <Card>
                                                <CardContent className="flex aspect-video items-center justify-center p-6">
                                                    <div className='w-full'>
                                                        Hello

                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                            <div className="mt-4 text-center text-sm text-muted-foreground">
                               
                            </div>
                        </div>
                    </div>
                </div>

                <div className='h-[130px]'></div>

                <h2 className='font-[family-name:var(--font-poppins)] md:text-[50px] text-[30px] md:max-w-[1300px] font-bold  max-w-[400px] text-[#fefefe]/100 text-center  '>
                    Our agile process is ability to adapt and respond to change.
                    Agile organizations view change as an opportunity, not a threat.
                </h2>

                <div className='h-[70px]'></div>



            </div>
        </div>


    )
}

export default InfoFold
