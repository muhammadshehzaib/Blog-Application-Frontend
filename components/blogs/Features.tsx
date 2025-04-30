'use client';

import React from "react";
import { motion } from "framer-motion";
import Cards from "./Cards";

const Features = () => {
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
    <motion.div 
      initial="hidden"
      animate="visible"
      className="mb-4"
    >
      <motion.div 
        variants={containerVariants}
        className="mb-6 mx-auto md:mb-12 text-center"
      >
        <motion.p 
          variants={headingVariants}
          className="text-base font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-200"
        >
          Features
        </motion.p>
        
        <motion.h2 
          variants={headingVariants}
          className="font-heading mb-4 font-bold tracking-tight text-4xl md:text-5xl text-gray-900 dark:text-white"
        >
          What you get with{" "}
          <span className="whitespace-nowrap">ScribbleSphere</span>
        </motion.h2>
        
        <motion.p 
          variants={headingVariants}
          className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400 text-center"
        >
          Boosting Your Online Impact: Unveiling the Harmonies Unleashed in Our
          Platform&apos;s Fundamental Capabilities, from Effortless Integration
          to Collaborative Creativity.
        </motion.p>
      </motion.div>
      
      <Cards />
    </motion.div>
  );
};

export default Features;