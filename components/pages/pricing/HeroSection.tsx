"use client";

import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const features = [
    "No credit card required",
    "Cancel anytime",
    "24/7 Support",
  ];

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.04 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.22, ease: [0.2, 0.65, 0.2, 1] },
    },
  };

  return (
    <section className="relative bg-ink">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-24">
        {/* Meta line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.22 }}
          className="flex items-center gap-3 mb-12 font-mono text-[0.7rem] tracking-label text-paper-3 uppercase"
        >
          <span className="text-accent">●</span>
          <span>§ 03 / Pricing</span>
          <span className="flex-1 border-t border-rule" />
          <span className="hidden md:inline">three tiers · one promise</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="font-display text-paper text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] tracking-[-0.04em] max-w-5xl text-balance"
        >
          <motion.span variants={fadeUp} className="block">
            Pay what you can.
          </motion.span>
          <motion.span variants={fadeUp} className="block">
            Or <em className="text-accent font-display italic">nothing</em> at
            all.
          </motion.span>
        </motion.h1>

        {/* Subhead grid */}
        <div className="mt-14 grid grid-cols-12 gap-6">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.22 }}
            className="col-span-12 md:col-span-7 text-paper-2 text-lg leading-relaxed max-w-2xl"
          >
            Whether you&apos;re drafting your first essay or running a
            professional publication, there is a tier that fits. Move between
            them as your work grows — no contracts, no clawbacks, no
            paywalled support email.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.22 }}
            className="col-span-12 md:col-span-5 md:pl-6 md:border-l md:border-rule"
          >
            <p className="label mb-2">The Promise</p>
            <p className="font-display text-2xl leading-tight text-paper">
              We never take a percentage of your earnings. The page is yours
              from the first word.
            </p>
            <p className="font-mono text-[0.7rem] tracking-label text-paper-3 mt-3 uppercase">
              policy · revised May 2026
            </p>
          </motion.div>
        </div>

        {/* Feature chips */}
        <motion.ul
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="mt-12 flex flex-wrap gap-x-8 gap-y-3"
        >
          {features.map((feature) => (
            <motion.li
              key={feature}
              variants={fadeUp}
              className="flex items-baseline gap-2 text-paper-2"
            >
              <span className="font-mono text-accent text-xs">▸</span>
              <span className="text-sm">{feature}</span>
            </motion.li>
          ))}
        </motion.ul>

        {/* ASCII spec block */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.22 }}
          className="mt-20 font-mono text-[0.75rem] text-paper-3 leading-relaxed select-none hidden md:block"
        >
          <pre className="whitespace-pre">
{`┌─ pricing ————————————————————————————————————————————————
│  model        pay-what-you-can ◦ no obligation
│  cut          0% — we never touch your payout
│  billing      monthly · cancel from the keyboard
│  guarantee    14 days · full refund · no questions
└────────────────────────────────────────────────────────────`}
          </pre>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
