"use client";
import React, { useState, useEffect } from "react";
import Admin from "./Admin";
import Navigation from "../Navigation";
import Footer from "../Footer";
import Example from "../buttons/CreateCategory"; // Assuming this is your modal trigger
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

  // Added a refresh trigger mechanism so you can re-fetch after actions in the future
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

  return (
    <div className="relative bg-black text-white min-h-screen overflow-hidden">
      {/* --- Background Effects (Consistent with other pages) --- */}
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

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 min-h-[calc(100vh-200px)]">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-8 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold">
              Admin{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                Dashboard
              </span>
            </h2>
            <p className="text-zinc-400 mt-2">Manage your blog posts and content</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Wrapping your existing button component */}
            <Example />
          </motion.div>
        </div>

        {/* Table Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-zinc-950 border border-zinc-900 rounded-3xl overflow-hidden shadow-2xl relative"
        >
          {/* Gradient Top Border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 opacity-50"></div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-900/50 border-b border-zinc-800">
                  <th className="py-5 px-6 text-xs font-bold text-zinc-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="py-5 px-6 text-xs font-bold text-zinc-400 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="py-5 px-6 text-xs font-bold text-zinc-400 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="py-5 px-6 text-xs font-bold text-zinc-400 uppercase tracking-wider text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900">
                {isLoading ? (
                  // Skeleton Loading State
                  [...Array(5)].map((_, i) => (
                    <tr key={i} className="animate-pulse">
                      <td className="p-6"><div className="h-4 w-16 bg-zinc-900 rounded"></div></td>
                      <td className="p-6"><div className="h-4 w-24 bg-zinc-900 rounded"></div></td>
                      <td className="p-6"><div className="h-4 w-64 bg-zinc-900 rounded"></div></td>
                      <td className="p-6"><div className="h-4 w-8 bg-zinc-900 rounded ml-auto"></div></td>
                    </tr>
                  ))
                ) : (
                  // Data Rows
                  blogData.map((blog) => (
                    <Admin key={blog.id || blog._id} blog={blog} />
                  ))
                )}
              </tbody>
            </table>
          </div>
          
          {!isLoading && blogData.length === 0 && (
            <div className="text-center py-20 text-zinc-500">
              No blogs found. Start by creating one!
            </div>
          )}
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default AdminPanel;