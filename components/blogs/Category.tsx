"use client";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Navigation from "../Navigation";
import Footer from "../Footer";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface FormData {
  category: string;
}

interface CategoryItem {
  _id: string;
  category: string;
  createdAt?: string;
}

const Category = () => {
  const [formData, setFormData] = useState<FormData>({
    category: "",
  });
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState("");
  const [actionError, setActionError] = useState<string | null>(null);
  const { isAuthenticated, token } = useAuth();
  const router = useRouter();

  const startEdit = async (id: string) => {
    setActionError(null);
    try {
      const res = await fetch(
        `${process.env.DEPLOYMENTLINK}/blogscategories/${id}`,
      );
      const data = await res.json();
      setEditingId(id);
      setEditValue(data.category ?? "");
    } catch {
      setActionError("Could not load category.");
    }
  };

  const saveEdit = async (id: string) => {
    try {
      const res = await fetch(
        `${process.env.DEPLOYMENTLINK}/blogscategories/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${token}`,
          },
          body: JSON.stringify({ category: editValue }),
        },
      );
      if (!res.ok) throw new Error(`Update failed (${res.status})`);
      setCategories((prev) =>
        prev.map((c) =>
          c._id === id ? { ...c, category: editValue } : c,
        ),
      );
      setEditingId(null);
    } catch (e: any) {
      setActionError(e.message);
    }
  };

  const deleteCategory = async (id: string) => {
    if (!confirm("Delete this category?")) return;
    try {
      const res = await fetch(
        `${process.env.DEPLOYMENTLINK}/blogscategories/${id}`,
        {
          method: "DELETE",
          headers: { authorization: `bearer ${token}` },
        },
      );
      if (!res.ok) throw new Error(`Delete failed (${res.status})`);
      setCategories((prev) => prev.filter((c) => c._id !== id));
    } catch (e: any) {
      setActionError(e.message);
    }
  };

  const fetchCategories = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${process.env.DEPLOYMENTLINK}/blogscategories`,
        { method: "GET" }
      );
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Categories cannot be fetched", errorData);
        return;
      }
      const data = await response.json();
      setCategories(Array.isArray(data) ? data : []);
    } catch (error: any) {
      console.error("Categories not fetched:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isAuthenticated) {
      try {
        const response = await fetch(
          `${process.env.DEPLOYMENTLINK}/blogscategories`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              authorization: `bearer ${token}`,
            },
            body: JSON.stringify({ category: formData.category }),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Category Cannot be added", errorData);
          return;
        }

        const responseData = await response.json();
        console.log("Category Created Successfully", responseData);
        setFormData({
          category: "",
        });
        router.push(`/admin`);
      } catch (error: any) {
        console.error("Blog not Created:", error.message);
      }
    }
  };

  const pad = (n: number, w = 3) => String(n).padStart(w, " ");

  return (
    <main className="bg-ink text-paper min-h-screen">
      <Navigation />

      <section className="relative">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 pt-16 pb-24">
          {/* Meta line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="flex items-center gap-3 mb-10 font-mono text-[0.7rem] tracking-label text-paper-3 uppercase"
          >
            <span className="text-accent">●</span>
            <span>Admin / Taxonomy</span>
            <span className="flex-1 border-t border-rule" />
            <span className="hidden md:inline">categories</span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="mb-12"
          >
            <h1 className="font-display text-paper text-[clamp(2rem,5vw,3.25rem)] leading-[1.0] tracking-[-0.035em]">
              Categories
            </h1>
            <p className="mt-3 text-paper-2 max-w-xl leading-relaxed">
              Taxonomy for articles. Keep names short — one or two words is the
              house style.
            </p>
          </motion.div>

          {/* Section: list */}
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-mono text-paper-3 text-[0.7rem] tracking-label">
              § 01
            </span>
            <span className="label">Existing</span>
            <span className="flex-1 border-t border-rule translate-y-[-2px]" />
            <span className="font-mono text-paper-3 text-[0.7rem] tracking-label hidden md:inline">
              {pad(categories.length)} total
            </span>
          </div>

          {actionError && (
            <p className="font-mono text-xs text-red-400 mb-3">
              ✗ {actionError}
            </p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, ease: "easeOut", delay: 0.04 }}
            className="border border-rule bg-ink mb-20"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse font-mono">
                <thead>
                  <tr>
                    <th className="py-3 px-4 label text-left w-[60px]">#</th>
                    <th className="py-3 px-4 label text-left">Name</th>
                    <th className="py-3 px-4 label text-left hidden md:table-cell">
                      Id
                    </th>
                    <th className="py-3 px-4 label text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? (
                    [...Array(4)].map((_, i) => (
                      <tr key={i} className="border-t border-rule">
                        <td className="p-4">
                          <div className="h-3 w-6 bg-rule animate-pulse" />
                        </td>
                        <td className="p-4">
                          <div className="h-3 w-40 bg-rule animate-pulse" />
                        </td>
                        <td className="p-4 hidden md:table-cell">
                          <div className="h-3 w-24 bg-rule animate-pulse" />
                        </td>
                      </tr>
                    ))
                  ) : categories.length > 0 ? (
                    categories.map((c, i) => (
                      <motion.tr
                        key={c._id}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.2,
                          ease: "easeOut",
                          delay: Math.min(i * 0.04, 0.4),
                        }}
                        className="group border-t border-rule hover:bg-ink-2 transition-colors duration-200"
                      >
                        <td className="py-3 px-4 text-[0.7rem] tracking-label text-paper-3 uppercase align-middle">
                          {String(i + 1).padStart(2, "0")}
                        </td>
                        <td className="py-3 px-4 align-middle">
                          {editingId === c._id ? (
                            <input
                              value={editValue}
                              onChange={(e) => setEditValue(e.target.value)}
                              className="bg-transparent border-b border-accent text-paper font-mono text-sm py-1 outline-none"
                            />
                          ) : (
                            <span className="font-sans text-paper text-sm group-hover:text-accent transition-colors">
                              {c.category}
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-4 align-middle hidden md:table-cell text-[0.7rem] tracking-label text-paper-3 uppercase">
                          #{c._id.slice(-8)}
                        </td>
                        <td className="py-3 px-4 align-middle text-right whitespace-nowrap">
                          {editingId === c._id ? (
                            <>
                              <button
                                onClick={() => saveEdit(c._id)}
                                className="font-mono text-xs text-accent hover:underline mr-3"
                              >
                                save
                              </button>
                              <button
                                onClick={() => setEditingId(null)}
                                className="font-mono text-xs text-paper-3 hover:text-paper"
                              >
                                cancel
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                onClick={() => startEdit(c._id)}
                                className="font-mono text-xs text-paper-2 hover:text-accent mr-3"
                              >
                                edit
                              </button>
                              <button
                                onClick={() => deleteCategory(c._id)}
                                className="font-mono text-xs text-paper-2 hover:text-red-400"
                              >
                                delete
                              </button>
                            </>
                          )}
                        </td>
                      </motion.tr>
                    ))
                  ) : (
                    <tr className="border-t border-rule">
                      <td
                        colSpan={4}
                        className="py-16 px-6 text-center font-mono text-sm text-paper-3"
                      >
                        // no categories yet — create the first below
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Section: create */}
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-mono text-paper-3 text-[0.7rem] tracking-label">
              § 02
            </span>
            <span className="label">Create</span>
            <span className="flex-1 border-t border-rule translate-y-[-2px]" />
            <span className="font-mono text-paper-3 text-[0.7rem] tracking-label hidden md:inline">
              new entry
            </span>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, ease: "easeOut", delay: 0.08 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8"
          >
            <div className="md:col-span-8">
              <label htmlFor="category">
                <span className="font-mono text-xs text-paper-3 block mb-2">
                  &gt; name
                </span>
                <input
                  id="category"
                  name="category"
                  type="text"
                  placeholder="e.g. technology"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-transparent border-0 border-b border-rule focus:border-accent text-paper font-mono text-base py-3 px-0 placeholder:text-paper-3/60 outline-none transition-colors"
                />
              </label>
              <p className="mt-3 font-mono text-[0.7rem] tracking-label text-paper-3 uppercase">
                lowercase · no punctuation · &lt;= 24 chars
              </p>
            </div>

            <div className="md:col-span-4 flex md:items-end">
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-3 bg-accent text-ink px-6 py-3 w-full md:w-auto hover:bg-paper transition-colors duration-200 ease-out"
              >
                <span className="font-mono text-xs opacity-70">▸</span>
                <span className="font-medium text-sm">Add category</span>
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Category;
