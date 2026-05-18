"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const principles = [
  {
    n: "i.",
    title: "Diverse, by design.",
    body: "Essays, reporting, and short fiction — across technology, lifestyle, and travel.",
  },
  {
    n: "ii.",
    title: "Writers who know.",
    body: "Independent voices and seasoned authors, edited with care.",
  },
  {
    n: "iii.",
    title: "Readers, not metrics.",
    body: "A growing community of people who actually read what gets published.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.2, 0.65, 0.2, 1] as const },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const HeroSection = () => {
  return (
    <section className="relative bg-ink text-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-20">
        {/* Meta line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-3 mb-12 font-mono text-[0.7rem] tracking-label text-paper-3 uppercase"
        >
          <span className="text-accent">●</span>
          <span>Welcome</span>
          <span className="flex-1 border-t border-rule" />
          <span className="hidden md:inline">est. 2026</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="font-display text-paper text-[clamp(2.5rem,6.5vw,5rem)] leading-[0.98] tracking-[-0.04em] max-w-5xl text-balance"
        >
          <motion.span variants={fadeUp} className="block">
            Discover. Learn.
          </motion.span>
          <motion.span variants={fadeUp} className="block">
            <em className="text-accent font-display italic">Share.</em>
          </motion.span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.4 }}
          className="mt-10 max-w-2xl text-paper-2 text-lg leading-relaxed"
        >
          A small community of writers and readers. Share your stories,
          ideas, and experiences — without the noise.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-3"
        >
          <Link
            href="/blogs"
            className="group inline-flex items-center gap-3 bg-accent text-ink px-6 py-3.5 hover:bg-paper transition-colors"
          >
            <span className="font-mono text-xs opacity-70">▸</span>
            <span className="font-medium">Start reading</span>
            <span className="font-mono text-xs opacity-70 transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
          <Link
            href="/create-blogs"
            className="group inline-flex items-center gap-3 border border-rule text-paper px-6 py-3.5 hover:border-paper-3 hover:bg-ink-2 transition-colors"
          >
            <span className="font-mono text-xs text-paper-3">[</span>
            <span>Start writing</span>
            <span className="font-mono text-xs text-paper-3">]</span>
          </Link>
        </motion.div>

        {/* Three principles */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-px bg-rule border border-rule"
        >
          {principles.map((item) => (
            <motion.div
              key={item.n}
              variants={fadeUp}
              className="bg-ink p-8 hover:bg-ink-2 transition-colors"
            >
              <div className="font-mono text-accent text-sm mb-6">{item.n}</div>
              <h3 className="font-display text-[1.45rem] leading-tight text-paper mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-paper-2 leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
