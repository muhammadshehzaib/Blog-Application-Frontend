"use client";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Navigation from "../Navigation";
import Footer from "../Footer";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import { motion } from "framer-motion";

interface FormData {
  title: string;
  content: string;
  image: File | null;
  category: string;
}

interface Category {
  _id: string;
  category: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.22, ease: [0.2, 0.65, 0.2, 1] as [number, number, number, number] },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.04 } },
};

const CreateBlog: React.FC = () => {
  const { isAuthenticated, token } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    title: "",
    content: "",
    image: null,
    category: "",
  });
  const [categories, setCategories] = useState<Category[]>([]);
  const [now, setNow] = useState<string>("");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const hh = String(d.getHours()).padStart(2, "0");
      const mm = String(d.getMinutes()).padStart(2, "0");
      setNow(`${hh}:${mm}`);
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "content" ? String(value) : value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: file || null,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isAuthenticated) {
      try {
        const data = new FormData();
        data.append("file", formData.image as File);
        data.append("title", formData.title);
        data.append("content", formData.content);
        data.append("category", formData.category);

        const response = await fetch(`${process.env.DEPLOYMENTLINK}/blogs`, {
          method: "POST",
          headers: {
            authorization: `bearer ${token}`,
          },
          body: data,
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Blog Cannot be added", errorData);
          return;
        }

        const responseData = await response.json();
        console.log("Blog Created Successfully", responseData);
        setFormData({
          title: "",
          content: "",
          image: null,
          category: "",
        });
        router.push(`/blogs`);
      } catch (error: any) {
        console.error("Blog not Created:", error.message);
      }
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        `${process.env.DEPLOYMENTLINK}/blogscategories`,
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Category Cannot be added", errorData);
        return;
      }

      const responseData = await response.json();
      setCategories(responseData);
      console.log("Categories Fetched Successfully", responseData);
    } catch (error: any) {
      console.error("Categories not Fetched:", error.message);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const wordCount = formData.content.trim()
    ? formData.content.trim().split(/\s+/).length
    : 0;
  const charCount = formData.content.length;
  const readMin = Math.max(1, Math.round(wordCount / 220));

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
            <span>Draft</span>
            <span className="text-rule">·</span>
            <span>auto-saving</span>
            <span className="text-rule">·</span>
            <span>{now || "--:--"}</span>
            <span className="flex-1 border-t border-rule" />
            <span className="hidden md:inline">composer / new</span>
          </motion.div>

          {/* Section header */}
          <div className="flex items-baseline gap-4 mb-12">
            <span className="font-mono text-paper-3 text-[0.7rem] tracking-label">
              § 01
            </span>
            <span className="label">Compose</span>
            <span className="flex-1 border-t border-rule translate-y-[-2px]" />
            <span className="font-mono text-paper-3 text-[0.7rem] tracking-label hidden md:inline">
              new essay
            </span>
          </div>

          <form onSubmit={handleSubmit}>
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 lg:grid-cols-12 gap-10"
            >
              {/* LEFT: Composer */}
              <div className="lg:col-span-8">
                {/* Tagline / kicker */}
                <motion.div variants={fadeUp}>
                  <span className="font-mono text-xs text-paper-3 block mb-3">
                    &gt; title
                  </span>
                </motion.div>

                {/* Title input — Fraunces, large, transparent */}
                <motion.div variants={fadeUp}>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    placeholder="An untitled piece"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-transparent border-0 border-b border-rule focus:border-accent text-paper font-display text-[clamp(1.75rem,4.5vw,3.25rem)] leading-[1.05] tracking-[-0.03em] py-3 px-0 placeholder:text-paper-3/60 outline-none transition-colors"
                  />
                </motion.div>

                {/* Byline + meta */}
                <motion.div
                  variants={fadeUp}
                  className="mt-4 flex items-baseline gap-3 font-mono text-[0.7rem] tracking-label text-paper-3 uppercase"
                >
                  <span>by you</span>
                  <span className="text-rule">/</span>
                  <span>{wordCount} words</span>
                  <span className="text-rule">/</span>
                  <span>{readMin} min read</span>
                </motion.div>

                {/* Body */}
                <motion.div variants={fadeUp} className="mt-10">
                  <span className="font-mono text-xs text-paper-3 block mb-2">
                    &gt; body
                  </span>
                  <textarea
                    id="content"
                    name="content"
                    placeholder="Start writing. The page is yours."
                    value={formData.content}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-transparent border-0 border-b border-rule focus:border-accent text-paper font-sans text-[1.0625rem] leading-[1.7] py-3 px-0 min-h-[420px] resize-y placeholder:text-paper-3/60 outline-none transition-colors"
                  />
                  <div className="mt-3 flex items-baseline gap-3 font-mono text-[0.7rem] tracking-label text-paper-3 uppercase">
                    <span>{charCount} chars</span>
                    <span className="text-rule">·</span>
                    <span>plain text · markdown ok</span>
                  </div>
                </motion.div>
              </div>

              {/* RIGHT: Sidebar */}
              <div className="lg:col-span-4 lg:pl-8 lg:border-l lg:border-rule">
                <motion.div variants={fadeUp} className="mb-10">
                  <p className="label mb-5">// metadata</p>

                  {/* Category */}
                  <div className="mb-8">
                    <span className="font-mono text-xs text-paper-3 block mb-2">
                      &gt; category
                    </span>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-transparent border-0 border-b border-rule focus:border-accent text-paper font-mono text-sm py-2 px-0 outline-none transition-colors appearance-none"
                    >
                      <option value="" disabled className="bg-ink text-paper-3">
                        select one
                      </option>
                      {categories.map((category) => (
                        <option
                          key={category._id}
                          value={category._id}
                          className="bg-ink text-paper"
                        >
                          {category.category}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Image upload — framed with ascii corners */}
                  <div className="mb-8">
                    <span className="font-mono text-xs text-paper-3 block mb-2">
                      &gt; cover image
                    </span>
                    <div className="ascii-frame border border-rule bg-ink-2 p-5">
                      <label
                        htmlFor="image"
                        className="block cursor-pointer text-center"
                      >
                        <span className="font-mono text-[0.7rem] tracking-label text-paper-3 uppercase block mb-2">
                          {formData.image ? "[ replace file ]" : "[ choose file ]"}
                        </span>
                        <span className="font-mono text-xs text-paper-2 block break-all">
                          {formData.image
                            ? formData.image.name
                            : "no file selected"}
                        </span>
                      </label>
                      <input
                        id="image"
                        name="image"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        required
                        className="sr-only"
                      />
                    </div>
                    {formData.image && (
                      <p className="mt-3 font-mono text-[0.7rem] tracking-label text-paper-3 uppercase">
                        {(formData.image.size / 1024).toFixed(1)} kb
                      </p>
                    )}
                  </div>
                </motion.div>

                {/* Spec block */}
                <motion.div variants={fadeUp} className="mb-10">
                  <pre className="font-mono text-[0.7rem] text-paper-3 leading-relaxed select-none whitespace-pre">
{`┌─ status ───────────────────
│  state    draft
│  visible  no
│  format   essay / longform
└────────────────────────────`}
                  </pre>
                </motion.div>

                {/* Submit + reset */}
                <motion.div
                  variants={fadeUp}
                  className="flex flex-col gap-3"
                >
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-3 bg-accent text-ink px-6 py-3.5 hover:bg-paper transition-colors duration-200 ease-out"
                  >
                    <span className="font-mono text-xs opacity-70">▸</span>
                    <span className="font-medium text-sm">Publish essay</span>
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setFormData({
                        title: "",
                        content: "",
                        image: null,
                        category: "",
                      })
                    }
                    className="group inline-flex items-center justify-center gap-2 border border-rule text-paper-2 px-6 py-3 hover:border-paper-3 hover:bg-ink-2 hover:text-paper transition-colors duration-200 ease-out"
                  >
                    <span className="font-mono text-[0.7rem] text-paper-3">
                      [
                    </span>
                    <span className="text-sm">Clear draft</span>
                    <span className="font-mono text-[0.7rem] text-paper-3">
                      ]
                    </span>
                  </button>
                  <p className="font-mono text-[0.7rem] tracking-label text-paper-3 uppercase mt-2">
                    Submits to review queue · approved pieces appear in /blogs
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CreateBlog;
