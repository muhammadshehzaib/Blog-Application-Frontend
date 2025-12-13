"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Navigation from "../Navigation";
import Footer from "../Footer";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface FormData {
  category: string;
}

const Category = () => {
  const [formData, setFormData] = useState<FormData>({
    category: "",
  });
  const { isAuthenticated, token } = useAuth();
  const router = useRouter();

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
        // Keeping your existing FormData logic
        const data = new FormData();
        data.append("category", formData.category);

        const response = await fetch(
          `${process.env.DEPLOYMENTLINK}/blogscategories`,
          {
            method: "POST",
            headers: {
              authorization: `bearer ${token}`,
            },
            body: data,
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

  return (
    <div className="relative bg-black text-white min-h-screen overflow-hidden">
      {/* --- Background Effects --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]"></div>

      {/* Floating Orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 30, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
      />

      <Navigation />

      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-100px)] px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {/* Card Container */}
          <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
            {/* Gradient Top Border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500"></div>

            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 mb-4 border border-emerald-500/20">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">New Category</h2>
              <p className="text-zinc-500 text-sm mt-2">
                Organize your articles efficiently
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  className="block text-sm font-medium text-zinc-300 mb-2"
                  htmlFor="category"
                >
                  Category Name
                </label>
                <div className="relative group">
                  <input
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300"
                    id="category"
                    name="category"
                    type="text"
                    placeholder="e.g., Technology, Lifestyle..."
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                  />
                  {/* Subtle glow effect on hover/focus */}
                  <div className="absolute inset-0 rounded-xl bg-emerald-500/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 px-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black font-bold rounded-xl shadow-lg shadow-emerald-500/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Add Category</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Category;