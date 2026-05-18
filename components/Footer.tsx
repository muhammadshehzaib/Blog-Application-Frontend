"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const quickLinks = [
  { name: "Articles", href: "/blogs", code: "01" },
  { name: "About", href: "/pages/aboutus", code: "02" },
  { name: "Services", href: "/pages/services", code: "03" },
  { name: "Pricing", href: "/pages/pricing", code: "04" },
];

const writerLinks = [
  { name: "Start writing", href: "/create-blogs", code: "05" },
  { name: "Sign in", href: "/signin", code: "06" },
  { name: "Create account", href: "/signup", code: "07" },
];

const socialLinks = [
  { name: "Twitter", handle: "@writersheaven", href: "https://twitter.com" },
  { name: "GitHub", handle: "/writersheaven", href: "https://github.com" },
  { name: "RSS", handle: "/feed.xml", href: "/feed.xml" },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-ink text-paper border-t border-rule">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-10">
        {/* Top section header */}
        <div className="flex items-baseline gap-4 mb-12">
          <span className="font-mono text-paper-3 text-[0.7rem] tracking-label">
            §
          </span>
          <span className="label">End of file</span>
          <span className="flex-1 border-t border-rule translate-y-[-2px]" />
          <span className="font-mono text-paper-3 text-[0.7rem] tracking-label hidden md:inline">
            EOF
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand block */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="md:col-span-5"
          >
            <Link href="/" className="inline-flex items-baseline gap-2 group">
              <span className="text-accent font-mono">▎</span>
              <span className="font-display text-3xl text-paper tracking-tight">
                Writers&apos; Haven
              </span>
            </Link>
            <p className="mt-6 text-paper-2 leading-relaxed max-w-md">
              A publishing platform for essays, reporting, and short fiction.
              Built for writers who care about the page, and readers who care
              about the writing.
            </p>

            {/* ASCII signature */}
            <pre className="mt-8 font-mono text-[0.7rem] text-paper-3 leading-tight select-none hidden md:block">
{`  ╭─────────────────╮
  │  made by hand   │
  │  in small batch │
  ╰─────────────────╯`}
            </pre>
          </motion.div>

          {/* Read */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="md:col-span-2"
          >
            <p className="label mb-5">Read</p>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-baseline gap-2 text-paper-2 hover:text-paper transition-colors"
                  >
                    <span className="font-mono text-[0.65rem] text-paper-3 group-hover:text-accent transition-colors">
                      {link.code}
                    </span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Write */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="md:col-span-2"
          >
            <p className="label mb-5">Write</p>
            <ul className="space-y-2.5">
              {writerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-baseline gap-2 text-paper-2 hover:text-paper transition-colors"
                  >
                    <span className="font-mono text-[0.65rem] text-paper-3 group-hover:text-accent transition-colors">
                      {link.code}
                    </span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Elsewhere */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="md:col-span-3"
          >
            <p className="label mb-5">Elsewhere</p>
            <ul className="space-y-2.5">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-baseline justify-between gap-4 text-paper-2 hover:text-paper transition-colors"
                  >
                    <span>{social.name}</span>
                    <span className="font-mono text-xs text-paper-3 group-hover:text-accent transition-colors truncate">
                      {social.handle}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="border-t border-rule pt-6 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between"
        >
          <p className="font-mono text-[0.7rem] tracking-label text-paper-3 uppercase">
            © {year} Writers&apos; Haven · All rights reserved
          </p>
          <p className="font-mono text-[0.7rem] tracking-label text-paper-3 uppercase flex items-center gap-2">
            <span className="text-accent">●</span>
            <span>system online</span>
            <span className="text-rule">·</span>
            <span>v.01.00</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
