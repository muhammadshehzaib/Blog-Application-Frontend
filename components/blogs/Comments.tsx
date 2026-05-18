"use client";
import React from "react";
import { motion } from "framer-motion";

interface CommentsProps {
  comment: string;
  blogId: string;
}

const Comments: React.FC<CommentsProps> = ({ comment, blogId }) => {
  const stamp = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="group pl-6 pr-2 py-3 border-l border-rule hover:border-paper-3 transition-colors"
    >
      <div className="flex items-baseline gap-3 mb-1.5">
        <span className="font-mono text-accent text-sm leading-none select-none">
          ›
        </span>
        <span className="font-mono text-[0.7rem] tracking-label uppercase text-paper-3">
          {stamp}
        </span>
        <span className="font-mono text-[0.7rem] tracking-label uppercase text-paper-3">
          · anon
        </span>
        <span className="flex-1 border-t border-rule translate-y-[-2px] opacity-50" />
      </div>
      <p className="pl-6 text-paper-2 leading-relaxed break-words">
        {comment}
      </p>
    </motion.div>
  );
};

export default Comments;
