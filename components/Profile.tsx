"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface UserProfile {
  _id?: string;
  username?: string;
  email?: string;
  role?: string;
  tokenVersion?: number;
}

const Profile: React.FC = () => {
  const { token, isAuthenticated } = useAuth();
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!token) {
      setLoading(false);
      return;
    }
    fetch(`${process.env.DEPLOYMENTLINK}/profile`, {
      headers: { authorization: `bearer ${token}` },
    })
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((data) => setUser(data))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [token]);

  const Row = ({ k, v }: { k: string; v: string | number | undefined }) => (
    <div className="flex justify-between py-2 border-b border-rule/40 last:border-b-0">
      <span className="font-mono text-sm text-paper-3">{k}</span>
      <span className="font-mono text-sm text-paper">{v ?? "—"}</span>
    </div>
  );

  return (
    <main className="bg-ink text-paper min-h-screen">
      <Navigation />
      <section className="max-w-2xl mx-auto px-6 lg:px-10 pt-16 pb-24">
        <div className="flex items-baseline gap-4 mb-10">
          <span className="font-mono text-paper-3 text-[0.7rem] tracking-label">
            §
          </span>
          <span className="label">Profile</span>
          <span className="flex-1 border-t border-rule translate-y-[-2px]" />
        </div>

        {!isAuthenticated && !loading ? (
          <p className="font-mono text-sm text-paper-3">
            › sign in to view your profile
          </p>
        ) : loading ? (
          <p className="font-mono text-sm text-paper-3 animate-pulse">
            › loading…
          </p>
        ) : error ? (
          <p className="font-mono text-sm text-red-400">✗ {error}</p>
        ) : (
          <>
            <div className="border border-rule bg-ink-2 p-6">
              <Row k="username" v={user?.username} />
              <Row k="email" v={user?.email} />
              <Row k="role" v={user?.role} />
              <Row k="id" v={user?._id} />
            </div>
            <div className="mt-6 flex gap-3">
              <Link
                href="/my-posts"
                className="font-mono text-xs border border-rule px-4 py-2 text-paper-2 hover:text-paper hover:border-accent transition-colors"
              >
                ▸ my posts
              </Link>
              <Link
                href="/forgetpassword"
                className="font-mono text-xs border border-rule px-4 py-2 text-paper-2 hover:text-paper hover:border-accent transition-colors"
              >
                ▸ change password
              </Link>
            </div>
          </>
        )}
      </section>
      <Footer />
    </main>
  );
};

export default Profile;
