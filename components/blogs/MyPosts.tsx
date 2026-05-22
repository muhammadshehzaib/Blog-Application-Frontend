"use client";
import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import Navigation from "../Navigation";
import Footer from "../Footer";

interface Post {
  _id: string;
  title: string;
  status?: string;
  category?: { category: string };
}

const MyPosts: React.FC = () => {
  const router = useRouter();
  const { token, isAuthenticated } = useAuth();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = useCallback(async () => {
    if (!token) return;
    try {
      const res = await fetch(
        `${process.env.DEPLOYMENTLINK}/blogs/userblogs`,
        { headers: { authorization: `bearer ${token}` } },
      );
      if (!res.ok) throw new Error(`Failed to load posts (${res.status})`);
      const data = await res.json();
      setPosts(Array.isArray(data) ? data : []);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this post permanently?")) return;
    try {
      const res = await fetch(`${process.env.DEPLOYMENTLINK}/blogs/${id}`, {
        method: "DELETE",
        headers: { authorization: `bearer ${token}` },
      });
      if (!res.ok) throw new Error(`Delete failed (${res.status})`);
      setPosts((prev) => prev.filter((p) => p._id !== id));
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <main className="bg-ink text-paper min-h-screen">
      <Navigation />
      <section className="max-w-4xl mx-auto px-6 lg:px-10 pt-16 pb-24">
        <div className="flex items-baseline gap-4 mb-10">
          <span className="font-mono text-paper-3 text-[0.7rem] tracking-label">
            §
          </span>
          <span className="label">My posts</span>
          <span className="flex-1 border-t border-rule translate-y-[-2px]" />
          <span className="font-mono text-paper-3 text-[0.7rem] tracking-label">
            {posts.length} total
          </span>
        </div>

        {!isAuthenticated && !loading ? (
          <p className="font-mono text-sm text-paper-3">
            › sign in to see your posts
          </p>
        ) : loading ? (
          <p className="font-mono text-sm text-paper-3 animate-pulse">
            › loading…
          </p>
        ) : error ? (
          <p className="font-mono text-sm text-red-400">✗ {error}</p>
        ) : posts.length === 0 ? (
          <div className="border border-rule p-10 text-center font-mono text-sm text-paper-3">
            <p>// you haven&apos;t written anything yet</p>
            <Link href="/create-blogs" className="text-accent hover:underline">
              ▸ write your first post
            </Link>
          </div>
        ) : (
          <div className="border border-rule divide-y divide-rule">
            {posts.map((p) => (
              <div
                key={p._id}
                className="flex items-center gap-4 p-4 hover:bg-ink-2 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <Link
                    href={`/blogs/${p._id}`}
                    className="font-display text-paper hover:text-accent transition-colors truncate block"
                  >
                    {p.title}
                  </Link>
                  <p className="font-mono text-[0.65rem] tracking-label uppercase text-paper-3 mt-1">
                    {p.category?.category || "essay"} · {p.status || "pending"}
                  </p>
                </div>
                <button
                  onClick={() => router.push(`/blogs/${p._id}/edit`)}
                  className="font-mono text-xs border border-rule px-3 py-1.5 text-paper-2 hover:text-paper hover:border-accent transition-colors"
                >
                  edit
                </button>
                <button
                  onClick={() => handleDelete(p._id)}
                  className="font-mono text-xs border border-rule px-3 py-1.5 text-paper-2 hover:text-red-400 hover:border-red-400 transition-colors"
                >
                  delete
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
};

export default MyPosts;
