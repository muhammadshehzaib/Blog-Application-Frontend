"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const History = () => {
  const timeline = [
    {
      year: "2022",
      title: "The Beginning",
      description:
        "Started with a vision to create a platform where writers could share their stories freely and connect with readers worldwide.",
    },
    {
      year: "2023",
      title: "Growing Community",
      description:
        "Reached our first milestone of 10,000 active writers and launched community features to foster collaboration.",
    },
    {
      year: "2023",
      title: "Platform Evolution",
      description:
        "Introduced advanced writing tools, analytics, and monetization features to help writers succeed.",
    },
    {
      year: "2024",
      title: "Global Expansion",
      description:
        "Expanded to serve writers in over 100 countries and launched localization support for multiple languages.",
    },
    {
      year: "2024 & Beyond",
      title: "Looking Ahead",
      description:
        "Continuing to innovate with AI-powered writing assistance, enhanced collaboration tools, and new ways for writers to reach their audience.",
    },
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
      transition: {
        duration: 0.22,
        ease: [0.2, 0.65, 0.2, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="relative bg-ink text-paper border-t border-rule">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        {/* Section header */}
        <div className="flex items-baseline gap-4 mb-12">
          <span className="font-mono text-paper-3 text-[0.7rem] tracking-label">
            § 02
          </span>
          <span className="label">Our Journey</span>
          <span className="flex-1 border-t border-rule translate-y-[-2px]" />
          <span className="font-mono text-paper-3 text-[0.7rem] tracking-label hidden md:inline">
            {timeline.length} entries
          </span>
        </div>

        {/* Intro */}
        <div className="grid grid-cols-12 gap-6 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25 }}
            className="col-span-12 md:col-span-7 font-display text-paper text-[clamp(2rem,5vw,3.5rem)] leading-[1.0] tracking-[-0.035em] text-balance"
          >
            From a single page to a{" "}
            <em className="text-accent font-display italic">slow</em> press.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: 0.05 }}
            className="col-span-12 md:col-span-5 md:pl-6 md:border-l md:border-rule text-paper-2 leading-relaxed"
          >
            A short log of the years that brought us here — what we shipped,
            what we removed, and what we learned by going quiet on purpose.
          </motion.p>
        </div>

        {/* Vertical mono timeline */}
        <motion.ol
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative border-l border-rule max-w-4xl"
        >
          {timeline.map((item, index) => (
            <motion.li
              key={`${item.year}-${index}`}
              variants={fadeUp}
              className="relative pl-8 md:pl-12 pb-12 last:pb-0"
            >
              {/* node marker */}
              <span
                aria-hidden
                className="absolute -left-[5px] top-2 w-[9px] h-[9px] bg-ink border border-paper-3"
              />

              <div className="grid grid-cols-12 gap-4 md:gap-6 items-baseline">
                <div className="col-span-12 md:col-span-3">
                  <span className="font-mono text-accent text-sm tracking-tight">
                    {item.year}
                  </span>
                  <span className="ml-2 font-mono text-[0.65rem] text-paper-3 tracking-label uppercase">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="col-span-12 md:col-span-9">
                  <h3 className="font-display text-paper text-[1.5rem] md:text-[1.75rem] leading-tight tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-paper-2 leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ol>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.25, delay: 0.1 }}
          className="mt-20 border-t border-rule pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <p className="label mb-2">// next chapter</p>
            <p className="font-display text-paper text-2xl leading-tight max-w-lg">
              Want to be part of our journey?
            </p>
          </div>
          <Link
            href="/create-blogs"
            className="group inline-flex items-center gap-3 bg-accent text-ink px-6 py-3.5 hover:bg-paper transition-colors"
          >
            <span className="font-mono text-xs opacity-70">▸</span>
            <span className="font-medium">Join our community</span>
            <span className="font-mono text-xs opacity-70 transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default History;
