"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Import all person images
import Person1 from "../../../images/testimonals/photo-1565049786474-1dea82a8b995.webp";
import Person2 from "../../../images/testimonals/photo-1572417884940-c24659be6068.webp";
import Person3 from "../../../images/testimonals/photo-1619734086067-24bf8889ea7d.webp";
import Person4 from "../../../images/testimonals/photo-1659057106920-da022cfbc0cd.webp";
import Person5 from "../../../images/testimonals/photo-1665984867752-6370ab5ae35e.webp";
import Person6 from "../../../images/testimonals/photo-1694287877106-ee22f764aef1.webp";

const Testimonials = () => {
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

  // Variants for testimonial cards
  const cardVariants = {
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

  const testimonials = [
    {
      image: Person1,
      name: "Tayla Kirsten",
      role: "Marketing Manager",
      quote: "ScribbleSphere has transformed my blogging journey! The seamless interface and powerful features made publishing and sharing my thoughts a breeze. It ..."
    },
    {
      image: Person2,
      name: "Silver Jordan",
      role: "Senior Marketer",
      quote: "As a seasoned blogger, finding a platform that balances simplicity and sophistication is crucial. TailNext not only meets but exceeds these expectatio..."
    },
    {
      image: Person3,
      name: "Kelsey Arden",
      role: "Co-Founder & CEO",
      quote: "The synergy of Next.js and Tailwind CSS on Scribblesphere provides an unbeatable foundation for my blog. The attention to detail in design, combined w..."
    },
    {
      image: Person4,
      name: "Sarah Johnson",
      role: "Business Owner",
      quote: "Scribblesphere commitment to best practices is evident in every feature. From dark mode support to image optimization, it ticks all the boxes. My blog..."
    },
    {
      image: Person5,
      name: "Keith Young",
      role: "Freelance Developer",
      quote: "Starting a blog can be daunting, but Scribblesphere made it surprisingly simple. The thoughtful guidance and responsive support team ensured a smooth ..."
    },
    {
      image: Person6,
      name: "Lisa Gordon",
      role: "Project Manager",
      quote: "Scribblesphere offers a perfect blend of creativity and functionality. The templates are stunning, and the platform is designed to cater to bloggers o..."
    }
  ];

  return (
    <div>
      <motion.section
        initial="hidden"
        animate="visible"
        className="relative not-prose scroll-mt-[72px]"
        id="testimonials-on-home"
      >
        <div className="absolute inset-0 bg-blue-50 dark:bg-slate-800"></div>
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default">
          <motion.div 
            variants={containerVariants}
            className="mb-4"
          >
            <div className="mb-6 mx-auto md:mb-12 text-center">
              <motion.h2 
                variants={headingVariants}
                className="font-heading mb-4 font-bold tracking-tight text-2xl sm:text-3xl text-gray-900 dark:text-white"
              >
                What our customers say about us
              </motion.h2>
              <motion.p 
                variants={headingVariants}
                className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400 text-center"
              >
                Etiam sed odio et dolor auctor gravida. Curabitur tincidunt elit
                non risus pharetra sodales. Etiam sit amet mattis massa.
              </motion.p>
            </div>
          </motion.div>
          
          <div className="flex items-stretch justify-center">
            <motion.div 
              variants={containerVariants}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="card max-w-sm h-full hover:border-blue-600 hover:shadow-lg hover:transition hover:duration-100 bg-white p-4"
                >
                  <div className="select-none h-full">
                    <div className="flex flex-col justify-between items-stretch w-full h-full">
                      <div className="flex items-center">
                        <Image
                          src={testimonial.image.src}
                          alt={testimonial.name}
                          loading="lazy"
                          width="248"
                          height="248"
                          decoding="async"
                          data-nimg="1"
                          className="object-cover shadow-lg bg-gray-500 dark:bg-slate-700 mr-4 h-10 w-10 rounded-full"
                        />
                        <div className="flex flex-col justify-center text-left">
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            {testimonial.name}
                          </h3>
                          <span className="dark:text-slate-400 text-sm text-gray-600">
                            {testimonial.role}
                          </span>
                        </div>
                      </div>
                      <hr className="border-gray-200 dark:border-gray-700 my-4" />
                      <blockquote className="flex-auto">
                        <p className="font-light dark:text-slate-400 text-gray-700">
                          &quot;{testimonial.quote}&quot;
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Testimonials;