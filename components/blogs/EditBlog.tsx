"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import Navigation from "../Navigation";
import Footer from "../Footer";

interface Category {
  _id: string;
  category: string;
}

const EditBlog: React.FC<{ blogId: string }> = ({ blogId }) => {
  const router = useRouter();
  const { token } = useAuth();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const [blogRes, catRes] = await Promise.all([
          fetch(`${process.env.DEPLOYMENTLINK}/blogs/${blogId}`),
          fetch(`${process.env.DEPLOYMENTLINK}/blogscategories`),
        ]);
        const blog = await blogRes.json();
        const cats = await catRes.json();
        setTitle(blog.title ?? "");
        setContent(blog.content ?? "");
        setCategory(blog.category?._id ?? blog.category ?? "");
        setCategories(Array.isArray(cats) ? cats : []);
      } catch {
        setError("Failed to load the post.");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [blogId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      const res = await fetch(`${process.env.DEPLOYMENTLINK}/blogs/${blogId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${token}`,
        },
        body: JSON.stringify({ title, content, category }),
      });
      if (!res.ok) throw new Error(`Update failed (${res.status})`);
      router.push(`/blogs/${blogId}`);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <main className="bg-ink text-paper min-h-screen">
      <Navigation />
      <section className="max-w-3xl mx-auto px-6 lg:px-10 pt-16 pb-24">
        <div className="flex items-baseline gap-4 mb-10">
          <span className="font-mono text-paper-3 text-[0.7rem] tracking-label">
            §
          </span>
          <span className="label">Edit post</span>
          <span className="flex-1 border-t border-rule translate-y-[-2px]" />
        </div>

        {loading ? (
          <p className="font-mono text-sm text-paper-3 animate-pulse">
            › loading post…
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <span className="font-mono text-xs text-paper-3 block mb-2">
                &gt; title
              </span>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full bg-transparent border-0 border-b border-rule focus:border-accent text-paper font-display text-2xl py-2 outline-none transition-colors"
              />
            </div>

            <div>
              <span className="font-mono text-xs text-paper-3 block mb-2">
                &gt; category
              </span>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                className="w-full bg-transparent border-0 border-b border-rule focus:border-accent text-paper font-mono text-sm py-2 outline-none"
              >
                <option value="" disabled className="bg-ink">
                  select one
                </option>
                {categories.map((c) => (
                  <option key={c._id} value={c._id} className="bg-ink">
                    {c.category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <span className="font-mono text-xs text-paper-3 block mb-2">
                &gt; body
              </span>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                className="w-full bg-transparent border border-rule focus:border-accent text-paper font-sans text-base leading-relaxed p-4 min-h-[360px] resize-y outline-none transition-colors"
              />
            </div>

            {error && (
              <p className="font-mono text-xs text-red-400">✗ {error}</p>
            )}

            <div className="flex gap-3">
              <button
                type="submit"
                disabled={saving}
                className="bg-accent text-ink px-6 py-3 hover:bg-paper transition-colors disabled:opacity-50 text-sm font-medium"
              >
                {saving ? "saving…" : "Save changes"}
              </button>
              <button
                type="button"
                onClick={() => router.push(`/blogs/${blogId}`)}
                className="border border-rule text-paper-2 px-6 py-3 hover:text-paper hover:border-paper-3 transition-colors text-sm"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </section>
      <Footer />
    </main>
  );
};

export default EditBlog;
