"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface CommentsProps {
  comment: string;
  blogId: string;
  commentId?: string;
  token?: string | null;
  commentUserId?: string;
  currentUserId?: string | null;
}

const Comments: React.FC<CommentsProps> = ({
  comment,
  commentId,
  token,
  commentUserId,
  currentUserId,
}) => {
  const stamp = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const [text, setText] = useState(comment);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(comment);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canEdit = Boolean(
    commentId &&
      token &&
      commentUserId &&
      currentUserId &&
      String(commentUserId) === String(currentUserId),
  );

  const save = async () => {
    if (!commentId || !token) return;
    setSaving(true);
    setError(null);
    try {
      const res = await fetch(
        `${process.env.DEPLOYMENTLINK}/comments/${commentId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${token}`,
          },
          body: JSON.stringify({ comment: draft }),
        },
      );
      if (!res.ok) {
        throw new Error("Only the author can edit this comment.");
      }
      setText(draft);
      setEditing(false);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setSaving(false);
    }
  };

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
        {canEdit && !editing && (
          <button
            onClick={() => {
              setDraft(text);
              setEditing(true);
            }}
            className="font-mono text-[0.7rem] text-paper-3 hover:text-accent transition-colors opacity-0 group-hover:opacity-100"
          >
            edit
          </button>
        )}
      </div>

      {editing ? (
        <div className="pl-6">
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            className="w-full bg-transparent border-b border-accent text-paper font-mono text-sm py-1 outline-none"
          />
          <div className="mt-2 flex items-center gap-3">
            <button
              onClick={save}
              disabled={saving}
              className="font-mono text-xs text-accent hover:underline disabled:opacity-50"
            >
              {saving ? "saving…" : "save"}
            </button>
            <button
              onClick={() => {
                setEditing(false);
                setError(null);
              }}
              className="font-mono text-xs text-paper-3 hover:text-paper"
            >
              cancel
            </button>
            {error && (
              <span className="font-mono text-[0.7rem] text-red-400">
                {error}
              </span>
            )}
          </div>
        </div>
      ) : (
        <p className="pl-6 text-paper-2 leading-relaxed break-words">{text}</p>
      )}
    </motion.div>
  );
};

export default Comments;
