"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Feature {
  n: string;
  title: string;
  body: string;
}

const features: Feature[] = [
  {
    n: "i.",
    title: "A page-first editor",
    body: "A clean, markdown-friendly composer. No floating toolbars, no AI-rewrite buttons. Just the cursor and the page.",
  },
  {
    n: "ii.",
    title: "Your archive, your URL",
    body: "Every piece keeps a permanent address. Export the whole archive to plain text or Markdown at any time.",
  },
  {
    n: "iii.",
    title: "Multimedia, restrained",
    body: "Images and audio when they earn their place. No autoplay. No carousel. The writing leads.",
  },
  {
    n: "iv.",
    title: "Indexed for readers",
    body: "Built-in metadata, RSS, and sitemaps. Search engines find your work. Readers find their way back.",
  },
  {
    n: "v.",
    title: "Quietly secure",
    body: "Sessions, signed tokens, backups. Standard practice, kept current. You don't have to think about it.",
  },
  {
    n: "vi.",
    title: "Reads on every screen",
    body: "Type scales with viewport. Line length stays measured. The page works on a phone, a kindle, an old laptop.",
  },
];

const Cards = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.DEPLOYMENTLINK}/blogs`);
        if (!response.ok) {
          throw new Error("Failed to fetch blog data");
        }
        const data = await response.json();
        setBlogData(data);
      } catch (error: any) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

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
    <div className="px-6">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-rule border border-rule"
      >
        {features.map((item) => (
          <motion.div
            key={item.n}
            variants={fadeUp}
            className="bg-ink p-8 hover:bg-ink-2 transition-colors flex flex-col"
          >
            <div className="font-mono text-accent text-sm mb-5">{item.n}</div>
            <h3 className="font-display text-paper text-[1.4rem] leading-tight tracking-tight mb-3">
              {item.title}
            </h3>
            <p className="text-paper-2 leading-relaxed text-sm mb-6">
              {item.body}
            </p>
            <Link
              href="/"
              className="mt-auto inline-flex items-center gap-2 font-mono text-[0.7rem] tracking-label uppercase text-paper-3 hover:text-accent transition-colors"
            >
              <span>▸</span>
              <span>discover</span>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Cards;
