"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "./Footer";
import Navigation from "./Navigation";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import useAuth from "@/hooks/useAuth";
import { motion } from "framer-motion";
import Link from "next/link";

const Password = () => {
  const { isAuthenticated, token, login, logout } = useAuth();
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePasswordChange = async (e: any) => {
    e.preventDefault();

    try {
      const forms = {
        username: formData.username,
        password: formData.password,
      };

      const response = await fetch(
        `${process.env.DEPLOYMENTLINK}/auth/changePassword`,
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
        console.error("Password Change Failed", errorData);
        toast.error("Password Change Failed");
        return;
      }

      const responseData = await response.json();
      setTimeout(() => {
        toast.success("Password Changed Successfully");
        router.push("/signin");
      }, 1000);

      console.log("Password Change Successful:", responseData);
    } catch (error: any) {
      console.error("Password Change Fail", error.message);
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
          className="absolute top-20 left-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"
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
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-blue-500/5"></div>

              <div className="relative">
                {/* Header */}
                <div className="text-center mb-8">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500"
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
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </motion.div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    Set New Password
                  </h2>
                  <p className="text-zinc-400">
                    Create a strong password for your account
                  </p>
                </div>

                {/* Form */}
                <form className="space-y-5" onSubmit={handlePasswordChange}>
                  <div>
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium text-zinc-300 mb-2"
                    >
                      Username
                    </label>
                    <input
                      id="username"
                      name="username"
                      type="text"
                      autoComplete="username"
                      required
                      className="w-full px-4 py-3 border border-zinc-800 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-zinc-900 text-white placeholder-zinc-500 transition-all duration-300"
                      placeholder="Enter your username"
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-zinc-300 mb-2"
                    >
                      New Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      required
                      className="w-full px-4 py-3 border border-zinc-800 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-zinc-900 text-white placeholder-zinc-500 transition-all duration-300"
                      placeholder="Create a strong password"
                      onChange={handleInputChange}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 0 30px rgba(16, 185, 129, 0.3)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 px-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black font-bold rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/20 mt-6"
                  >
                    Update Password
                  </motion.button>
                </form>

                {/* Footer */}
                <div className="mt-8 text-center">
                  <p className="text-sm text-zinc-400">
                    Remember your password?{" "}
                    <Link
                      href="/signin"
                      className="font-semibold text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
                    >
                      Sign in here
                    </Link>
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-teal-500/10 to-transparent rounded-full blur-3xl"></div>
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
                Use at least 8 characters with a mix of letters and numbers
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

export default Password;