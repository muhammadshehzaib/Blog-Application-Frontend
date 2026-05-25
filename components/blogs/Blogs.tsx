"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "../Navigation";
import Footer from "../Footer";

interface Blog {
  _id: string;
  status: string;
  createdAt: string;
  title: string;
  image: string;
  content: string;
  author: string;
  category: {
    category: string;
  };
}

interface PaginatedBlogs {
  items: Blog[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

const PAGE_SIZE = 12;

function pageWindow(current: number, total: number): (number | "…")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const out: (number | "…")[] = [1];
  const left = Math.max(2, current - 1);
  const right = Math.min(total - 1, current + 1);
  if (left > 2) out.push("…");
  for (let i = left; i <= right; i++) out.push(i);
  if (right < total - 1) out.push("…");
  out.push(total);
  return out;
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

const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.22, ease: [0.2, 0.65, 0.2, 1] as const },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.04 } },
};

const BlogRow = ({ blog, index }: { blog: Blog; index: number }) => {
  const dateStr = new Date(blog.createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <motion.article
      variants={fadeUp}
      className="group border border-rule bg-ink hover:bg-ink-2 transition-colors rounded-none"
    >
      <Link href={`/blogs/${blog._id}`} className="block p-6 md:p-8">
        <div className="grid grid-cols-12 gap-6 items-baseline">
          <div className="hidden md:block col-span-1 font-mono text-[0.7rem] tracking-label text-paper-3 uppercase pt-1">
            {String(index + 1).padStart(2, "0")}
          </div>

          <div className="col-span-12 md:col-span-8">
            <div className="flex items-center gap-2 mb-3 font-mono text-[0.7rem] tracking-label uppercase text-paper-3">
              <span className="text-accent">●</span>
              <span>{blog.category?.category || "General"}</span>
              <span className="text-rule">·</span>
              <span>{dateStr}</span>
            </div>

            <h3 className="font-display text-paper text-[1.6rem] md:text-[1.85rem] leading-tight tracking-tight mb-3 group-hover:text-accent transition-colors text-balance">
              {blog.title}
            </h3>

            <p className="text-paper-2 leading-relaxed line-clamp-2 max-w-2xl">
              {blog.content}
            </p>
          </div>

          <div className="col-span-12 md:col-span-3 md:text-right">
            <div className="font-mono text-[0.7rem] tracking-label uppercase text-paper-3">
              <span>by </span>
              <span className="text-paper-2">{blog.author || "anon"}</span>
            </div>
            <div className="mt-3 font-mono text-[0.7rem] tracking-label uppercase text-paper-3 group-hover:text-accent transition-colors inline-flex items-center gap-1.5">
              <span>read</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

const Blogs: React.FC = () => {
  const [items, setItems] = useState<Blog[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [categorySelected, setCategorySelected] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [allCategories, setAllCategories] = useState<string[]>([]);

  useEffect(() => {
    const id = setTimeout(() => setDebouncedQuery(query.trim()), 300);
    return () => clearTimeout(id);
  }, [query]);

  useEffect(() => {
    setPage(1);
  }, [categorySelected, debouncedQuery]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          `${process.env.DEPLOYMENTLINK}/blogscategories`,
        );
        if (!res.ok) return;
        const data = await res.json();
        const names = (Array.isArray(data) ? data : [])
          .map((c: { category?: string }) => c?.category)
          .filter(Boolean) as string[];
        setAllCategories(names);
      } catch {
        /* non-fatal */
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const params = new URLSearchParams({
          page: String(page),
          limit: String(PAGE_SIZE),
        });
        if (categorySelected) params.set("category", categorySelected);
        if (debouncedQuery) params.set("q", debouncedQuery);

        const response = await fetch(
          `${process.env.DEPLOYMENTLINK}/blogs?${params.toString()}`,
        );
        if (!response.ok) throw new Error("Failed to fetch blog data");
        const data: PaginatedBlogs = await response.json();
        setItems(data.items ?? []);
        setTotal(data.total ?? 0);
        setTotalPages(Math.max(1, data.totalPages ?? 1));
      } catch (error: any) {
        console.error(error.message);
        setItems([]);
        setTotal(0);
        setTotalPages(1);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [page, categorySelected, debouncedQuery]);

  const handleClick = (value: string | null) => {
    setCategorySelected(value);
  };

  const goToPage = (p: number) => {
    const next = Math.min(Math.max(1, p), totalPages);
    if (next === page) return;
    setPage(next);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const uniqueCategories = useMemo(() => {
    if (allCategories.length > 0) return allCategories;
    return Array.from(
      new Set(items.map((b) => b.category?.category).filter(Boolean) as string[]),
    );
  }, [allCategories, items]);

  const rangeStart = total === 0 ? 0 : (page - 1) * PAGE_SIZE + 1;
  const rangeEnd = Math.min(total, page * PAGE_SIZE);

  const issueDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <main className="bg-ink text-paper min-h-screen">
      <Navigation />

      {/* ────────────── HERO ────────────── */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="flex items-center gap-3 mb-12 font-mono text-[0.7rem] tracking-label text-paper-3 uppercase"
          >
            <span className="text-accent">●</span>
            <span>Archive / {issueDate}</span>
            <span className="flex-1 border-t border-rule" />
            <span className="hidden md:inline">
              {total} pieces · {uniqueCategories.length} categories
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="font-display text-paper text-[clamp(2.25rem,6vw,4.5rem)] leading-[0.98] tracking-[-0.04em] max-w-4xl text-balance"
          >
            Every piece <em className="text-accent font-display italic">we&apos;ve</em>{" "}
            published, in one place.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.24 }}
            className="mt-8 max-w-2xl text-paper-2 text-lg leading-relaxed"
          >
            Essays, reporting, and short fiction from the Writers&apos; Haven
            contributors. Filter by section or search the archive.
          </motion.p>

          {/* ASCII spec block */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.18, duration: 0.24 }}
            className="mt-14 font-mono text-[0.75rem] text-paper-3 leading-relaxed select-none hidden md:block"
          >
            <pre className="whitespace-pre">
{`┌─ archive ──────────────────────────────────────────────────
│  total       ${String(total).padStart(4, " ")} pieces
│  sections    ${String(uniqueCategories.length).padStart(4, " ")} categories
│  page        ${String(page).padStart(4, " ")} of ${String(totalPages).padStart(4, " ")}
│  filter      ${categorySelected ?? "all"}
│  query       ${query || "—"}
└────────────────────────────────────────────────────────────`}
            </pre>
          </motion.div>
        </div>
      </section>

      {/* ────────────── FILTER + SEARCH ────────────── */}
      <section className="relative border-t border-rule">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <p className="label mb-4">// filter by section</p>
              <div className="flex flex-wrap gap-x-5 gap-y-2 items-baseline">
                <button
                  onClick={() => handleClick(null)}
                  className={`group inline-flex items-baseline gap-2 font-mono text-xs uppercase tracking-label transition-colors ${
                    categorySelected === null
                      ? "text-accent"
                      : "text-paper-3 hover:text-paper"
                  }`}
                >
                  <span className="font-mono text-[0.65rem] opacity-80">
                    {categorySelected === null ? "▸" : "·"}
                  </span>
                  <span>all</span>
                </button>

                {uniqueCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleClick(category)}
                    className={`group inline-flex items-baseline gap-2 font-mono text-xs uppercase tracking-label transition-colors ${
                      categorySelected === category
                        ? "text-accent"
                        : "text-paper-3 hover:text-paper"
                    }`}
                  >
                    <span className="font-mono text-[0.65rem] opacity-80">
                      {categorySelected === category ? "▸" : "·"}
                    </span>
                    <span>{category}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <label className="block">
                <span className="label block mb-2">// search archive</span>
                <div className="flex items-center gap-3 border-b border-rule focus-within:border-accent transition-colors">
                  <span className="font-mono text-paper-3 text-sm select-none">
                    &gt;
                  </span>
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="search query"
                    className="w-full bg-transparent border-0 text-paper py-2 px-0 font-mono text-sm placeholder:text-paper-3/60 outline-none"
                  />
                  {query && (
                    <button
                      onClick={() => setQuery("")}
                      className="font-mono text-xs text-paper-3 hover:text-accent transition-colors"
                      aria-label="Clear search"
                    >
                      ×
                    </button>
                  )}
                </div>
              </label>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────── LIST ────────────── */}
      <section className="relative border-t border-rule">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
          <SectionHeader
            index="02"
            label="All Articles"
            caption={
              isLoading
                ? "loading…"
                : total === 0
                  ? "0 results"
                  : `${rangeStart}–${rangeEnd} of ${total}`
            }
          />

          {isLoading ? (
            <div className="space-y-4">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="border border-rule p-8 animate-pulse"
                >
                  <div className="h-3 w-32 bg-rule mb-5" />
                  <div className="h-7 bg-rule mb-3 max-w-xl" />
                  <div className="h-3 bg-rule max-w-md" />
                </div>
              ))}
            </div>
          ) : items.length > 0 ? (
            <motion.div
              key={`page-${page}-${categorySelected ?? "all"}-${debouncedQuery}`}
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              <AnimatePresence mode="popLayout">
                {items.map((blog, index) => (
                  <BlogRow
                    key={blog._id}
                    blog={blog}
                    index={(page - 1) * PAGE_SIZE + index}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="border border-rule p-16 text-center font-mono text-sm text-paper-3">
              <p>// no articles match this filter</p>
              <p className="mt-3">
                <button
                  onClick={() => {
                    handleClick(null);
                    setQuery("");
                  }}
                  className="text-accent hover:underline underline-offset-4 decoration-1"
                >
                  ▸ reset filters
                </button>
              </p>
            </div>
          )}

          {!isLoading && total > 0 && (
            <div className="mt-10 pt-6 border-t border-rule font-mono text-[0.7rem] tracking-label uppercase text-paper-3 flex flex-wrap items-center justify-between gap-3">
              <span>
                showing{" "}
                <span className="text-paper">
                  {rangeStart}–{rangeEnd}
                </span>{" "}
                of <span className="text-paper">{total}</span>
                {categorySelected && (
                  <>
                    {" "}in <span className="text-paper">{categorySelected}</span>
                  </>
                )}
              </span>
              <span className="flex items-center gap-2">
                <span className="text-accent">●</span>
                <span>
                  page {page} / {totalPages}
                </span>
              </span>
            </div>
          )}

          {!isLoading && totalPages > 1 && (
            <nav
              aria-label="Pagination"
              className="mt-8 flex flex-wrap items-center justify-center gap-1 font-mono text-xs tracking-label uppercase"
            >
              <button
                onClick={() => goToPage(page - 1)}
                disabled={page === 1}
                className="px-3 py-2 border border-rule text-paper-3 hover:text-accent hover:border-accent transition-colors disabled:opacity-30 disabled:hover:text-paper-3 disabled:hover:border-rule disabled:cursor-not-allowed"
              >
                ← prev
              </button>

              {pageWindow(page, totalPages).map((p, i) =>
                p === "…" ? (
                  <span
                    key={`gap-${i}`}
                    className="px-2 py-2 text-paper-3 select-none"
                  >
                    …
                  </span>
                ) : (
                  <button
                    key={p}
                    onClick={() => goToPage(p)}
                    className={`min-w-[2.5rem] px-3 py-2 border transition-colors ${
                      p === page
                        ? "border-accent text-accent"
                        : "border-rule text-paper-3 hover:text-paper hover:border-paper-3"
                    }`}
                  >
                    {String(p).padStart(2, "0")}
                  </button>
                ),
              )}

              <button
                onClick={() => goToPage(page + 1)}
                disabled={page === totalPages}
                className="px-3 py-2 border border-rule text-paper-3 hover:text-accent hover:border-accent transition-colors disabled:opacity-30 disabled:hover:text-paper-3 disabled:hover:border-rule disabled:cursor-not-allowed"
              >
                next →
              </button>
            </nav>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blogs;
