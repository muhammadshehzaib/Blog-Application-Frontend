"use client";

import React from "react";
import { motion } from "framer-motion";
import Cards from "./Cards";

const Features = () => {
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
    <section className="bg-ink text-paper border-t border-rule">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="flex items-baseline gap-4 mb-12"
        >
          <span className="font-mono text-paper-3 text-[0.7rem] tracking-label">
            § 04
          </span>
          <span className="label">Features</span>
          <span className="flex-1 border-t border-rule translate-y-[-2px]" />
          <span className="font-mono text-paper-3 text-[0.7rem] tracking-label hidden md:inline">
            six principles
          </span>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16"
        >
          <motion.h2
            variants={fadeUp}
            className="lg:col-span-7 font-display text-paper text-[clamp(2rem,5vw,3.75rem)] leading-[1.0] tracking-[-0.035em] max-w-3xl text-balance"
          >
            What you get with{" "}
            <em className="font-display italic text-accent">
              Writers&apos; Haven
            </em>
            .
          </motion.h2>
          <motion.div
            variants={fadeUp}
            className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-rule"
          >
            <p className="label mb-3">Summary</p>
            <p className="text-paper-2 leading-relaxed text-base">
              Six small commitments that add up to a calmer publishing
              surface — composer, archive, distribution, and the page itself,
              tuned for reading first.
            </p>
            <p className="font-mono text-[0.7rem] tracking-label text-paper-3 mt-4 uppercase">
              ▸ scroll for full list
            </p>
          </motion.div>
        </motion.div>

        <Cards />
      </div>
    </section>
  );
};

export default Features;
