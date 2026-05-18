"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
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

  const buildStamp = new Date()
    .toISOString()
    .slice(0, 16)
    .replace("T", " ");

  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-24">
        {/* Meta line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="flex items-center gap-3 mb-12 font-mono text-[0.7rem] tracking-label text-paper-3 uppercase"
        >
          <span className="text-accent">▎</span>
          <span>§ 02 / Services</span>
          <span className="flex-1 border-t border-rule" />
          <span className="hidden md:inline">For writers, by writers</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="font-display text-paper text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] tracking-[-0.04em] max-w-5xl text-balance"
        >
          <motion.span variants={fadeUp} className="block">
            Tools that get out
          </motion.span>
          <motion.span variants={fadeUp} className="block">
            of the{" "}
            <em className="text-accent font-display italic">way</em>.
          </motion.span>
        </motion.h1>

        {/* Subhead grid */}
        <div className="mt-14 grid grid-cols-12 gap-6">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.24 }}
            className="col-span-12 md:col-span-7 text-paper-2 text-lg leading-relaxed max-w-2xl"
          >
            Everything Writers&apos; Haven offers, end-to-end. A markdown
            editor that respects the page. An audience layer that doesn&apos;t
            beg for attention. A reading experience built for the long form.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.24 }}
            className="col-span-12 md:col-span-5 md:pl-6 md:border-l md:border-rule"
          >
            <p className="label mb-2">In Plain Terms</p>
            <p className="font-display text-2xl leading-tight text-paper">
              Seven services. No upsells. No artificial limits on the work
              itself.
            </p>
            <p className="font-mono text-[0.7rem] tracking-label text-paper-3 mt-3 uppercase">
              Pay what you can · Free forever
            </p>
          </motion.div>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.32, duration: 0.24 }}
          className="mt-14 flex flex-col sm:flex-row gap-3 items-start"
        >
          <Link
            href="/create-blogs"
            className="group inline-flex items-center gap-3 bg-accent text-ink px-6 py-3.5 hover:bg-paper transition-colors"
          >
            <span className="font-mono text-xs opacity-70">▸</span>
            <span className="font-medium">Start writing</span>
            <span className="font-mono text-xs opacity-70 transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
          <Link
            href="#services"
            className="group inline-flex items-center gap-3 border border-rule text-paper px-6 py-3.5 hover:border-paper-3 hover:bg-ink-2 transition-colors"
          >
            <span className="font-mono text-xs text-paper-3">[</span>
            <span>Browse services</span>
            <span className="font-mono text-xs text-paper-3">]</span>
          </Link>
        </motion.div>

        {/* ASCII spec block */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.24 }}
          className="mt-20 font-mono text-[0.75rem] text-paper-3 leading-relaxed select-none hidden md:block"
        >
          <pre className="whitespace-pre">
{`┌─ services / index ————————————————————————————————————————
│  catalog      07 modules · all included
│  pricing      pay-what-you-can · no card required
│  uptime       99.98% rolling 90-day
│  last build   ${buildStamp}
└────────────────────────────────────────────────────────────`}
          </pre>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
