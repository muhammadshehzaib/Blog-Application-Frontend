'use client';
import React from "react";
import { motion } from "framer-motion";
import MainImage from "../images/hero (1).webp";
import Image from "next/image";

const HeroSection = () => {
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

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      className="bg-white dark:bg-gray-900 mt-12"
    >
      <div className="px-3 mx-auto max-w-full pb-10 text-center md:pb-16">
        <motion.h1 
          variants={textVariants}
          className="font-heading mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"
        >
          Explore the world of blogging 
        </motion.h1>
        
        <motion.div 
          variants={textVariants}
          className="mx-auto max-w-7xl"
        >
          <p className="mb-6 text-xl font-normal text-gray-600 dark:text-slate-400">
            ScribbleSphere is a polished template crafted for your blogging
            journey using Next.js + Tailwind CSS. It incorporates industry best
            practices, ensuring excellence in SEO, Accessibility, Dark Mode, and
            superior Page Speed, along with optimized image handling.
          </p>
        </motion.div>
        
        <motion.div 
          variants={imageVariants}
          className="relative m-auto max-w-5xl"
        >
          <Image
            className="mx-auto h-auto w-full rounded-md bg-gray-400 dark:bg-slate-700"
            src={MainImage.src}
            alt="Blogging with Next.js"
            width={1024}
            height={607}
            sizes="(max-width: 64rem) 100vw, 1024px"
            loading="eager"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;