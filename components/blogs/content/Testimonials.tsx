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

const testimonials = [
  {
    image: Person1,
    name: "Tayla Kirsten",
    role: "Marketing Manager",
    quote:
      "Writers' Haven has transformed my blogging journey. The seamless interface and powerful features made publishing and sharing my thoughts a breeze.",
  },
  {
    image: Person2,
    name: "Silver Jordan",
    role: "Senior Marketer",
    quote:
      "As a seasoned blogger, finding a platform that balances simplicity and sophistication is crucial. This one not only meets but exceeds those expectations.",
  },
  {
    image: Person3,
    name: "Kelsey Arden",
    role: "Co-Founder & CEO",
    quote:
      "The synergy of Next.js and Tailwind on Writers' Haven provides an unbeatable foundation for my blog — attention to detail in design, combined with speed.",
  },
  {
    image: Person4,
    name: "Sarah Johnson",
    role: "Business Owner",
    quote:
      "The commitment to best practices is evident in every feature — from dark mode support to image optimization, it ticks all the boxes my blog needs.",
  },
  {
    image: Person5,
    name: "Keith Young",
    role: "Freelance Developer",
    quote:
      "Starting a blog can be daunting, but this made it surprisingly simple. The thoughtful guidance and responsive support ensured a smooth setup.",
  },
  {
    image: Person6,
    name: "Lisa Gordon",
    role: "Project Manager",
    quote:
      "A perfect blend of creativity and functionality. The templates are restrained and the platform is designed to cater to bloggers of every kind.",
  },
];

const Testimonials = () => {
  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.04 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.22, ease: [0.2, 0.65, 0.2, 1] as const },
    },
  };

  return (
    <section
      id="testimonials-on-home"
      className="bg-ink text-paper border-t border-rule scroll-mt-[72px]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="flex items-baseline gap-4 mb-12"
        >
          <span className="text-accent font-mono text-[0.7rem]">●</span>
          <span className="label">Testimonials</span>
          <span className="flex-1 border-t border-rule translate-y-[-2px]" />
          <span className="font-mono text-paper-3 text-[0.7rem] tracking-label hidden md:inline">
            {String(testimonials.length).padStart(2, "0")} entries
          </span>
        </motion.div>

        {/* Headline + lead */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:col-span-7 font-display text-paper text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.03em] max-w-3xl text-balance"
          >
            What our writers say,{" "}
            <em className="font-display italic text-accent">unedited</em>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: 0.04, ease: "easeOut" }}
            className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-rule text-paper-2 leading-relaxed"
          >
            Selected notes from contributors. Pulled from email, not from a
            modal, not from a 5-star widget — written in their own words.
          </motion.p>
        </div>

        {/* Quote board */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-rule border border-rule"
        >
          {testimonials.map((t, index) => {
            const idx = String(index + 1).padStart(2, "0");
            return (
              <motion.figure
                key={`${t.name}-${index}`}
                variants={fadeUp}
                className="bg-ink p-6 hover:bg-ink-2 transition-colors flex flex-col"
              >
                {/* ASCII tag */}
                <figcaption className="font-mono text-[0.7rem] tracking-label uppercase text-paper-3 mb-5 truncate">
                  ┌─ TESTIMONIAL · {idx} ─────
                </figcaption>

                <blockquote className="font-display italic text-paper text-[1.2rem] leading-snug tracking-tight mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="mt-auto pt-5 border-t border-rule flex items-center gap-3">
                  <Image
                    src={t.image.src}
                    alt={t.name}
                    loading="lazy"
                    width={32}
                    height={32}
                    decoding="async"
                    className="w-8 h-8 object-cover border border-rule rounded-none"
                  />
                  <p className="font-mono text-[0.7rem] tracking-label uppercase text-paper-2 truncate">
                    <span className="text-paper-3">—</span> {t.name},{" "}
                    <span className="text-paper-3">{t.role}</span>
                  </p>
                </div>
              </motion.figure>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
