"use client";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Link from "next/link";
import { motion } from "framer-motion";

function SignIn() {
  const router = useRouter();
  const { isAuthenticated, token, login, logout } = useAuth();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

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
      toast.success("Signed in successfully");
      
      setTimeout(() => {
        login(responseData.accessToken);
        if (isAuthenticated) {
          router.push("/");
        }
        if (forms.username === "admin") {
          router.push("admin");
        }
      }, 1000);
    } catch (error: any) {
      console.error("Signin Failed:", error.message);
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
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-blue-500/5 to-purple-500/5"></div>

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
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  </motion.div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    Welcome Back
                  </h2>
                  <p className="text-zinc-400">
                    Sign in to continue your writing journey
                  </p>
                </div>

                {/* Form */}
                <form className="space-y-6" onSubmit={handleSignin}>
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
                    <div className="flex items-center justify-between mb-2">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-zinc-300"
                      >
                        Password
                      </label>
                      <Link
                        href="/forgetpassword"
                        className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="w-full px-4 py-3 border border-zinc-800 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-zinc-900 text-white placeholder-zinc-500 transition-all duration-300"
                      placeholder="Enter your password"
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
                    className="w-full py-3 px-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black font-bold rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/20"
                  >
                    Sign In
                  </motion.button>
                </form>

                {/* Footer */}
                <p className="mt-8 text-center text-sm text-zinc-400">
                  Not a member yet?{" "}
                  <Link
                    href="/signup"
                    className="font-semibold text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
                  >
                    Join our community
                  </Link>
                </p>

                {/* Decorative Elements */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-3xl"></div>
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
                By signing in, you agree to our{" "}
                <Link
                  href="/terms"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
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
}

export default SignIn;