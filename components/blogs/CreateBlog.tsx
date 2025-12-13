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

  return (
    <div className="relative bg-black text-white min-h-screen overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]"></div>

      {/* Floating Gradient Orbs */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
      />

      <Navigation />

      <div className="relative z-10 flex items-center justify-center min-h-screen pt-32 pb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-3xl"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500"
            >
              <svg
                className="w-8 h-8 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              Create Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400">
                Story
              </span>
            </h1>
            <p className="text-zinc-400 text-lg">
              Share your thoughts and ideas with the world
            </p>
          </div>

          {/* Form Card */}
          <div className="relative bg-zinc-950 border border-zinc-900 rounded-3xl p-8 md:p-10 overflow-hidden">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-blue-500/5 to-purple-500/5"></div>

            <form onSubmit={handleSubmit} className="relative space-y-6">
              {/* Title Input */}
              <div>
                <label
                  className="block text-sm font-medium text-zinc-300 mb-2"
                  htmlFor="title"
                >
                  Title
                </label>
                <input
                  className="w-full px-4 py-3 border border-zinc-800 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-zinc-900 text-white placeholder-zinc-500 transition-all duration-300"
                  id="title"
                  name="title"
                  type="text"
                  placeholder="Enter your blog title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Content Textarea */}
              <div>
                <label
                  className="block text-sm font-medium text-zinc-300 mb-2"
                  htmlFor="content"
                >
                  Content
                </label>
                <textarea
                  className="w-full px-4 py-3 border border-zinc-800 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-zinc-900 text-white placeholder-zinc-500 transition-all duration-300 min-h-[200px] resize-y"
                  id="content"
                  name="content"
                  placeholder="Write your story here..."
                  value={formData.content}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Category Select */}
              <div>
                <label
                  className="block text-sm font-medium text-zinc-300 mb-2"
                  htmlFor="category"
                >
                  Category
                </label>
                <select
                  className="w-full px-4 py-3 border border-zinc-800 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-zinc-900 text-white transition-all duration-300"
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled className="text-zinc-500">
                    Select a category
                  </option>
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Image Upload */}
              <div>
                <label
                  className="block text-sm font-medium text-zinc-300 mb-2"
                  htmlFor="image"
                >
                  Cover Image
                </label>
                <div className="relative">
                  <input
                    className="w-full px-4 py-3 border border-zinc-800 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-zinc-900 text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-emerald-500 file:text-black file:font-semibold hover:file:bg-emerald-400 transition-all duration-300"
                    id="image"
                    name="image"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    required
                  />
                </div>
                {formData.image && (
                  <p className="mt-2 text-sm text-zinc-400">
                    Selected: {formData.image.name}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(16, 185, 129, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 px-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black font-bold rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/20"
              >
                Publish Blog
              </motion.button>
            </form>

            {/* Decorative Elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default CreateBlog