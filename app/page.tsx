"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface Blog {
  _id: string;
  status: string;
  createdAt: string;
  title: string;
  image: string;
  content: string;
  author: string;
  category?: { category: string };
}

const SectionHeader = ({
  index,
  label,
  caption,
}: {
  index: string;
  label: string;
  caption?: string;
}) => (
  <div className="flex items-baseline gap-4 mb-10">
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

const AsciiCorners = () => (
  <>
    <span className="absolute -top-px -left-px w-3 h-3 border-t border-l border-paper-3" />
    <span className="absolute -top-px -right-px w-3 h-3 border-t border-r border-paper-3" />
    <span className="absolute -bottom-px -left-px w-3 h-3 border-b border-l border-paper-3" />
    <span className="absolute -bottom-px -right-px w-3 h-3 border-b border-r border-paper-3" />
  </>
);

export default function Home() {
  const [blogData, setBlogData] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/blogs`
        );
        if (!response.ok) throw new Error("Failed to fetch blog data");
        const data: Blog[] = await response.json();
        setBlogData(data.filter((blog) => blog.status === "Approved"));
      } catch (error: any) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
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
      transition: { duration: 0.4, ease: [0.2, 0.65, 0.2, 1] },
    },
  };

  return (
    <main className="bg-ink text-paper min-h-screen">
      <Navigation />

      {/* ─────────────  HERO  ───────────── */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-28">
          {/* Meta line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3 mb-12 font-mono text-[0.7rem] tracking-label text-paper-3 uppercase"
          >
            <span className="text-accent">●</span>
            <span>Issue 014 / May 2026</span>
            <span className="flex-1 border-t border-rule" />
            <span className="hidden md:inline">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="font-display text-paper text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] tracking-[-0.04em] max-w-5xl text-balance"
          >
            <motion.span variants={fadeUp} className="block">
              A quiet place
            </motion.span>
            <motion.span variants={fadeUp} className="block">
              for <em className="text-accent font-display italic">loud</em>{" "}
              ideas.
            </motion.span>
          </motion.h1>

          {/* Subhead grid */}
          <div className="mt-14 grid grid-cols-12 gap-6">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.4 }}
              className="col-span-12 md:col-span-7 text-paper-2 text-lg leading-relaxed max-w-2xl"
            >
              Writers&apos; Haven is a publishing platform for essays,
              reporting, and short fiction. No engagement metrics.
              No infinite scroll. Just the writing, the reader, and the
              page.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="col-span-12 md:col-span-5 md:pl-6 md:border-l md:border-rule"
            >
              <p className="label mb-2">Now Reading</p>
              <p className="font-display text-2xl leading-tight text-paper">
                The slow web — why we stopped scrolling and started reading
                again.
              </p>
              <p className="font-mono text-[0.7rem] tracking-label text-paper-3 mt-3 uppercase">
                By M. Okafor · 7 min
              </p>
            </motion.div>
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="mt-14 flex flex-col sm:flex-row gap-3 items-start"
          >
            <Link
              href="/blogs"
              className="group inline-flex items-center gap-3 bg-accent text-ink px-6 py-3.5 hover:bg-paper transition-colors"
            >
              <span className="font-mono text-xs opacity-70">▸</span>
              <span className="font-medium">Read the latest</span>
              <span className="font-mono text-xs opacity-70 transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="/create-blogs"
              className="group inline-flex items-center gap-3 border border-rule text-paper px-6 py-3.5 hover:border-paper-3 hover:bg-ink-2 transition-colors"
            >
              <span className="font-mono text-xs text-paper-3">[</span>
              <span>Start writing</span>
              <span className="font-mono text-xs text-paper-3">]</span>
            </Link>
          </motion.div>

          {/* ASCII spec block */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.4 }}
            className="mt-24 font-mono text-[0.75rem] text-paper-3 leading-relaxed select-none hidden md:block"
          >
            <pre className="whitespace-pre">
{`┌─ system —————————————————————————————————————————————————
│  status      online ◦ healthy
│  contributors  2,184 writers across 47 countries
│  published    14,892 essays · 392 short stories · 1,107 reports
│  last build   ${new Date().toISOString().slice(0, 16).replace("T", " ")}
└────────────────────────────────────────────────────────────`}
            </pre>
          </motion.div>
        </div>
      </section>

      {/* ─────────────  WHAT IT IS  ───────────── */}
      <section className="relative border-t border-rule">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <SectionHeader
            index="01"
            label="The Idea"
            caption="three principles"
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule"
          >
            {[
              {
                n: "i.",
                title: "Restraint is a feature.",
                body: "No notification dot, no streak counter, no follower number. The page is the product.",
              },
              {
                n: "ii.",
                title: "Writers own everything.",
                body: "Your essays. Your audience. Your archive. Export to plain text or Markdown at any time.",
              },
              {
                n: "iii.",
                title: "Reading is sacred.",
                body: "Typography first. No autoplay video, no scroll-jacking, no popovers asking you to subscribe.",
              },
            ].map((item) => (
              <motion.div
                key={item.n}
                variants={fadeUp}
                className="bg-ink p-8 hover:bg-ink-2 transition-colors"
              >
                <div className="font-mono text-accent text-sm mb-6">{item.n}</div>
                <h3 className="font-display text-[1.6rem] leading-tight text-paper mb-4 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-paper-2 leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─────────────  FEATURED  ───────────── */}
      <section className="relative border-t border-rule">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <SectionHeader
            index="02"
            label="Featured This Issue"
            caption={`${blogData.length || 0} pieces`}
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            <AnimatePresence mode="wait">
              {isLoading ? (
                <>
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      className={`${
                        i === 0 ? "lg:col-span-7" : "lg:col-span-5"
                      } ${i === 2 ? "lg:col-start-8" : ""} border border-rule p-8 animate-pulse`}
                    >
                      <div className="h-3 w-20 bg-rule mb-6" />
                      <div className="h-8 bg-rule mb-3" />
                      <div className="h-8 bg-rule mb-6 w-2/3" />
                      <div className="space-y-2">
                        <div className="h-3 bg-rule" />
                        <div className="h-3 bg-rule w-4/5" />
                      </div>
                    </motion.div>
                  ))}
                </>
              ) : blogData.length > 0 ? (
                blogData.slice(0, 3).map((blog, index) => (
                  <motion.article
                    key={blog._id}
                    variants={fadeUp}
                    className={`group relative ascii-frame border border-rule bg-ink hover:bg-ink-2 transition-colors ${
                      index === 0
                        ? "lg:col-span-7 lg:row-span-2"
                        : "lg:col-span-5"
                    }`}
                  >
                    <Link href={`/blogs/${blog._id}`} className="block p-8">
                      <div className="flex items-center gap-3 mb-6 font-mono text-[0.7rem] tracking-label text-paper-3 uppercase">
                        <span className="text-accent">●</span>
                        <span>{blog.category?.category || "General"}</span>
                        <span className="text-rule">/</span>
                        <span>
                          {new Date(blog.createdAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <h3
                        className={`font-display text-paper leading-tight tracking-tight mb-4 group-hover:text-accent transition-colors ${
                          index === 0 ? "text-[2.5rem]" : "text-[1.75rem]"
                        }`}
                      >
                        {blog.title}
                      </h3>
                      <p className="text-paper-2 leading-relaxed line-clamp-3 mb-6">
                        {blog.content.length > 180
                          ? `${blog.content.substring(0, 180)}…`
                          : blog.content}
                      </p>
                      <div className="flex items-center gap-2 font-mono text-xs text-paper-3 group-hover:text-accent transition-colors">
                        <span>Read</span>
                        <span className="transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </div>
                    </Link>
                  </motion.article>
                ))
              ) : (
                <div className="col-span-full border border-rule p-12 text-center font-mono text-sm text-paper-3">
                  <p>// no published articles yet</p>
                  <p className="mt-2">
                    <Link
                      href="/create-blogs"
                      className="text-accent hover:underline underline-offset-4"
                    >
                      ▸ be the first to publish
                    </Link>
                  </p>
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ─────────────  CALL TO WRITE  ───────────── */}
      <section className="relative border-t border-rule">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <SectionHeader index="03" label="Become a Contributor" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="font-display text-paper text-[clamp(2rem,5vw,4rem)] leading-[1.0] tracking-[-0.035em] max-w-2xl text-balance"
              >
                Publish your first piece by the end of the week.
                <span className="caret" />
              </motion.h2>

              <motion.ul
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-10 space-y-3 max-w-xl"
              >
                {[
                  "A clean, markdown-friendly editor — no toolbars in the way",
                  "Your own URL, archive, and RSS feed from day one",
                  "Pay what you can, or nothing. We don't take a cut.",
                ].map((item) => (
                  <motion.li
                    key={item}
                    variants={fadeUp}
                    className="flex items-start gap-3 text-paper-2"
                  >
                    <span className="text-accent font-mono mt-1">▸</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <div className="lg:col-span-5">
              <motion.form
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="relative border border-rule p-8 bg-ink-2"
                onSubmit={(e) => e.preventDefault()}
              >
                <AsciiCorners />
                <p className="label mb-6">// invite-yourself</p>
                <label className="block">
                  <span className="font-mono text-xs text-paper-3 block mb-2">
                    &gt; your email
                  </span>
                  <input
                    type="email"
                    placeholder="hello@yourname.com"
                    className="w-full bg-transparent border-0 border-b border-rule focus:border-accent text-paper py-2 px-0 font-mono text-sm placeholder:text-paper-3/60 outline-none transition-colors"
                  />
                </label>
                <button
                  type="submit"
                  className="mt-8 w-full bg-paper text-ink py-3 hover:bg-accent transition-colors flex items-center justify-center gap-3"
                >
                  <span className="font-mono text-xs opacity-60">▸</span>
                  <span className="font-medium">Send my invite</span>
                </button>
                <p className="font-mono text-[0.7rem] tracking-label text-paper-3 mt-6 uppercase">
                  No credit card · free forever
                </p>
              </motion.form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
