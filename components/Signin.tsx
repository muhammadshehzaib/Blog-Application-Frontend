"use client";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { motion } from "framer-motion";

function SignIn() {
  const router = useRouter();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const fillCredentials = (username: string, password: string) => {
    setFormData({ username, password });
  };

  const testAccounts: { role: string; username: string; password: string }[] = [
    { role: "Admin", username: "admin", password: "admin123" },
    { role: "Writer", username: "writer", password: "writer123" },
    { role: "Reader", username: "reader", password: "reader123" },
  ];

  const handleSignin = async (e: any) => {
    e.preventDefault();

    try {
      const forms = {
        username: formData.username,
        password: formData.password,
      };

      const response = await fetch(`${process.env.DEPLOYMENTLINK}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(forms),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Signin Failed:", errorData);
        toast.error("Username and password incorrect");
        return;
      }

      const responseData = await response.json();
      login(responseData.accessToken);
      toast.success("Signed in successfully");

      let role = "";
      try {
        let b64 = responseData.accessToken
          .split(".")[1]
          .replace(/-/g, "+")
          .replace(/_/g, "/");
        while (b64.length % 4) b64 += "=";
        role = JSON.parse(atob(b64))?.role ?? "";
      } catch {
        /* fall through to default redirect */
      }

      router.push(role === "Admin" ? "/admin" : "/");
    } catch (error: any) {
      console.error("Signin Failed:", error.message);
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
          <span>step 01 / sign in</span>
          <span className="flex-1 border-t border-rule" />
          <span className="hidden sm:inline">secure</span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-paper text-[clamp(2rem,5vw,2.75rem)] leading-[1.0] tracking-[-0.035em] text-balance">
          Welcome <em className="text-accent font-display italic">back</em>.
        </h1>
        <p className="mt-4 text-paper-2 text-base leading-relaxed">
          Sign in to continue your writing. No tracking, no nudges &mdash; just
          the page.
        </p>

        {/* Form card */}
        <div className="relative ascii-frame border border-rule bg-ink-2 p-8 mt-10">
          <p className="label mb-6">// credentials</p>

          <form className="space-y-7" onSubmit={handleSignin}>
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
                value={formData.username}
                onChange={handleInputChange}
                className="w-full bg-transparent border-0 border-b border-rule focus:border-accent text-paper py-2 px-0 font-mono text-sm placeholder:text-paper-3/60 outline-none transition-colors"
                placeholder="your-handle"
              />
            </label>

            <label className="block">
              <div className="flex items-baseline justify-between mb-2">
                <span className="font-mono text-xs text-paper-3">
                  &gt; password
                </span>
                <Link
                  href="/forgetpassword"
                  className="font-mono text-[0.7rem] tracking-label uppercase text-paper-3 hover:text-accent transition-colors underline underline-offset-4 decoration-1"
                >
                  forgot?
                </Link>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleInputChange}
                className="w-full bg-transparent border-0 border-b border-rule focus:border-accent text-paper py-2 px-0 font-mono text-sm placeholder:text-paper-3/60 outline-none transition-colors"
                placeholder="••••••••"
              />
            </label>

            <button
              type="submit"
              className="group w-full inline-flex items-center justify-center gap-3 bg-accent text-ink px-6 py-3.5 hover:bg-paper transition-colors"
            >
              <span className="font-mono text-xs opacity-70">▸</span>
              <span className="font-medium">Sign in</span>
              <span className="font-mono text-xs opacity-70 transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </form>

          <p className="font-mono text-[0.7rem] tracking-label text-paper-3 mt-6 uppercase">
            session expires in 30 days &middot; encrypted at rest
          </p>
        </div>

        {/* Test accounts panel */}
        <div className="mt-6 border border-rule bg-ink-2 p-5">
          <div className="flex items-center justify-between mb-3">
            <p className="label">// demo accounts</p>
            <span className="font-mono text-[0.65rem] tracking-label text-paper-3 uppercase">
              click to fill
            </span>
          </div>
          <ul className="font-mono text-xs space-y-2">
            {testAccounts.map((acc) => (
              <li key={acc.username}>
                <button
                  type="button"
                  onClick={() => fillCredentials(acc.username, acc.password)}
                  className="group w-full grid grid-cols-12 gap-3 items-baseline text-left py-1.5 hover:bg-ink transition-colors px-2 -mx-2"
                >
                  <span className="col-span-3 text-accent uppercase tracking-label text-[0.65rem]">
                    {acc.role}
                  </span>
                  <span className="col-span-4 text-paper">
                    {acc.username}
                  </span>
                  <span className="col-span-4 text-paper-3 group-hover:text-paper transition-colors">
                    {acc.password}
                  </span>
                  <span className="col-span-1 text-paper-3 group-hover:text-accent transition-colors text-right">
                    ▸
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer links */}
        <div className="mt-8 flex items-baseline justify-between font-mono text-xs text-paper-3">
          <span>
            no account?{" "}
            <Link
              href="/signup"
              className="text-paper hover:text-accent underline underline-offset-4 decoration-1 transition-colors"
            >
              create one
            </Link>
          </span>
          <Link
            href="/"
            className="hover:text-paper transition-colors"
          >
            [ back ]
          </Link>
        </div>

        <p className="mt-10 font-mono text-[0.7rem] tracking-label text-paper-3 uppercase leading-relaxed">
          By signing in you agree to our{" "}
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
      </motion.div>    </main>
  );
}

export default SignIn;
