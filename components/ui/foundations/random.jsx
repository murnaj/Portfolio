"use client";

import Carousel from "@/components/ui/carousel";
export function CarouselDemo() {
  const slideData = [
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Urban Dreams",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Neon Nights",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Desert Whispers",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}

{/* <div className=''>

                                                            
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
                                                        <div className=''>
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
                                                        </div> */}