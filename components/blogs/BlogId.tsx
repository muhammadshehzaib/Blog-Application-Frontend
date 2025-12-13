"use client";
import React, { useState, useEffect } from "react";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import Comments from "./Comments";
import Reactions from "./reactions/Reactions";
import Navigation from "../Navigation";
import Footer from "../Footer";
import Image from "next/image";
import { motion } from "framer-motion";

interface Blog {
  _id: string;
  title: string;
  content: string;
  image: string;
  reactions: { reactions: string }[];
  comments: { id: string; comment: string }[];
}

interface BlogIdProps {
  blog: string;
}

const BlogId: React.FC<BlogIdProps> = ({ blog }) => {
  const router = useRouter();
  const { token } = useAuth();
  const [comments, setComments] = useState<string>("");
  const [reactions, setReactions] = useState<string | null>(null);
  const [blogs, setBlogs] = useState<Blog | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.DEPLOYMENTLINK}/blogs/${blog}`
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
        const errorData = await response.json();
        console.error("Comment Failed:", errorData);
        return;
      }

      const responseData = await response.json();
      setComments("");

      console.log("Comment Successful:", responseData);
    } catch (error: any) {
      console.error("Comment Failed:", error.message);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setComments(value);
  };

  const handleReactionSelected = async (reaction: string) => {
    try {
      const response = await fetch(`${process.env.DEPLOYMENTLINK}/reactions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${token}`,
        },
        body: JSON.stringify({ reactions: reaction, blogId: blog }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Reaction Failed:", errorData);
        return;
      }

      const responseData = await response.json();
      setReactions(responseData);

      console.log("Reaction Successful ", responseData);
    } catch (error: any) {
      console.error("Reaction Unsuccessful:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navigation />

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

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          {blogs && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Blog Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative rounded-2xl overflow-hidden mb-8 shadow-2xl"
              >
                <Image
                  src={blogs.image}
                  alt={blogs.title}
                  width={1200}
                  height={600}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </motion.div>

              {/* Blog Content Card */}
              <div className="relative bg-zinc-950 border border-zinc-900 rounded-3xl p-8 md:p-12 mb-8 overflow-hidden">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-blue-500/5 to-purple-500/5"></div>

                <div className="relative">
                  {/* Title */}
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
                    {blogs.title}
                  </h1>

                  {/* Content */}
                  <div className="text-lg text-zinc-300 leading-relaxed mb-8 whitespace-pre-wrap">
                    {blogs.content}
                  </div>

                  {/* Reactions Section */}
                  <div className="pt-6 border-t border-zinc-800">
                    {blogs.reactions.length === 0 ? (
                      <Reactions onReactionSelected={handleReactionSelected} />
                    ) : (
                      blogs.reactions.map((reaction) => (
                        <Reactions
                          key={reaction.reactions}
                          onReactionSelected={handleReactionSelected}
                        />
                      ))
                    )}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
              </div>

              {/* Comments Section */}
              <div className="relative bg-zinc-950 border border-zinc-900 rounded-3xl p-8 md:p-12 overflow-hidden">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-emerald-500/5"></div>

                <div className="relative">
                  {/* Comments Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                      Comments
                    </h2>
                  </div>

                  {/* Add Comment Form */}
                  <form onSubmit={handleComment} className="mb-8">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="text"
                        value={comments}
                        onChange={handleInputChange}
                        placeholder="Share your thoughts..."
                        className="flex-1 px-4 py-3 border border-zinc-800 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-zinc-900 text-white placeholder-zinc-500 transition-all duration-300"
                      />
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black font-bold rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/20 whitespace-nowrap"
                      >
                        Submit
                      </motion.button>
                    </div>
                  </form>

                  {/* Comments List */}
                  <div className="space-y-4">
                    {blogs?.comments.length !== 0 ? (
                      blogs?.comments.map((comment) => (
                        <Comments
                          key={comment.id}
                          comment={comment.comment}
                          blogId={blog}
                        />
                      ))
                    ) : (
                      <div className="text-center py-12">
                        <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg
                            className="w-8 h-8 text-zinc-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                          </svg>
                        </div>
                        <p className="text-zinc-500">
                          No comments yet. Be the first to share your thoughts!
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BlogId;