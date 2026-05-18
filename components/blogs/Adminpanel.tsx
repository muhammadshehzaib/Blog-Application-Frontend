"use client";
import React, { useState, useEffect } from "react";
import Admin from "./Admin";
import Navigation from "../Navigation";
import Footer from "../Footer";
import Example from "../buttons/CreateCategory";
import { motion } from "framer-motion";

interface Blog {
  id: string;
  _id: string;
  status: string;
  createdAt: string;
  title: string;
}

const AdminPanel = () => {
  const [blogData, setBlogData] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "pending" | "approved" | "rejected">(
    "all"
  );

  const fetchBlogs = async () => {
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

  useEffect(() => {
    fetchBlogs();
  }, []);

  const counts = blogData.reduce(
    (acc, b) => {
      const s = (b.status || "").toLowerCase();
      if (s === "approved" || s === "published") acc.approved += 1;
      else if (s === "disapproved" || s === "rejected") acc.rejected += 1;
      else acc.pending += 1;
      return acc;
    },
    { approved: 0, rejected: 0, pending: 0 }
  );
  const total = blogData.length;

  const filtered = blogData.filter((b) => {
    if (filter === "all") return true;
    const s = (b.status || "").toLowerCase();
    if (filter === "approved") return s === "approved" || s === "published";
    if (filter === "rejected") return s === "disapproved" || s === "rejected";
    return !(
      s === "approved" ||
      s === "published" ||
      s === "disapproved" ||
      s === "rejected"
    );
  });

  const pad = (n: number, w = 3) => String(n).padStart(w, " ");

  return (
    <main className="bg-ink text-paper min-h-screen">
      <Navigation />

      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-24">
          {/* Meta line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="flex items-center gap-3 mb-10 font-mono text-[0.7rem] tracking-label text-paper-3 uppercase"
          >
            <span className="text-accent">●</span>
            <span>Admin / Console</span>
            <span className="flex-1 border-t border-rule" />
            <span className="hidden md:inline">
              {new Date().toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </motion.div>

          {/* Title row */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <h1 className="font-display text-paper text-[clamp(2rem,5vw,3.25rem)] leading-[1.0] tracking-[-0.035em]">
                Editorial review
              </h1>
              <p className="mt-3 text-paper-2 max-w-xl leading-relaxed">
                Approve or reject submissions to the queue. Decisions are
                visible at <span className="text-accent">/blogs</span> immediately.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22, ease: "easeOut", delay: 0.04 }}
              className="flex items-center gap-3"
            >
              <button
                onClick={fetchBlogs}
                className="group inline-flex items-center gap-2 border border-rule text-paper-2 px-4 py-2.5 hover:border-paper-3 hover:bg-ink-2 hover:text-paper transition-colors duration-200"
              >
                <span className="font-mono text-[0.7rem] text-paper-3 group-hover:text-accent">
                  [
                </span>
                <span className="text-sm">Refresh</span>
                <span className="font-mono text-[0.7rem] text-paper-3 group-hover:text-accent">
                  ]
                </span>
              </button>
              <Example />
            </motion.div>
          </div>

          {/* Spec block: stats */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, ease: "easeOut", delay: 0.08 }}
            className="mb-12 overflow-x-auto"
          >
            <pre className="font-mono text-[0.75rem] text-paper-3 leading-relaxed select-none whitespace-pre min-w-fit">
{`┌─ system ─────────────────────────────────────────────────────────────
│  total      ${pad(total)}  │  pending   ${pad(counts.pending)}  │  approved  ${pad(counts.approved)}  │  rejected  ${pad(counts.rejected)}
└──────────────────────────────────────────────────────────────────────`}
            </pre>
          </motion.div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1 mb-6 flex-wrap">
            {(["all", "pending", "approved", "rejected"] as const).map((f) => {
              const active = filter === f;
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`group inline-flex items-baseline gap-2 px-3 py-2 transition-colors duration-200 ${
                    active
                      ? "text-paper border-b border-accent"
                      : "text-paper-2 hover:text-paper border-b border-transparent"
                  }`}
                >
                  <span
                    className={`font-mono text-[0.65rem] ${
                      active ? "text-accent" : "text-paper-3"
                    }`}
                  >
                    {f === "all"
                      ? "00"
                      : f === "pending"
                      ? "01"
                      : f === "approved"
                      ? "02"
                      : "03"}
                  </span>
                  <span className="text-sm capitalize">{f}</span>
                  <span className="font-mono text-[0.65rem] text-paper-3">
                    (
                    {f === "all"
                      ? total
                      : f === "pending"
                      ? counts.pending
                      : f === "approved"
                      ? counts.approved
                      : counts.rejected}
                    )
                  </span>
                </button>
              );
            })}
          </div>

          {/* Table */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, ease: "easeOut", delay: 0.12 }}
            className="border border-rule bg-ink"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="py-3 px-4 label text-left">Status</th>
                    <th className="py-3 px-4 label text-left">Date</th>
                    <th className="py-3 px-4 label text-left">Title</th>
                    <th className="py-3 px-4 label text-left hidden md:table-cell">
                      Id
                    </th>
                    <th className="py-3 px-4 label text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? (
                    [...Array(5)].map((_, i) => (
                      <tr key={i} className="border-t border-rule">
                        <td className="p-4">
                          <div className="h-3 w-16 bg-rule animate-pulse" />
                        </td>
                        <td className="p-4">
                          <div className="h-3 w-24 bg-rule animate-pulse" />
                        </td>
                        <td className="p-4">
                          <div className="h-3 w-64 bg-rule animate-pulse" />
                        </td>
                        <td className="p-4 hidden md:table-cell">
                          <div className="h-3 w-12 bg-rule animate-pulse" />
                        </td>
                        <td className="p-4">
                          <div className="h-3 w-24 bg-rule animate-pulse ml-auto" />
                        </td>
                      </tr>
                    ))
                  ) : filtered.length > 0 ? (
                    filtered.map((blog) => (
                      <Admin key={blog.id || blog._id} blog={blog} />
                    ))
                  ) : (
                    <tr className="border-t border-rule">
                      <td
                        colSpan={5}
                        className="py-16 px-6 text-center font-mono text-sm text-paper-3"
                      >
                        // queue is empty — no submissions to review
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Footer note */}
          <p className="mt-6 font-mono text-[0.7rem] tracking-label text-paper-3 uppercase">
            Actions are immediate · approved pieces are public
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AdminPanel;
