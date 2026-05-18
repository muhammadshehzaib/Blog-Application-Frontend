"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Plans = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/mo",
      description: "Perfect for getting started",
      features: [
        "Up to 3 articles per month",
        "Basic writing tools",
        "Community access",
      ],
      buttonText: "Get Started",
      buttonLink: "/signup",
      gradient: "from-zinc-500 to-zinc-600",
      featured: false,
    },
    {
      name: "Pro",
      price: "$15",
      period: "/mo",
      description: "For serious writers",
      features: [
        "Unlimited articles",
        "Advanced writing tools",
        "Analytics dashboard",
        "Priority support",
      ],
      buttonText: "Upgrade to Pro",
      buttonLink: "/signup?plan=pro",
      gradient: "from-emerald-500 to-teal-500",
      featured: true,
    },
    {
      name: "Business",
      price: "$49",
      period: "/mo",
      description: "For professional publishers",
      features: [
        "Everything in Pro",
        "Custom branding",
        "Team collaboration",
        "API access",
      ],
      buttonText: "Contact Sales",
      buttonLink: "/signup?plan=business",
      gradient: "from-blue-500 to-cyan-500",
      featured: false,
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
      transition: { duration: 0.22, ease: [0.2, 0.65, 0.2, 1] },
    },
  };

  return (
    <section className="relative bg-ink border-t border-rule">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        {/* Section header */}
        <div className="flex items-baseline gap-4 mb-12">
          <span className="font-mono text-paper-3 text-[0.7rem] tracking-label">
            § 04
          </span>
          <span className="label">Choose a tier</span>
          <span className="flex-1 border-t border-rule translate-y-[-2px]" />
          <span className="font-mono text-paper-3 text-[0.7rem] tracking-label hidden md:inline">
            three options
          </span>
        </div>

        {/* Heading + lede */}
        <div className="grid grid-cols-12 gap-6 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.22 }}
            className="col-span-12 md:col-span-7 font-display text-paper text-[clamp(2rem,5vw,3.5rem)] leading-[1.0] tracking-[-0.035em] max-w-3xl text-balance"
          >
            Choose your{" "}
            <em className="text-accent font-display italic">writing</em>{" "}
            journey.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.04, duration: 0.22 }}
            className="col-span-12 md:col-span-5 md:pl-6 md:border-l md:border-rule text-paper-2 leading-relaxed"
          >
            Select a plan that fits your goals today. Upgrade or downgrade
            whenever — your archive, URL, and readers stay put.
          </motion.p>
        </div>

        {/* Plans grid — 3 columns separated by 1px dividers */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule border border-rule"
        >
          {plans.map((plan, index) => {
            const tierCode = String(index + 1).padStart(2, "0");
            const borderClass = plan.featured
              ? "border-accent"
              : "border-transparent";
            return (
              <motion.div
                key={plan.name}
                variants={fadeUp}
                className={`relative bg-ink p-8 flex flex-col border ${borderClass}`}
              >
                {/* Recommended ribbon */}
                {plan.featured && (
                  <div className="font-mono text-[0.7rem] tracking-label text-accent uppercase mb-3">
                    ┌ recommended ┐
                  </div>
                )}

                {/* Tier label */}
                <div className="font-mono text-[0.7rem] tracking-label text-paper-3 uppercase mb-6 flex items-baseline gap-2">
                  <span className={plan.featured ? "text-accent" : "text-paper-3"}>
                    ●
                  </span>
                  <span>TIER · {tierCode}</span>
                </div>

                {/* Plan name */}
                <h3 className="font-display text-2xl text-paper tracking-tight mb-6">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="flex items-baseline gap-1.5 mb-3">
                  <span className="font-display text-paper text-[3.5rem] leading-none tracking-[-0.04em]">
                    {plan.price}
                  </span>
                  <span className="font-mono text-paper-3 text-xs">
                    {plan.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-paper-2 text-sm leading-relaxed mb-8">
                  {plan.description}
                </p>

                {/* Divider */}
                <div className="border-t border-rule mb-6" />

                {/* Features */}
                <ul className="space-y-3 mb-10 flex-1">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-paper-2 text-sm leading-relaxed"
                    >
                      <span className="font-mono text-accent mt-0.5">▸</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA bracket button */}
                <Link
                  href={plan.buttonLink}
                  className={`group inline-flex items-center justify-center gap-2 px-4 py-3 border transition-colors ${
                    plan.featured
                      ? "bg-accent text-ink border-accent hover:bg-paper hover:border-paper"
                      : "bg-transparent text-paper border-rule hover:border-paper-3 hover:bg-ink-2"
                  }`}
                >
                  <span className="font-mono text-[0.7rem] opacity-70">[</span>
                  <span className="text-sm font-medium">
                    {plan.buttonText}
                  </span>
                  <span className="font-mono text-[0.7rem] opacity-70">]</span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.18, duration: 0.22 }}
          className="mt-16 flex flex-col md:flex-row items-start md:items-baseline gap-4 md:gap-6 font-mono text-[0.7rem] tracking-label text-paper-3 uppercase"
        >
          <span className="flex items-center gap-2">
            <span className="text-accent">●</span>
            <span>14-day free trial on every plan</span>
          </span>
          <span className="hidden md:inline text-rule">·</span>
          <span>
            Need something custom?{" "}
            <Link
              href="/contact"
              className="text-accent underline underline-offset-4 decoration-1 hover:text-paper transition-colors"
            >
              talk to us
            </Link>
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Plans;
