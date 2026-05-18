"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const FooterSubscribe = () => {
  const [email, setEmail] = useState("");

  const stats = [
    { value: "50K+", label: "Active Writers" },
    { value: "100K+", label: "Published Articles" },
    { value: "2M+", label: "Monthly Readers" },
    { value: "150+", label: "Countries Reached" },
  ];

  const features = [
    "Free getting started guides",
    "Access to writer's community",
    "Professional writing tools",
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
      transition: { duration: 0.22, ease: [0.2, 0.65, 0.2, 1] as const },
    },
  };

  return (
    <section className="relative bg-ink text-paper border-t border-rule">
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
          <span className="label">Subscribe</span>
          <span className="flex-1 border-t border-rule translate-y-[-2px]" />
          <span className="font-mono text-paper-3 text-[0.7rem] tracking-label hidden md:inline">
            newsletter
          </span>
        </motion.div>

        {/* Headline + intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:col-span-7 font-display text-paper text-[clamp(2rem,5vw,4rem)] leading-[1.0] tracking-[-0.035em] max-w-3xl text-balance"
          >
            Join a quiet community of{" "}
            <em className="font-display italic text-accent">writers</em>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: 0.04, ease: "easeOut" }}
            className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-rule text-paper-2 leading-relaxed"
          >
            One dispatch a week. New essays, a short editor&apos;s note, and
            the occasional reading list. No tracking pixels, no
            referral asks. Unsubscribe in one click.
          </motion.p>
        </div>

        {/* Stats — mono spec block */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-rule mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className={`px-6 py-8 ${
                index !== 0 ? "md:border-l border-rule" : ""
              } ${index === 2 ? "border-t md:border-t-0 border-rule" : ""} ${
                index === 3 ? "border-t md:border-t-0 border-l border-rule" : ""
              }`}
            >
              <div className="font-display text-paper text-[2rem] leading-none tracking-[-0.03em] mb-3">
                {stat.value}
              </div>
              <div className="font-mono text-[0.7rem] tracking-label uppercase text-paper-3">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <h3 className="font-display text-paper text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.05] tracking-[-0.03em] max-w-xl text-balance">
              Start your writing journey today.
            </h3>
            <p className="mt-5 text-paper-2 leading-relaxed max-w-xl">
              Join Writers&apos; Haven and turn your passion for writing into
              engaging work that reaches readers worldwide.
            </p>
            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8 space-y-2.5 max-w-xl"
            >
              {features.map((feature) => (
                <motion.li
                  key={feature}
                  variants={fadeUp}
                  className="flex items-start gap-3 text-paper-2"
                >
                  <span className="text-accent font-mono mt-1">▸</span>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: 0.04, ease: "easeOut" }}
            onSubmit={(e) => e.preventDefault()}
            className="relative lg:col-span-5 ascii-frame border border-rule bg-ink-2 p-8"
          >
            <p className="label mb-6">// subscribe</p>
            <label className="block">
              <span className="font-mono text-xs text-paper-3 block mb-2">
                &gt; your email
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="hello@yourname.com"
                className="w-full bg-transparent border-0 border-b border-rule focus:border-accent text-paper py-2 px-0 font-mono text-sm placeholder:text-paper-3/60 outline-none transition-colors"
              />
            </label>
            <button
              type="submit"
              className="mt-8 w-full bg-accent text-ink py-3 hover:bg-paper transition-colors flex items-center justify-center gap-3"
            >
              <span className="font-mono text-xs opacity-70">[</span>
              <span className="font-mono text-xs opacity-70">▸</span>
              <span className="font-medium">Subscribe</span>
              <span className="font-mono text-xs opacity-70">]</span>
            </button>
            <p className="font-mono text-[0.7rem] tracking-label text-paper-3 mt-6 uppercase">
              No credit card · unsubscribe anytime
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default FooterSubscribe;
