"use client";
import React, { useState, useEffect } from "react";
import useAuth from "@/hooks/useAuth";
import useBlogSocket from "@/hooks/useBlogSocket";
import useBlogAi from "@/hooks/useBlogAi";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Comments from "./Comments";
import Reactions from "./reactions/Reactions";
import Navigation from "../Navigation";
import Footer from "../Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

interface Blog {
  _id: string;
  title: string;
  content: string;
  image: string;
  reactions: { reactions: string }[];
  comments: { id: string; comment: string }[];
  createdAt?: string;
  author?: string;
  category?: { category: string };
}

interface BlogIdProps {
  blog: string;
}

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

const BlogId: React.FC<BlogIdProps> = ({ blog }) => {
  const router = useRouter();
  const { token, userId } = useAuth();
  const [comments, setComments] = useState<string>("");
  const [reactions, setReactions] = useState<string | null>(null);
  const [blogs, setBlogs] = useState<Blog | null>(null);
  const { liveComments, counts, typingNames, notifyTyping } = useBlogSocket(
    blog,
    token,
  );
  const {
    related,
    summary,
    suggestions,
    loadingSummary,
    loadingTags,
    error: aiError,
    fetchSummary,
    fetchTags,
  } = useBlogAi(blog, token);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.DEPLOYMENTLINK}/blogs/${blog}`,
      );
      const data: Blog = await response.json();

      if (!response.ok) {
        throw new Error("Failed to fetch blog data");
      }
      setBlogs(data);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const handleComment = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token) {
      toast.warn("Please sign in to leave a comment.");
      router.push("/signin");
      return;
    }

    if (!comments.trim()) {
      toast.warn("Write something before posting.");
      return;
    }

    try {
      const response = await fetch(`${process.env.DEPLOYMENTLINK}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${token}`,
        },
        body: JSON.stringify({ comment: comments, blog: blog }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        toast.error(errorData?.message || "Could not post your comment.");
        return;
      }

      setComments("");
      toast.success("Comment posted.");
    } catch (error: any) {
      toast.error("Network error, please try again.");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setComments(value);
    notifyTyping();
  };

  const handleReactionSelected = async (reaction: string) => {
    if (!token) {
      toast.warn("Please sign in to react to this post.");
      router.push("/signin");
      return;
    }

    try {
      const response = await fetch(`${process.env.DEPLOYMENTLINK}/reactions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${token}`,
        },
        body: JSON.stringify({ reactions: [reaction], blogId: blog }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        toast.error(errorData?.message || "Could not save your reaction.");
        return;
      }

      const responseData = await response.json();
      setReactions(responseData);
    } catch (error: any) {
      toast.error("Network error, please try again.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalComments =
    (blogs?.comments?.length ?? 0) + (liveComments?.length ?? 0);
  const totalReactions = counts
    ? Object.values(counts).reduce((a, b) => a + b, 0)
    : 0;

  const wordCount = blogs?.content
    ? blogs.content.trim().split(/\s+/).filter(Boolean).length
    : 0;
  const readMinutes = Math.max(1, Math.round(wordCount / 220));

  const dateStr = blogs?.createdAt
    ? new Date(blogs.createdAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "";

  return (
    <main className="bg-ink text-paper min-h-screen">
      <Navigation />

      {blogs ? (
        <motion.article
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          {/* ─────────── HEADER ─────────── */}
          <header className="border-b border-rule">
            <div className="max-w-3xl mx-auto px-6 lg:px-10 pt-16 pb-12">
              <motion.div
                variants={fadeUp}
                className="flex items-center gap-3 mb-10 font-mono text-[0.7rem] tracking-label uppercase text-paper-3"
              >
                <Link
                  href="/blogs"
                  className="hover:text-accent transition-colors inline-flex items-center gap-1.5"
                >
                  <span>←</span>
                  <span>archive</span>
                </Link>
                <span className="text-rule">/</span>
                <span>{blogs.category?.category || "essay"}</span>
                <span className="flex-1 border-t border-rule" />
                {dateStr && <span className="hidden md:inline">{dateStr}</span>}
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-display text-paper text-[clamp(2.25rem,5.5vw,4rem)] leading-[1.0] tracking-[-0.035em] text-balance"
              >
                {blogs.title}
              </motion.h1>

              <motion.div
                variants={fadeUp}
                className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[0.7rem] tracking-label uppercase text-paper-3 pb-1"
              >
                <span className="inline-flex items-center gap-2">
                  <span className="text-accent">▎</span>
                  <span>
                    by{" "}
                    <span className="text-paper">
                      {blogs.author || "anon"}
                    </span>
                  </span>
                </span>
                <span className="text-rule">·</span>
                <span>{readMinutes} min read</span>
                <span className="text-rule">·</span>
                <span>{wordCount} words</span>
              </motion.div>
            </div>
          </header>

          {/* ─────────── HERO IMAGE ─────────── */}
          {blogs.image && (
            <motion.div
              variants={fadeUp}
              className="border-b border-rule bg-ink-2"
            >
              <div className="max-w-6xl mx-auto">
                <Image
                  src={blogs.image}
                  alt={blogs.title}
                  width={1600}
                  height={900}
                  className="w-full h-auto max-h-[70vh] object-cover"
                />
              </div>
            </motion.div>
          )}

          {/* ─────────── BODY ─────────── */}
          <section className="border-b border-rule">
            <div className="max-w-3xl mx-auto px-6 lg:px-10 py-20">
              <motion.div
                variants={fadeUp}
                className="font-display text-paper text-[1.2rem] md:text-[1.25rem] leading-[1.7] tracking-[-0.005em] whitespace-pre-wrap"
              >
                {blogs.content}
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-16 pt-8 border-t border-rule font-mono text-[0.7rem] tracking-label uppercase text-paper-3 flex items-center gap-3"
              >
                <span className="text-accent">●</span>
                <span>end of piece</span>
                <span className="flex-1 border-t border-rule" />
                <span className="hidden md:inline">{dateStr}</span>
              </motion.div>
            </div>
          </section>

          {/* ─────────── AI TOOLS ─────────── */}
          <section className="border-b border-rule">
            <div className="max-w-3xl mx-auto px-6 lg:px-10 py-14">
              <div className="flex items-baseline gap-4 mb-8">
                <span className="font-mono text-paper-3 text-[0.7rem] tracking-label">
                  §
                </span>
                <span className="label">AI assistant</span>
                <span className="flex-1 border-t border-rule translate-y-[-2px]" />
                <span className="font-mono text-paper-3 text-[0.7rem] tracking-label hidden md:inline">
                  powered by AI
                </span>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <button
                  type="button"
                  onClick={fetchSummary}
                  disabled={loadingSummary}
                  className="inline-flex items-center gap-2 border border-rule text-paper-2 px-5 py-2.5 hover:border-accent hover:text-paper transition-colors disabled:opacity-50 font-mono text-sm"
                >
                  <span className="text-accent">▸</span>
                  {loadingSummary ? "summarizing…" : "Summarize this post"}
                </button>
                <button
                  type="button"
                  onClick={fetchTags}
                  disabled={loadingTags}
                  className="inline-flex items-center gap-2 border border-rule text-paper-2 px-5 py-2.5 hover:border-accent hover:text-paper transition-colors disabled:opacity-50 font-mono text-sm"
                >
                  <span className="text-accent">▸</span>
                  {loadingTags ? "thinking…" : "Suggest categories"}
                </button>
              </div>

              {aiError && (
                <p className="font-mono text-xs text-red-400 mb-4">
                  ✗ {aiError}
                </p>
              )}

              {summary && (
                <div className="border border-rule bg-ink-2 p-6 mb-4">
                  <p className="font-mono text-[0.7rem] tracking-label uppercase text-paper-3 mb-3">
                    ▸ TL;DR
                  </p>
                  <p className="text-paper-2 leading-relaxed">{summary}</p>
                </div>
              )}

              {suggestions && (
                <div className="border border-rule bg-ink-2 p-6">
                  <p className="font-mono text-[0.7rem] tracking-label uppercase text-paper-3 mb-3">
                    ▸ suggested categories
                  </p>
                  {suggestions.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {suggestions.map((s) => (
                        <span
                          key={s}
                          className="font-mono text-sm px-3 py-1 border border-rule rounded-full text-paper"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="font-mono text-sm text-paper-3">
                      // no confident matches
                    </p>
                  )}
                </div>
              )}
            </div>
          </section>

          {/* ─────────── REACTIONS ─────────── */}
          <section className="border-b border-rule">
            <div className="max-w-3xl mx-auto px-6 lg:px-10 py-14">
              <div className="flex items-baseline gap-4 mb-8">
                <span className="font-mono text-paper-3 text-[0.7rem] tracking-label">
                  §
                </span>
                <span className="label">React</span>
                <span className="flex-1 border-t border-rule translate-y-[-2px]" />
                <span className="font-mono text-paper-3 text-[0.7rem] tracking-label hidden md:inline">
                  {totalReactions} total
                </span>
              </div>

              {counts && Object.keys(counts).length > 0 && (
                <div className="mb-6 font-mono text-[0.75rem] text-paper-3 leading-relaxed">
                  <pre className="whitespace-pre-wrap">
                    {Object.entries(counts)
                      .map(
                        ([type, count]) =>
                          `›  ${type.padEnd(10, " ")}  ${String(count).padStart(3, " ")}`,
                      )
                      .join("\n")}
                  </pre>
                </div>
              )}

              <div className="border border-rule bg-ink-2 p-6">
                <Reactions onReactionSelected={handleReactionSelected} />
              </div>
            </div>
          </section>

          {/* ─────────── COMMENTS ─────────── */}
          <section>
            <div className="max-w-3xl mx-auto px-6 lg:px-10 py-14">
              <div className="flex items-baseline gap-4 mb-8">
                <span className="font-mono text-paper-3 text-[0.7rem] tracking-label">
                  §
                </span>
                <span className="label">Thread</span>
                <span className="flex-1 border-t border-rule translate-y-[-2px]" />
                <span className="font-mono text-paper-3 text-[0.7rem] tracking-label hidden md:inline-flex items-center gap-2">
                  <span className="text-accent">●</span>
                  <span>{totalComments} live</span>
                </span>
              </div>

              {/* Add comment form — terminal input */}
              <form onSubmit={handleComment} className="mb-12">
                <label className="block">
                  <span className="font-mono text-xs text-paper-3 block mb-2">
                    &gt; write a reply
                  </span>
                  <div className="flex items-center gap-3 border-b border-rule focus-within:border-accent transition-colors">
                    <span className="font-mono text-paper-3 text-sm select-none">
                      ›
                    </span>
                    <input
                      type="text"
                      value={comments}
                      onChange={handleInputChange}
                      placeholder="type your comment"
                      className="flex-1 bg-transparent border-0 text-paper py-2 px-0 font-mono text-sm placeholder:text-paper-3/60 outline-none"
                    />
                  </div>
                  <div className="font-mono text-[0.7rem] text-paper-3 mt-2 h-4">
                    {typingNames.length > 0 && (
                      <span>
                        ▸ {typingNames.join(", ")}{" "}
                        {typingNames.length === 1 ? "is" : "are"} typing
                        <span className="animate-pulse">…</span>
                      </span>
                    )}
                  </div>
                </label>
                <button
                  type="submit"
                  className="group mt-5 inline-flex items-center gap-2 border border-paper text-paper px-5 py-2.5 hover:bg-paper hover:text-ink transition-colors"
                >
                  <span className="font-mono text-[0.7rem] opacity-60 group-hover:opacity-100">
                    [
                  </span>
                  <span className="text-sm">Post comment</span>
                  <span className="font-mono text-[0.7rem] opacity-60 group-hover:opacity-100">
                    ]
                  </span>
                </button>
              </form>

              {/* Thread */}
              <div className="space-y-1">
                {totalComments > 0 ? (
                  [...(blogs?.comments ?? []), ...liveComments].map(
                    (comment: any, idx) => {
                      const ownerId =
                        typeof comment.userId === "object"
                          ? comment.userId?._id
                          : comment.userId;
                      return (
                        <Comments
                          key={comment._id ?? comment.id ?? idx}
                          comment={comment.comment}
                          commentId={comment._id ?? comment.id}
                          commentUserId={ownerId}
                          currentUserId={userId}
                          token={token}
                          blogId={blog}
                        />
                      );
                    },
                  )
                ) : (
                  <div className="border border-rule p-10 text-center font-mono text-sm text-paper-3">
                    <p>// no replies yet</p>
                    <p className="mt-2 text-paper-3/70">
                      ▸ be the first to weigh in
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* ─────────── RELATED POSTS ─────────── */}
          {related.length > 0 && (
            <section className="border-t border-rule">
              <div className="max-w-3xl mx-auto px-6 lg:px-10 py-14">
                <div className="flex items-baseline gap-4 mb-8">
                  <span className="font-mono text-paper-3 text-[0.7rem] tracking-label">
                    §
                  </span>
                  <span className="label">Related</span>
                  <span className="flex-1 border-t border-rule translate-y-[-2px]" />
                  <span className="font-mono text-paper-3 text-[0.7rem] tracking-label hidden md:inline">
                    by meaning
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {related.map((r) => (
                    <Link
                      key={r._id}
                      href={`/blogs/${r._id}`}
                      className="group border border-rule bg-ink-2 hover:border-accent transition-colors overflow-hidden"
                    >
                      {r.image && (
                        <div className="relative h-32 overflow-hidden">
                          <Image
                            src={r.image}
                            alt={r.title}
                            width={600}
                            height={300}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="p-4">
                        <p className="font-mono text-[0.65rem] tracking-label uppercase text-paper-3 mb-2">
                          {r.category?.category || "essay"}
                        </p>
                        <p className="font-display text-paper text-lg leading-snug group-hover:text-accent transition-colors">
                          {r.title}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}
        </motion.article>
      ) : (
        <div className="max-w-3xl mx-auto px-6 lg:px-10 py-32">
          <div className="font-mono text-sm text-paper-3 animate-pulse">
            <p>› loading piece…</p>
            <div className="mt-8 space-y-3">
              <div className="h-10 bg-rule max-w-md" />
              <div className="h-10 bg-rule max-w-sm" />
              <div className="h-3 bg-rule max-w-xs mt-6" />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
};

export default BlogId;
