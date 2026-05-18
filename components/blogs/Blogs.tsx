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
  const [blogData, setBlogData] = useState<Blog[]>([]);
  const [categorySelected, setCategorySelected] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${process.env.DEPLOYMENTLINK}/blogs`);
        if (!response.ok) {
          throw new Error("Failed to fetch blog data");
        }
        const data: Blog[] = await response.json();
        setBlogData(data);
      } catch (error: any) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleClick = (value: string | null) => {
    setCategorySelected(value);
  };

  const filteredBlogs = useMemo(() => {
    let list = categorySelected
      ? blogData.filter(
          (blog) =>
            blog.category && blog.category.category === categorySelected,
        )
      : blogData;

    const q = query.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (blog) =>
          blog.title?.toLowerCase().includes(q) ||
          blog.content?.toLowerCase().includes(q) ||
          blog.author?.toLowerCase().includes(q),
      );
    }
    return list;
  }, [blogData, categorySelected, query]);

  const uniqueCategories = Array.from(
    new Set(blogData.map((blog) => blog.category && blog.category.category)),
  ).filter(Boolean) as string[];

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
              {blogData.length} pieces · {uniqueCategories.length} categories
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
{`┌─ archive ——————————————————————————————————————————————————
│  total       ${String(blogData.length).padStart(4, " ")} pieces
│  sections    ${String(uniqueCategories.length).padStart(4, " ")} categories
│  filter      ${categorySelected ?? "—"}
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
                : `${filteredBlogs.length} of ${blogData.length}`
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
          ) : filteredBlogs.length > 0 ? (
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              <AnimatePresence mode="popLayout">
                {filteredBlogs.map((blog, index) => (
                  <BlogRow key={blog._id} blog={blog} index={index} />
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

          {!isLoading && filteredBlogs.length > 0 && (
            <div className="mt-10 pt-6 border-t border-rule font-mono text-[0.7rem] tracking-label uppercase text-paper-3 flex flex-wrap items-center justify-between gap-3">
              <span>
                showing{" "}
                <span className="text-paper">{filteredBlogs.length}</span>{" "}
                {filteredBlogs.length === 1 ? "piece" : "pieces"}
                {categorySelected && (
                  <>
                    {" "}in <span className="text-paper">{categorySelected}</span>
                  </>
                )}
              </span>
              <span className="flex items-center gap-2">
                <span className="text-accent">●</span>
                <span>end of archive</span>
              </span>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blogs;
