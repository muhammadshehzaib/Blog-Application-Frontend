"use client";
import React, { useEffect, useState } from "react";

interface CommentItem {
  _id: string;
  comment: string;
  createdAt?: string;
  blog?: string;
  userId?: string;
}

const CommentsModeration: React.FC = () => {
  const [comments, setComments] = useState<CommentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${process.env.DEPLOYMENTLINK}/comments`)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((data) => setComments(Array.isArray(data) ? data : []))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="max-w-4xl mx-auto px-6 lg:px-10 pt-16 pb-24">
      <div className="flex items-baseline gap-4 mb-10">
        <span className="font-mono text-paper-3 text-[0.7rem] tracking-label">
          §
        </span>
        <span className="label">Comments moderation</span>
        <span className="flex-1 border-t border-rule translate-y-[-2px]" />
        <span className="font-mono text-paper-3 text-[0.7rem] tracking-label">
          {comments.length} total
        </span>
      </div>

      {loading ? (
        <p className="font-mono text-sm text-paper-3 animate-pulse">
          › loading comments…
        </p>
      ) : error ? (
        <p className="font-mono text-sm text-red-400">✗ {error}</p>
      ) : comments.length === 0 ? (
        <p className="font-mono text-sm text-paper-3">// no comments yet</p>
      ) : (
        <div className="border border-rule divide-y divide-rule">
          {comments.map((c) => (
            <div key={c._id} className="p-4 hover:bg-ink-2 transition-colors">
              <p className="text-paper-2 leading-relaxed">{c.comment}</p>
              <p className="font-mono text-[0.65rem] tracking-label uppercase text-paper-3 mt-2">
                #{c._id.slice(-8)}
                {c.createdAt &&
                  ` · ${new Date(c.createdAt).toLocaleDateString()}`}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default CommentsModeration;
