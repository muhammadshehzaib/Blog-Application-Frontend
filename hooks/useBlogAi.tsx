"use client";
import { useCallback, useEffect, useState } from "react";

export interface RelatedBlog {
  _id: string;
  title: string;
  image?: string;
  category?: { category: string };
}

export default function useBlogAi(
  blogId: string | null,
  token: string | null,
) {
  const [related, setRelated] = useState<RelatedBlog[]>([]);
  const [summary, setSummary] = useState<string | null>(null);
  const [suggestions, setSuggestions] = useState<string[] | null>(null);
  const [loadingSummary, setLoadingSummary] = useState(false);
  const [loadingTags, setLoadingTags] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Related posts — public, no auth, fetch once on mount.
  useEffect(() => {
    if (!blogId) return;
    let cancelled = false;
    fetch(`${process.env.DEPLOYMENTLINK}/blogs/${blogId}/related`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (!cancelled && data) setRelated(data.related ?? []);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [blogId]);

  // Summarize — POST, JWT-guarded, costs an AI call → button-triggered.
  const fetchSummary = useCallback(async () => {
    if (!blogId || !token) {
      setError("You must be logged in to use AI tools.");
      return;
    }
    setLoadingSummary(true);
    setError(null);
    try {
      const res = await fetch(
        `${process.env.DEPLOYMENTLINK}/blogs/${blogId}/summarize`,
        { method: "POST", headers: { authorization: `bearer ${token}` } },
      );
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      const data = await res.json();
      setSummary(data.summary ?? "");
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoadingSummary(false);
    }
  }, [blogId, token]);

  // Auto-tag — POST, JWT-guarded → button-triggered.
  const fetchTags = useCallback(async () => {
    if (!blogId || !token) {
      setError("You must be logged in to use AI tools.");
      return;
    }
    setLoadingTags(true);
    setError(null);
    try {
      const res = await fetch(
        `${process.env.DEPLOYMENTLINK}/blogs/${blogId}/auto-tag`,
        { method: "POST", headers: { authorization: `bearer ${token}` } },
      );
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      const data = await res.json();
      setSuggestions(data.suggestions ?? []);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoadingTags(false);
    }
  }, [blogId, token]);

  return {
    related,
    summary,
    suggestions,
    loadingSummary,
    loadingTags,
    error,
    fetchSummary,
    fetchTags,
  };
}
