"use client";
import React from "react";
import { motion } from "framer-motion";

interface CommentsProps {
  comment: string;
  blogId: string;
}

const Comments: React.FC<CommentsProps> = ({ comment, blogId }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-zinc-900 border border-zinc-800 rounded-xl p-4 hover:border-zinc-700 transition-all duration-300"
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
      
      {/* Comment content */}
      <div className="relative flex items-start gap-3">
        {/* Avatar/Icon */}
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
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
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
        </div>

        {/* Comment text */}
        <div className="flex-1 min-w-0">
          <p className="text-zinc-300 leading-relaxed break-words">
            {comment}
          </p>
        </div>
      </div>

      {/* Left accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>
  );
};

export default Comments;