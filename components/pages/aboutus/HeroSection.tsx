"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  const values = ["Quality Content", "Community First", "Continuous Innovation"];

  const stats = [
    { value: "10K+", label: "Active Writers" },
    { value: "50K+", label: "Articles Published" },
    { value: "1M+", label: "Monthly Readers" },
    { value: "100+", label: "Countries Reached" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 8, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.22,
        ease: [0.2, 0.65, 0.2, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="relative bg-ink text-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-28">
        {/* Meta line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.22 }}
          className="flex items-center gap-3 mb-12 font-mono text-[0.7rem] tracking-label text-paper-3 uppercase"
        >
          <span className="text-accent">●</span>
          <span>File 04 / About</span>
          <span className="flex-1 border-t border-rule" />
          <span className="hidden md:inline">Our Story</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="font-display text-paper text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] tracking-[-0.04em] max-w-5xl text-balance"
        >
          <motion.span variants={itemVariants} className="block">
            The story behind
          </motion.span>
          <motion.span variants={itemVariants} className="block">
            a <em className="text-accent font-display italic">quieter</em>{" "}
            place to write.
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
            Writers&apos; Haven began as a small editorial experiment: build a
            place where the work mattered more than the metrics. We&apos;re
            still small. We&apos;re still building. And we&apos;re glad
            you&apos;re here.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.22 }}
            className="col-span-12 md:col-span-5 md:pl-6 md:border-l md:border-rule"
          >
            <p className="label mb-2">Now Featuring</p>
            <p className="font-display text-2xl leading-tight text-paper">
              Year three — an annual report on what restraint built.
            </p>
            <p className="font-mono text-[0.7rem] tracking-label text-paper-3 mt-3 uppercase">
              By the editors · 4 min
            </p>
          </motion.div>
        </div>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.22 }}
          className="mt-14 flex flex-col sm:flex-row gap-3 items-start"
        >
          <Link
            href="/blogs"
            className="group inline-flex items-center gap-3 bg-accent text-ink px-6 py-3.5 hover:bg-paper transition-colors"
          >
            <span className="font-mono text-xs opacity-70">▸</span>
            <span className="font-medium">Read the archive</span>
            <span className="font-mono text-xs opacity-70 transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
          <Link
            href="/create-blogs"
            className="group inline-flex items-center gap-3 border border-rule text-paper px-6 py-3.5 hover:border-paper-3 hover:bg-ink-2 transition-colors"
          >
            <span className="font-mono text-xs text-paper-3">[</span>
            <span>Become a contributor</span>
            <span className="font-mono text-xs text-paper-3">]</span>
          </Link>
        </motion.div>

        {/* ASCII spec block */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.22 }}
          className="mt-24 font-mono text-[0.75rem] text-paper-3 leading-relaxed select-none hidden md:block"
        >
          <pre className="whitespace-pre">
{`┌─ about ——————————————————————————————————————————————————
│  founded     2022 ◦ small batch
│  team        9 humans · 0 growth hackers
│  mission     publish slowly, read carefully
│  values      ${values.join(" · ")}
└────────────────────────────────────────────────────────────`}
          </pre>
        </motion.div>
      </div>

      {/* ─────────────  PRINCIPLES + STATS  ───────────── */}
      <div className="border-t border-rule">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          {/* Section header */}
          <div className="flex items-baseline gap-4 mb-12">
            <span className="font-mono text-paper-3 text-[0.7rem] tracking-label">
              § 01
            </span>
            <span className="label">What we stand for</span>
            <span className="flex-1 border-t border-rule translate-y-[-2px]" />
            <span className="font-mono text-paper-3 text-[0.7rem] tracking-label hidden md:inline">
              {values.length} principles
            </span>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10"
          >
            {/* Mission + Values */}
            <div className="lg:col-span-7 space-y-12">
              <motion.div variants={itemVariants}>
                <div className="font-mono text-accent text-sm mb-4">i.</div>
                <h3 className="font-display text-[1.75rem] leading-tight text-paper mb-4 tracking-tight">
                  Our mission
                </h3>
                <p className="max-w-2xl text-paper-2 leading-relaxed">
                  To create a platform where writers can share their
                  knowledge, experiences, and creativity with readers
                  worldwide — fostering meaningful connections through the
                  power of words, without the noise of metrics or the
                  pressure of going viral.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <div className="font-mono text-accent text-sm mb-4">ii.</div>
                <h3 className="font-display text-[1.75rem] leading-tight text-paper mb-4 tracking-tight">
                  Our values
                </h3>
                <ul className="space-y-3 max-w-2xl">
                  {values.map((value) => (
                    <motion.li
                      key={value}
                      variants={itemVariants}
                      className="flex items-start gap-3 text-paper-2"
                    >
                      <span className="text-accent font-mono mt-1">▸</span>
                      <span>{value}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Impact / stats */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-5 relative border border-rule bg-ink-2 p-8"
            >
              <span className="absolute -top-px -left-px w-3 h-3 border-t border-l border-paper-3" />
              <span className="absolute -top-px -right-px w-3 h-3 border-t border-r border-paper-3" />
              <span className="absolute -bottom-px -left-px w-3 h-3 border-b border-l border-paper-3" />
              <span className="absolute -bottom-px -right-px w-3 h-3 border-b border-r border-paper-3" />

              <p className="label mb-6">// our impact</p>
              <div className="grid grid-cols-2 gap-px bg-rule">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-ink-2 p-5 hover:bg-ink-3 transition-colors"
                  >
                    <div className="font-display text-paper text-[2.25rem] leading-none tracking-tight mb-2">
                      {stat.value}
                    </div>
                    <div className="font-mono text-[0.7rem] tracking-label text-paper-3 uppercase">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              <p className="font-mono text-[0.7rem] tracking-label text-paper-3 mt-6 uppercase">
                Updated quarterly · last sync 2026.Q2
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
