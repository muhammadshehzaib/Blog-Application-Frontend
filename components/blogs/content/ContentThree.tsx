"use client";

import React from "react";
import { motion } from "framer-motion";
import Gas from "../../../images/gas.webp";
import Image from "next/image";
import ArrowDown from "@/images/svg/ArrowDown";
import LightTick from "@/images/svg/LightTick";

const ContentThree = () => {
  // Variants for section heading
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

  // Variants for step items
  const stepItemVariants = {
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
        staggerChildren: 0.2
      }
    }
  };

  const steps = [
    {
      title: "Step 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus.",
      showArrow: true
    },
    {
      title: "Step 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla.",
      showArrow: true
    },
    {
      title: "Step 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla.",
      showArrow: true
    },
    {
      title: "Ready!",
      description: null,
      showArrow: false
    }
  ];

  return (
    <div>
      <motion.section 
        initial="hidden"
        animate="visible"
        className="relative not-prose scroll-mt-[72px]"
      >
        <div className="absolute inset-0 bg-transparent"></div>
        <div className="relative mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default max-w-6xl">
          <div className="flex flex-col gap-8 md:gap-12 md:flex-row">
            <motion.div 
              variants={containerVariants}
              className="md:py-4 md:pr-16 md:rtl:pr-0 md:rtl:pl-16 md:basis-1/2"
            >
              <div className="mb-4">
                <div className="mb-6 mx-auto md:mb-12 text-left rtl:text-right">
                  <motion.h2 
                    variants={headingVariants}
                    className="font-heading mb-4 font-bold tracking-tight text-3xl sm:text-4xl text-gray-900 dark:text-white"
                  >
                    Sed ac magna sit amet risus tristique interdum.
                  </motion.h2>
                </div>
              </div>
              <div>
                {steps.map((step, index) => (
                  <motion.div 
                    key={index}
                    variants={stepItemVariants}
                    className="flex"
                  >
                    <div className="flex flex-col items-center mr-4 rtl:mr-0 rtl:ml-4">
                      <div className="flex items-center justify-center">
                        {step.showArrow ? <ArrowDown/> : <LightTick/>}
                      </div>
                      {step.showArrow && (
                        <div className="w-px h-full bg-black/10 dark:bg-slate-400/50"></div>
                      )}
                    </div>
                    <div className={`pt-1 ${step.showArrow ? 'pb-8' : ''}`}>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-slate-300 mb-2">
                        {step.title}
                      </h3>
                      {step.description && (
                        <p className="text-gray-600 dark:text-slate-400">
                          {step.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              variants={imageVariants}
              className="relative md:basis-1/2"
            >
              <Image
                src={Gas.src}
                alt="Steps image"
                loading="lazy"
                width="400"
                height="768"
                decoding="async"
                data-nimg="1"
                className="inset-0 object-cover object-top w-full rounded-md shadow-lg md:absolute md:h-full bg-gray-400 dark:bg-slate-700"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ContentThree;