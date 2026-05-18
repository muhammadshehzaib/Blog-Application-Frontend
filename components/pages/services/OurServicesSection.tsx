"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Service {
  title: string;
  description: string;
  link: string;
  linkText: string;
}

const services: Service[] = [
  {
    title: "Content Creation Tools",
    description:
      "Advanced editor with markdown support, image optimization, and formatting tools to help you create beautiful content.",
    link: "/create-blogs",
    linkText: "Start writing",
  },
  {
    title: "Analytics & Insights",
    description:
      "Detailed analytics on your content performance, reader engagement, and audience demographics.",
    link: "/analytics",
    linkText: "View analytics",
  },
  {
    title: "SEO Optimization",
    description:
      "Built-in SEO tools to help your content rank better and reach a wider audience.",
    link: "/seo-tools",
    linkText: "Optimize content",
  },
  {
    title: "Community Features",
    description:
      "Connect with other writers, join writing challenges, and participate in community events.",
    link: "/community",
    linkText: "Join community",
  },
  {
    title: "Monetization",
    description:
      "Multiple ways to monetize your content through subscriptions, tips, and sponsored opportunities.",
    link: "/monetization",
    linkText: "Start earning",
  },
  {
    title: "Support & Resources",
    description:
      "24/7 support, writing guides, and resources to help you grow as a writer.",
    link: "/resources",
    linkText: "Access resources",
  },
];

const SectionHeader = ({
  index,
  label,
  caption,
}: {
  index: string;
  label: string;
  caption?: string;
}) => (
  <div className="flex items-baseline gap-4 mb-12">
    <span className="font-mono text-paper-3 text-[0.7rem] tracking-label">
      § {index}
    </span>
    <span className="label">{label}</span>
    <span className="flex-1 border-t border-rule translate-y-[-2px]" />
    {caption && (
      <span className="font-mono text-paper-3 text-[0.7rem] tracking-label hidden md:inline">
        {caption}
      </span>
    )}
  </div>
);

const OurServicesSection = () => {
  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.04 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.24, ease: [0.2, 0.65, 0.2, 1] },
    },
  };

  return (
    <section
      id="services"
      className="relative border-t border-rule"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <SectionHeader
          index="02"
          label="What We Offer"
          caption={`${services.length.toString().padStart(2, "0")} modules`}
        />

        {/* Lead paragraph in asymmetric grid */}
        <div className="grid grid-cols-12 gap-6 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.24 }}
            className="col-span-12 md:col-span-7 font-display text-paper text-[clamp(2rem,5vw,3.5rem)] leading-[1.0] tracking-[-0.035em] text-balance"
          >
            A complete kit for{" "}
            <em className="text-accent font-display italic">modern</em> writers.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.24, delay: 0.06 }}
            className="col-span-12 md:col-span-5 md:pl-6 md:border-l md:border-rule text-paper-2 leading-relaxed"
          >
            Each module below is part of the standard offering. Nothing is
            locked behind a tier. Read what you need, then start writing.
          </motion.p>
        </div>

        {/* Numbered editorial list */}
        <motion.ol
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="border-t border-rule"
        >
          {services.map((service, index) => {
            const num = (index + 1).toString().padStart(2, "0");
            return (
              <motion.li
                key={service.title}
                variants={fadeUp}
                className="group border-b border-rule hover:bg-ink-2 transition-colors"
              >
                <div className="grid grid-cols-12 gap-6 py-10 px-2 md:px-4">
                  {/* Mono number */}
                  <div className="col-span-2 md:col-span-1">
                    <span className="font-mono text-paper-3 text-[0.7rem] tracking-label">
                      {num}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="col-span-10 md:col-span-4">
                    <h3 className="font-display text-paper text-2xl md:text-3xl leading-tight tracking-tight">
                      {service.title}
                    </h3>
                  </div>

                  {/* Body + link */}
                  <div className="col-span-12 md:col-span-7 flex flex-col gap-5">
                    <p className="text-paper-2 leading-relaxed max-w-2xl">
                      {service.description}
                    </p>
                    <Link
                      href={service.link}
                      className="inline-flex items-baseline gap-2 self-start text-accent underline underline-offset-4 decoration-1 hover:text-paper transition-colors"
                    >
                      <span className="font-mono text-xs">▸</span>
                      <span>{service.linkText}</span>
                    </Link>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </motion.ol>

        {/* Footer dotted rule */}
        <div className="mt-16 flex items-center gap-4 font-mono text-[0.7rem] tracking-label text-paper-3 uppercase">
          <span>· · ·</span>
          <span>End of catalog</span>
          <span className="flex-1 border-t border-rule translate-y-[-2px]" />
          <span className="hidden md:inline">{services.length} of {services.length}</span>
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
