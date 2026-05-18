"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import Link from "next/link";
import { motion } from "framer-motion";

function SignUp() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignup = async (e: any) => {
    e.preventDefault();

    try {
      const forms = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      };

      const response = await fetch(
        `${process.env.DEPLOYMENTLINK}/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(forms),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Signup Failed:", errorData);
        toast.error("Username already exists");
        return;
      }

      const responseData = await response.json();
      toast.success("Account created successfully");
      setTimeout(() => {
        router.push("/signin");
      }, 1000);
    } catch (error: any) {
      console.error("Signup Failed:", error.message);
    }
  };

  return (
    <main className="min-h-screen bg-ink text-paper flex items-center justify-center px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="w-full max-w-lg"
      >
        {/* Meta line */}
        <div className="flex items-center gap-3 mb-10 font-mono text-[0.7rem] tracking-label text-paper-3 uppercase">
          <span className="text-accent">●</span>
          <span>step 01 / create account</span>
          <span className="flex-1 border-t border-rule" />
          <span className="hidden sm:inline">free</span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-paper text-[clamp(2rem,5vw,2.75rem)] leading-[1.0] tracking-[-0.035em] text-balance">
          Start <em className="text-accent font-display italic">writing</em>.
        </h1>
        <p className="mt-4 text-paper-2 text-base leading-relaxed max-w-md">
          A handle, an email, a password. That&apos;s the whole onboarding. No
          credit card, no plan picker.
        </p>

        {/* Form card */}
        <div className="relative ascii-frame border border-rule bg-ink-2 p-8 mt-10">
          <p className="label mb-6">// new-account</p>

          <form className="space-y-7" onSubmit={handleSignup}>
            <label className="block">
              <span className="font-mono text-xs text-paper-3 block mb-2">
                &gt; username
              </span>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                onChange={handleInputChange}
                className="w-full bg-transparent border-0 border-b border-rule focus:border-accent text-paper py-2 px-0 font-mono text-sm placeholder:text-paper-3/60 outline-none transition-colors"
                placeholder="lowercase, no spaces"
              />
            </label>

            <label className="block">
              <span className="font-mono text-xs text-paper-3 block mb-2">
                &gt; email
              </span>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                onChange={handleInputChange}
                className="w-full bg-transparent border-0 border-b border-rule focus:border-accent text-paper py-2 px-0 font-mono text-sm placeholder:text-paper-3/60 outline-none transition-colors"
                placeholder="hello@yourname.com"
              />
            </label>

            <label className="block">
              <span className="font-mono text-xs text-paper-3 block mb-2">
                &gt; password
              </span>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
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
              <span className="font-medium">Create account</span>
              <span className="font-mono text-xs opacity-70 transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </form>

          <p className="font-mono text-[0.7rem] tracking-label text-paper-3 mt-6 uppercase">
            no credit card &middot; export anytime &middot; delete anytime
          </p>
        </div>

        {/* Footer links */}
        <div className="mt-8 flex items-baseline justify-between font-mono text-xs text-paper-3">
          <span>
            already a member?{" "}
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
          By signing up you agree to our{" "}
          <Link
            href="/terms"
            className="text-paper-2 hover:text-accent underline underline-offset-4 decoration-1 transition-colors"
          >
            terms
          </Link>{" "}
          &middot;{" "}
          <Link
            href="/privacy"
            className="text-paper-2 hover:text-accent underline underline-offset-4 decoration-1 transition-colors"
          >
            privacy
          </Link>
        </p>
      </motion.div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </main>
  );
}

export default SignUp;
