"use client";

import React from "react";
import { motion } from "framer-motion";
import Gas from "../../../images/gas.webp";
import Image from "next/image";

const steps = [
  {
    n: "01",
    title: "Step 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus.",
    final: false,
  },
  {
    n: "02",
    title: "Step 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla.",
    final: false,
  },
  {
    n: "03",
    title: "Step 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla.",
    final: false,
  },
  {
    n: "04",
    title: "Ready",
    description: null,
    final: true,
  },
];

const ContentThree = () => {
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
    <section className="bg-ink text-paper border-t border-rule scroll-mt-[72px]">
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
            § 03
          </span>
          <span className="label">Process</span>
          <span className="flex-1 border-t border-rule translate-y-[-2px]" />
          <span className="font-mono text-paper-3 text-[0.7rem] tracking-label hidden md:inline">
            four steps
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="md:col-span-7 max-w-3xl"
          >
            <motion.h2
              variants={fadeUp}
              className="font-display text-paper text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.05] tracking-[-0.03em] max-w-2xl text-balance mb-12"
            >
              Sed ac magna sit amet risus{" "}
              <em className="font-display italic text-accent">tristique</em>{" "}
              interdum.
            </motion.h2>

            <ol>
              {steps.map((step) => (
                <motion.li
                  key={step.n}
                  variants={fadeUp}
                  className="grid grid-cols-[3rem_1fr] gap-6 py-6 border-t border-rule first:border-t-0"
                >
                  <span
                    className={`font-mono text-sm pt-1 ${
                      step.final ? "text-accent" : "text-paper-3"
                    }`}
                  >
                    {step.final ? "▸" : step.n}
                  </span>
                  <div>
                    <h3 className="font-display text-paper text-[1.4rem] leading-tight tracking-tight mb-2">
                      {step.title}
                    </h3>
                    {step.description && (
                      <p className="text-paper-2 leading-relaxed">
                        {step.description}
                      </p>
                    )}
                  </div>
                </motion.li>
              ))}
            </ol>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:col-span-5"
          >
            <figure className="border border-rule bg-ink-2 p-3">
              <Image
                src={Gas.src}
                alt="Process figure"
                loading="lazy"
                width={400}
                height={768}
                decoding="async"
                className="w-full h-auto object-cover"
              />
              <figcaption className="font-mono text-[0.7rem] tracking-label text-paper-3 uppercase mt-3 px-1">
                Fig. 03 — process diagram
              </figcaption>
            </figure>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContentThree;
