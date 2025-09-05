"use client";;
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";

import { useEffect, useState } from "react";

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    <div className=" md:max-w-[1140px] max-w-[400px] md:px-8 lg:px-12 py-6 mx-auto ">
      {/*  */}
      <div className="relative grid grid-cols-1 md:gap-20  md:grid-cols-2 gap-5">
        <div>
          <div className="relative h-100 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom">
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="w-full py-[65px] rounded-3xl md:h-[400px] h-[350px] object-center" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between md:pt-[70px] md:pl-[70px] pt-[40px] pl-[40px]">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}>

            <div className="mb-[20px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                className="items-center text-[42px] "
                width="1.19em" ut
                height="1em"
                viewBox="0 0 1664 1408">
                <path fill="currentColor"
                  d="M768 832v384q0 80-56 136t-136 56H192q-80 0-136-56T0 1216V512q0-104 40.5-198.5T150 150T313.5 40.5T512 0h64q26 0 45 19t19 45v128q0 26-19 45t-45 19h-64q-106 0-181 75t-75 181v32q0 40 28 68t68 28h224q80 0 136 56t56 136m896 0v384q0 80-56 136t-136 56h-384q-80 0-136-56t-56-136V512q0-104 40.5-198.5T1046 150t163.5-109.5T1408 0h64q26 0 45 19t19 45v128q0 26-19 45t-45 19h-64q-106 0-181 75t-75 181v32q0 40 28 68t68 28h224q80 0 136 56t56 136">
                </path>
              </svg>
            </div>

            <motion.p className="text-[#fefefe] font-bold text-[20px]  ">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block">
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 150 30"
              className="w-[150px] h-[30px] mt-[15px]"
            >
              <defs>
                <style>
                  {`.filled { fill: #FF3C00; }`}
                </style>
                <linearGradient id="halfGradient" x1="0" x2="100%" y1="0" y2="0">
                  <stop offset="50%" stopColor="#FF3C00" />
                  <stop offset="50%" stopColor="#1A1A1A" /> {/* Background color */}
                </linearGradient>
              </defs>

              {/* Star Path */}
              <symbol id="star" viewBox="0 0 24 24">
                <path d="M12 2L14.9 8.6L22 9.3L16.5 14L18.2 21L12 17.3L5.8 21L7.5 14L2 9.3L9.1 8.6L12 2Z" />
              </symbol>

              {/* Stars */}
              <use href="#star" x="0" className="filled" width="24" height="24" />
              <use href="#star" x="30" className="filled" width="24" height="24" />
              <use href="#star" x="60" className="filled" width="24" height="24" />
              <use href="#star" x="90" className="filled" width="24" height="24" />
              <use href="#star" x="120" width="24" height="24" fill="url(#halfGradient)" />
            </svg>

            <h3 className="text-[20px] mt-[70px] font-[family-name:var(--font-poppins)] font-bold text-[#fefefefe] ">
              {testimonials[active].name}
            </h3>
            <p className="text-[16px] mt-[10px] text-[#aeaeae]">
              {testimonials[active].designation}
            </p>

          </motion.div>
          <div className="flex justify-end gap-4 pt-12 md:pt-0 ">
            <button
              onClick={handlePrev}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800">
              <IconArrowLeft
                className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800">
              <IconArrowRight
                className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
