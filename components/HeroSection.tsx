'use client';
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
      className="bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 pt-24 pb-12"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            variants={textVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 font-serif"
          >
            Discover. Learn. <span className="text-blue-600 dark:text-blue-400">Share.</span>
          </motion.h1>
          
          <motion.p 
            variants={textVariants}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
          >
            Join our community of writers and readers. Share your stories, ideas, and experiences with the world.
          </motion.p>

          <motion.div 
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link href="/blogs" className="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold">
              Start Reading
            </Link>
            <Link href="/create-blogs" className="btn btn-outline border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full text-lg font-semibold">
              Start Writing
            </Link>
          </motion.div>

          <motion.div 
            variants={imageVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Diverse Topics</h3>
              <p className="text-gray-600 dark:text-gray-300">Explore articles across technology, lifestyle, travel, and more.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Expert Writers</h3>
              <p className="text-gray-600 dark:text-gray-300">Learn from experienced authors and industry professionals.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Growing Community</h3>
              <p className="text-gray-600 dark:text-gray-300">Connect with like-minded readers and writers.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;