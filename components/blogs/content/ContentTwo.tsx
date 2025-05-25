"use client";

import React from "react";
import { motion } from "framer-motion";
import Image1 from "../../../images/camera-back.webp";
import Image from "next/image";
import Tick from "../../../images/svg/Tick";

const ContentTwo = () => {
  // Variants for section text
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Variants for list items
  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Variants for image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  // Stagger container variant
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const listItems = [
    "Per ei quaeque sensibus",
    "Cu imperdiet posidonium sed",
    "Nulla omittam sadipscing mel ne",
    "Per ei quaeque sensibus",
    "Cu imperdiet posidonium sed",
    "Nulla omittam sadipscing mel ne"
  ];

  return (
    <div>
      <motion.section 
        initial="hidden"
        animate="visible"
        className="relative not-prose scroll-mt-[72px]"
      >
        <div className="absolute inset-0 bg-blue-50 dark:bg-slate-800"></div>
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 text-default py-0 md:py-0 lg:py-0 pb-12 md:pb-16 lg:pb-20">
          <div className="mx-auto max-w-7xl">
            <div className="md:flex md:flex-row-reverse md:gap-16">
              <motion.div 
                variants={containerVariants}
                className="self-center md:basis-1/2"
              >
                <motion.div 
                  variants={textVariants}
                  className="mb-8 lg:mb-12 text-lg text-gray-600 dark:text-slate-400"
                >
                  Per odio fabellas consulatu cu. Utroque detracto mel ea, quo
                  te latine theophrastus. Ea his tale nib dissentias, mei exerci
                  tamquam euripidis cu.
                </motion.div>
                <motion.div 
                  variants={containerVariants}
                  className="grid mx-auto max-w-4xl gap-4 md:gap-y-6"
                >
                  {listItems.map((item, index) => (
                    <motion.div 
                      key={index}
                      variants={listItemVariants}
                    >
                      <div className="flex max-w-full">
                        <div className="flex justify-center">
                          <Tick/>
                        </div>
                        <div className="mt-0.5">
                          <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white mt-1 mb-2">
                            {item}
                          </h3>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
              <motion.div 
                variants={imageVariants}
                aria-hidden="true" 
                className="mt-10 md:mt-0 md:basis-1/2"
              >
                <div className="relative m-auto max-w-4xl">
                  <Image
                    src={Image1.src}
                    alt="Colorful Image"
                    loading="lazy"
                    width="828"
                    height="828"
                    decoding="async"
                    data-nimg="1"
                    className="mx-auto w-full rounded-lg shadow-lg bg-gray-400 dark:bg-slate-700"
                    sizes="(max-width: 768px) 100vw, 432px"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ContentTwo;