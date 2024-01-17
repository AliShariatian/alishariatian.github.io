"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

function HeroContent() {
   return (
      <motion.div initial="hidden" animate="visible" className="flex items-center justify-center px-20 mt-40 w-full z-20">
         <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
            <motion.div variants={slideInFromTop} className="welcome-box p-3 border border-[#7042f88b] opacity-90">
               <SparklesIcon className="text-[#b49bff] mr-[10px] size-5" />
               <h1 className="welcome-text text-[13px]">Front-end Developer</h1>
            </motion.div>

            <motion.p variants={slideInFromLeft(0.5)} className="flex flex-col mt-6 text-6xl font-bold text-white max-w-[600px] size-auto">
               <span>
                  Providing<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> the best </span>project experience
               </span>
            </motion.p>

            <motion.p variants={slideInFromLeft(0.8)} className="text-lg text-gray-400 my-5 max-w-[600px]">
               I'm a Front-end Developer with experience in Website development. Check out my projects and skills.
            </motion.p>
            <motion.a variants={slideInFromLeft(1)} className="py-2 button-primary text-white text-center cursor-pointer rounded-lg max-w-[200px]">
               Learn More!
            </motion.a>
         </div>
         <motion.div variants={slideInFromRight(0.8)} className="size-full flex justify-center items-center">
            <Image src="/img/mainIconsdark.svg" alt="web-develope-tools" width={650} height={650} className="size-auto" />
         </motion.div>
      </motion.div>
   );
}

export default HeroContent;