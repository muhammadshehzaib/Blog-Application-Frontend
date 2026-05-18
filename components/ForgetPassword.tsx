"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import Link from "next/link";

interface FormData {
  email: string;
}

const ForgetPassword = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
  });
  const router = useRouter();

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("email", formData.email);

      const response = await fetch(
        `${process.env.DEPLOYMENTLINK}/auth/generateOtp`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: formData.email }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Email Cannot be added", errorData);
        toast.error("Email Cannot be added");
        return;
      }

      const responseData = await response.json();
      setTimeout(() => {
        toast.success("Email Accepted");
        router.push("/otp");
      }, 1000);
      console.log("Email Accepted", responseData);
      setFormData({
        email: "",
      });
    } catch (error: any) {
      console.error("Email Error", error.message);
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
          <span>step 01 / reset</span>
          <span className="flex-1 border-t border-rule" />
          <span className="hidden sm:inline">recovery</span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-paper text-[clamp(2rem,5vw,2.75rem)] leading-[1.0] tracking-[-0.035em] text-balance">
          Forgot your <em className="text-accent font-display italic">key</em>?
        </h1>
        <p className="mt-4 text-paper-2 text-base leading-relaxed">
          Enter the email tied to your account. We&apos;ll send a one-time code
          to reset your password.
        </p>

        {/* Form card */}
        <div className="relative ascii-frame border border-rule bg-ink-2 p-8 mt-10">
          <p className="label mb-6">// request-code</p>

          <form className="space-y-7" onSubmit={handleSubmit}>
            <label className="block">
              <span className="font-mono text-xs text-paper-3 block mb-2">
                &gt; email
              </span>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="hello@yourname.com"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full bg-transparent border-0 border-b border-rule focus:border-accent text-paper py-2 px-0 font-mono text-sm placeholder:text-paper-3/60 outline-none transition-colors"
              />
            </label>

            <button
              type="submit"
              className="group w-full inline-flex items-center justify-center gap-3 bg-accent text-ink px-6 py-3.5 hover:bg-paper transition-colors"
            >
              <span className="font-mono text-xs opacity-70">▸</span>
              <span className="font-medium">Send code</span>
              <span className="font-mono text-xs opacity-70 transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </form>

          <p className="font-mono text-[0.7rem] tracking-label text-paper-3 mt-6 uppercase">
            code arrives within a minute
          </p>
        </div>

        {/* Footer links */}
        <div className="mt-8 flex items-baseline justify-between font-mono text-xs text-paper-3">
          <span>
            remembered it?{" "}
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
          we&apos;ll never email you anything else
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
};

export default ForgetPassword;
