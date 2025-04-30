'use client';

import React from "react";
import { motion } from "framer-motion";
import Image1 from "../../../images/camera-front.webp";
import Image from "next/image";

const Content = () => {
  // Variants for section heading animations
  const headingVariants = {
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

  // Stagger container variant for smooth sequential animations
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

  return (
    <div>
      <motion.section 
        initial="hidden"
        animate="visible"
        className="relative scroll-mt-[72px]"
      >
        <div className="absolute inset-0 bg-[#EFF6FF] dark:bg-slate-800"></div>
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default">
          <motion.div 
            variants={containerVariants}
            className="mb-4"
          >
            <div className="mb-6 mx-auto md:mb-12 text-center">
              <motion.p 
                variants={headingVariants}
                className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-primary-200"
              >
                Content
              </motion.p>
              <motion.h2 
                variants={headingVariants}
                className="font-heading mb-4 font-bold tracking-tight text-3xl sm:text-5xl text-gray-900 dark:text-white"
              >
                Aliquip definiebas ad est
              </motion.h2>
              <motion.p 
                variants={headingVariants}
                className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400 text-center"
              >
                Quando cetero his ne, eum admodum sapientem ut
              </motion.p>
            </div>
          </motion.div>
          <div className="mx-auto max-w-7xl">
            <div className="md:flex md:gap-16">
              <motion.div 
                variants={containerVariants}
                className="self-center md:basis-1/2"
              >
                <motion.div 
                  variants={headingVariants}
                  className="mb-8 lg:mb-12 text-lg text-gray-600 dark:text-slate-400"
                >
                  Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos
                  etiam regione ut, persius eripuit quo id. Sit te euismod
                  tacimates.
                </motion.div>
                <motion.div 
                  variants={containerVariants}
                  className="grid mx-auto max-w-4xl gap-4 md:gap-y-6"
                >
                  {[
                    {
                      title: "Per ei quaeque sensibus",
                      description: "Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim."
                    },
                    {
                      title: "Cu imperdiet posidonium sed",
                      description: "Amet utinam aliquando ut mea, malis admodum ocurreret nec et, elit tibique cu nec. Nec ex maluisset inciderint, ex quis."
                    },
                    {
                      title: "Nulla omittam sadipscing mel ne",
                      description: "At sed possim oporteat probatus, justo graece ne nec, minim commodo legimus ut vix. Ut eos iudico quando soleat, nam modus."
                    }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      variants={listItemVariants}
                    >
                      <div className="flex max-w-full">
                        <div className="flex justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="rtl:mr-0 rtl:ml-2 flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-blue-900 text-gray-50 mr-4 mt-1 p-1"
                          >
                            <path d="M5 12l5 5l10 -10"></path>
                          </svg>
                        </div>
                        <div className="mt-0.5">
                          <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white mt-1 mb-2">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-gray-600 dark:text-slate-400">
                            {item.description}
                          </p>
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

export default Content;