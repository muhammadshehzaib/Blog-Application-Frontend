"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import Navigation from "./Navigation";
import Footer from "./Footer";
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
          className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
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
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-emerald-500/5"></div>

              <div className="relative">
                {/* Header */}
                <div className="text-center mb-8">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500"
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
                        d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                      />
                    </svg>
                  </motion.div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    Reset Password
                  </h2>
                  <p className="text-zinc-400">
                    Enter your email to receive a verification code
                  </p>
                </div>

                {/* Form */}
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label
                      className="block text-sm font-medium text-zinc-300 mb-2"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <input
                      className="w-full px-4 py-3 border border-zinc-800 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-zinc-900 text-white placeholder-zinc-500 transition-all duration-300"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 0 30px rgba(168, 85, 247, 0.3)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/20"
                  >
                    Send Verification Code
                  </motion.button>
                </form>

                {/* Footer */}
                <div className="mt-8 text-center">
                  <p className="text-sm text-zinc-400">
                    Remember your password?{" "}
                    <Link
                      href="/signin"
                      className="font-semibold text-purple-400 hover:text-purple-300 transition-colors duration-300"
                    >
                      Sign in here
                    </Link>
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-pink-500/10 to-transparent rounded-full blur-3xl"></div>
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
                We'll send a verification code to your email address
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

export default ForgetPassword;