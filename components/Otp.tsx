"use client";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import Link from "next/link";

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
      setTimeout(() => {
        toast.success("Verification Successful");
        router.push("/forgetpassword/changepassword");
      }, 1000);
      console.log("Email Accepted", responseData);
      setFormData({
        otp: "",
        email: "",
      });
    } catch (error: any) {
      console.error("Email Error", error.message);
    }
  };

  return (
    <>
      <Navigation />
      <div className="relative min-h-screen bg-black text-white overflow-hidden pt-32 pb-16">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]"></div>

        {/* Floating Gradient Orbs */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 py-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-md mx-auto"
          >
            {/* Card */}
            <div className="relative bg-zinc-950 border border-zinc-900 rounded-3xl p-8 md:p-10 overflow-hidden">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5"></div>

              <div className="relative">
                {/* Header */}
                <div className="text-center mb-8">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500"
                  >
                    <svg
                      className="w-8 h-8 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </motion.div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    Verify Your Email
                  </h2>
                  <p className="text-zinc-400">
                    Enter the verification code sent to your email
                  </p>
                </div>

                {/* Form */}
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div>
                    <label
                      className="block text-sm font-medium text-zinc-300 mb-2"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <input
                      className="w-full px-4 py-3 border border-zinc-800 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-zinc-900 text-white placeholder-zinc-500 transition-all duration-300"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium text-zinc-300 mb-2"
                      htmlFor="otp"
                    >
                      Verification Code
                    </label>
                    <input
                      className="w-full px-4 py-3 border border-zinc-800 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-zinc-900 text-white placeholder-zinc-500 transition-all duration-300 text-center text-2xl tracking-widest font-mono"
                      id="otp"
                      name="otp"
                      type="text"
                      placeholder="000000"
                      maxLength={6}
                      value={formData.otp}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 0 30px rgba(6, 182, 212, 0.3)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/20 mt-6"
                  >
                    Verify Code
                  </motion.button>
                </form>

                {/* Footer */}
                <div className="mt-8 text-center">
                  <p className="text-sm text-zinc-400">
                    Didn&apos;t receive a code?{" "}
                    <button
                      onClick={() => router.push("/forgetpassword")}
                      className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                    >
                      Resend
                    </button>
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
              </div>
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 text-center"
            >
              <p className="text-sm text-zinc-500">
                Check your spam folder if you don&apos;t see the email
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Footer />
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
    </>
  );
};

export default Otp; 