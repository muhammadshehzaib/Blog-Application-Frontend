"use client";

import React from "react";
import { motion } from "framer-motion";
import Image1 from "../../../images/camera-back.webp";
import Image from "next/image";

const listItems = [
  "Per ei quaeque sensibus",
  "Cu imperdiet posidonium sed",
  "Nulla omittam sadipscing mel ne",
  "Per ei quaeque sensibus",
  "Cu imperdiet posidonium sed",
  "Nulla omittam sadipscing mel ne",
];

const ContentTwo = () => {
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
            § 02
          </span>
          <span className="label">Detail</span>
          <span className="flex-1 border-t border-rule translate-y-[-2px]" />
          <span className="font-mono text-paper-3 text-[0.7rem] tracking-label hidden md:inline">
            six entries
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Image — placed first on md per row reverse */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            aria-hidden="true"
            className="md:col-span-5 md:order-2"
          >
            <figure className="border border-rule bg-ink-2 p-3">
              <Image
                src={Image1.src}
                alt="Editorial figure"
                loading="lazy"
                width={828}
                height={828}
                decoding="async"
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, 432px"
              />
              <figcaption className="font-mono text-[0.7rem] tracking-label text-paper-3 uppercase mt-3 px-1">
                Fig. 02 — apparatus, rear
              </figcaption>
            </figure>
          </motion.div>

          {/* Text + list */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="md:col-span-7 md:order-1 max-w-3xl"
          >
            <motion.p
              variants={fadeUp}
              className="text-paper-2 leading-relaxed text-lg mb-10 max-w-2xl"
            >
              Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te
              latine theophrastus. Ea his tale nib dissentias, mei exerci
              tamquam euripidis cu.
            </motion.p>

            <ul>
              {listItems.map((item, idx) => (
                <motion.li
                  key={`${item}-${idx}`}
                  variants={fadeUp}
                  className={`grid grid-cols-[3rem_1fr] gap-6 py-4 ${
                    idx !== 0 ? "border-t border-rule" : ""
                  }`}
                >
                  <span className="font-mono text-accent text-sm pt-1">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-paper text-[1.25rem] leading-snug tracking-tight">
                    {item}
                  </h3>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContentTwo;
