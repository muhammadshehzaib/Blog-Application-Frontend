"use client";

import React from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import FooterSubscribe from "@/components/blogs/FooterSubscribe";
import HeroSection from "./HeroSection";
import Histroy from "./Histroy";

const AboutBody = () => {
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
            § 03
          </span>
          <span className="label">On the record</span>
          <span className="flex-1 border-t border-rule translate-y-[-2px]" />
          <span className="font-mono text-paper-3 text-[0.7rem] tracking-label hidden md:inline">
            long form
          </span>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-12 gap-10"
        >
          {/* Sidebar meta */}
          <motion.aside
            variants={fadeUp}
            className="col-span-12 md:col-span-4 lg:col-span-3"
          >
            <div className="md:sticky md:top-24">
              <p className="label mb-3">Filed under</p>
              <ul className="space-y-2 font-mono text-sm text-paper-2">
                <li>
                  <span className="text-paper-3">▸</span> editorial
                </li>
                <li>
                  <span className="text-paper-3">▸</span> mission
                </li>
                <li>
                  <span className="text-paper-3">▸</span> craft
                </li>
              </ul>
              <p className="font-mono text-[0.7rem] tracking-label text-paper-3 mt-8 uppercase">
                Last revised<br />2026.05.18
              </p>
            </div>
          </motion.aside>

          {/* Long-form body */}
          <motion.article
            variants={fadeUp}
            className="col-span-12 md:col-span-8 lg:col-span-9"
          >
            <div className="max-w-2xl text-paper-2 leading-relaxed space-y-6">
              <p>
                We started Writers&apos; Haven because the internet felt
                louder every year, and the writing felt thinner. We wanted
                a corner of the web that resembled a desk lamp instead of a
                stadium — a place where an essay could land, breathe, and
                find its reader.
              </p>
              <p>
                There is no algorithm here that decides what you see next.
                There is no streak counter trying to make you publish
                before you&apos;re ready. There is no growth team optimising
                the page to keep you on it for thirty more seconds. The
                page is the product, and the product is finished when the
                writer says it is.
              </p>

              {/* Inner section header */}
              <div className="pt-6">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="font-mono text-paper-3 text-[0.7rem] tracking-label">
                    § 03.1
                  </span>
                  <span className="label">How we&apos;re funded</span>
                  <span className="flex-1 border-t border-rule translate-y-[-2px]" />
                </div>
                <p>
                  Readers pay what they can. Writers keep what they earn.
                  We take no cut on subscriptions, and we don&apos;t serve
                  advertising. Operating costs come from a small group of
                  patrons and a once-a-year membership drive — which is
                  short, honest, and easy to skip.
                </p>
              </div>

              <div className="pt-6">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="font-mono text-paper-3 text-[0.7rem] tracking-label">
                    § 03.2
                  </span>
                  <span className="label">Who we are</span>
                  <span className="flex-1 border-t border-rule translate-y-[-2px]" />
                </div>
                <p>
                  A team of nine — editors, two engineers, a designer, and
                  a part-time librarian who keeps the archive sane. We
                  work in different time zones and we ship slowly on
                  purpose. If you&apos;d like to write for us, the door is
                  open and the inbox is real.
                </p>
              </div>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
};

const AboutUs = () => {
  return (
    <main className="bg-ink text-paper min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutBody />
      <Histroy />
      <FooterSubscribe />
      <Footer />
    </main>
  );
};

export default AboutUs;
