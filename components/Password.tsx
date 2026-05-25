"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import useAuth from "@/hooks/useAuth";
import { motion } from "framer-motion";
import Link from "next/link";

const Password = () => {
  const { isAuthenticated, token, login, logout } = useAuth();
  const router = useRouter();

  const [formData, setFormData] = useState({
    newPassword: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePasswordChange = async (e: any) => {
    e.preventDefault();

    const resetToken =
      typeof window !== "undefined"
        ? sessionStorage.getItem("resetToken")
        : null;

    if (!resetToken) {
      toast.error("Reset token missing. Verify OTP again.");
      router.push("/forgetpassword");
      return;
    }

    if (!formData.newPassword || formData.newPassword.length < 8) {
      toast.error("Password must be at least 8 characters.");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.DEPLOYMENTLINK}/auth/changePassword`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            resetToken,
            newPassword: formData.newPassword,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        toast.error(errorData?.message || "Password change failed.");
        return;
      }

      sessionStorage.removeItem("resetToken");
      toast.success("Password changed successfully.");
      setTimeout(() => router.push("/signin"), 800);
    } catch {
      toast.error("Network error, please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-ink text-paper flex items-center justify-center px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        {/* Meta line */}
        <div className="flex items-center gap-3 mb-10 font-mono text-[0.7rem] tracking-label text-paper-3 uppercase">
          <span className="text-accent">●</span>
          <span>step 03 / new password</span>
          <span className="flex-1 border-t border-rule" />
          <span className="hidden sm:inline">final</span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-paper text-[clamp(2rem,5vw,2.75rem)] leading-[1.0] tracking-[-0.035em] text-balance">
          Set a <em className="text-accent font-display italic">new</em>{" "}
          password.
        </h1>
        <p className="mt-4 text-paper-2 text-base leading-relaxed">
          Pick something you can remember, but a stranger couldn&apos;t guess.
        </p>

        {/* Form card */}
        <div className="relative ascii-frame border border-rule bg-ink-2 p-8 mt-10">
          <p className="label mb-6">// rotate-credentials</p>

          <form className="space-y-7" onSubmit={handlePasswordChange}>
            <label className="block">
              <span className="font-mono text-xs text-paper-3 block mb-2">
                &gt; new-password
              </span>
              <input
                id="newPassword"
                name="newPassword"
                type="password"
                autoComplete="new-password"
                required
                minLength={8}
                onChange={handleInputChange}
                className="w-full bg-transparent border-0 border-b border-rule focus:border-accent text-paper py-2 px-0 font-mono text-sm placeholder:text-paper-3/60 outline-none transition-colors"
                placeholder="at least 8 characters"
              />
            </label>

            <button
              type="submit"
              className="group w-full inline-flex items-center justify-center gap-3 bg-accent text-ink px-6 py-3.5 hover:bg-paper transition-colors mt-2"
            >
              <span className="font-mono text-xs opacity-70">▸</span>
              <span className="font-medium">Update password</span>
              <span className="font-mono text-xs opacity-70 transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </form>

          <p className="font-mono text-[0.7rem] tracking-label text-paper-3 mt-6 uppercase">
            mix letters, numbers, and a symbol or two
          </p>
        </div>

        {/* Footer links */}
        <div className="mt-8 flex items-baseline justify-between font-mono text-xs text-paper-3">
          <span>
            changed your mind?{" "}
            <Link
              href="/signin"
              className="text-paper hover:text-accent underline underline-offset-4 decoration-1 transition-colors"
            >
              sign in
            </Link>
          </span>
          <Link href="/" className="hover:text-paper transition-colors">
            [ back ]
          </Link>
        </div>

        <p className="mt-10 font-mono text-[0.7rem] tracking-label text-paper-3 uppercase leading-relaxed">
          your old password will stop working immediately
        </p>
      </motion.div>    </main>
  );
};

export default Password;
