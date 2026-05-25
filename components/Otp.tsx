"use client";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

interface FormData {
  email: string;
  otp: string;
}

const Otp = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    otp: "",
  });
  const router = useRouter();

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "content" ? String(value) : value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("email", formData.email);

      const response = await fetch(
        `${process.env.DEPLOYMENTLINK}/auth/verifyOtp?code=${formData.otp}`,
        {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: formData.email }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Otp and Email is not correct", errorData);
        toast.error("OTP and Email are not correct");
        return;
      }

      const responseData = await response.json();
      if (responseData?.resetToken && typeof window !== "undefined") {
        sessionStorage.setItem("resetToken", responseData.resetToken);
      }
      setTimeout(() => {
        toast.success("Verification Successful");
        router.push("/forgetpassword/changepassword");
      }, 1000);
      setFormData({
        otp: "",
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
          <span>step 02 / verify</span>
          <span className="flex-1 border-t border-rule" />
          <span className="hidden sm:inline">6-digit code</span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-paper text-[clamp(2rem,5vw,2.75rem)] leading-[1.0] tracking-[-0.035em] text-balance">
          Check your <em className="text-accent font-display italic">inbox</em>.
        </h1>
        <p className="mt-4 text-paper-2 text-base leading-relaxed">
          We sent a one-time code. Enter it below with the email you used to
          request it.
        </p>

        {/* Form card */}
        <div className="relative ascii-frame border border-rule bg-ink-2 p-8 mt-10">
          <p className="label mb-6">// otp-verify</p>

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

            <label className="block">
              <span className="font-mono text-xs text-paper-3 block mb-2">
                &gt; verification-code
              </span>
              <input
                id="otp"
                name="otp"
                type="text"
                placeholder="000000"
                maxLength={6}
                value={formData.otp}
                onChange={handleInputChange}
                required
                inputMode="numeric"
                className="w-full bg-transparent border-0 border-b border-rule focus:border-accent text-paper py-2 px-0 font-mono text-2xl tracking-[0.5em] placeholder:text-paper-3/40 outline-none transition-colors text-center"
              />
            </label>

            <button
              type="submit"
              className="group w-full inline-flex items-center justify-center gap-3 bg-accent text-ink px-6 py-3.5 hover:bg-paper transition-colors"
            >
              <span className="font-mono text-xs opacity-70">▸</span>
              <span className="font-medium">Verify code</span>
              <span className="font-mono text-xs opacity-70 transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </form>

          <p className="font-mono text-[0.7rem] tracking-label text-paper-3 mt-6 uppercase">
            code expires in 10 minutes
          </p>
        </div>

        {/* Footer links */}
        <div className="mt-8 flex items-baseline justify-between font-mono text-xs text-paper-3">
          <span>
            didn&apos;t arrive?{" "}
            <button
              type="button"
              onClick={() => router.push("/forgetpassword")}
              className="text-paper hover:text-accent underline underline-offset-4 decoration-1 transition-colors"
            >
              resend
            </button>
          </span>
          <button
            type="button"
            onClick={() => router.push("/signin")}
            className="hover:text-paper transition-colors"
          >
            [ back ]
          </button>
        </div>

        <p className="mt-10 font-mono text-[0.7rem] tracking-label text-paper-3 uppercase leading-relaxed">
          check your spam folder if you don&apos;t see it
        </p>
      </motion.div>    </main>
  );
};

export default Otp;
