"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Navigation from "./Navigation";
import Footer from "./Footer";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import NeuButton from "./buttons/Submit";
import Link from "next/link";

function SignUp() {
  // console.log(process.env.DEPLOYMENTLINK);

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
        toast.error("Username exist");

        return;
      }

      const responseData = await response.json();
      toast.success("User Created successful");
      setTimeout(() => {
        router.push("signin");
      }, 1000);
      console.log("Signup Successful:", responseData);
    } catch (error: any) {
      console.error("Signup Failed:", error.message);
    }
  };
  return (
    <>
      <Navigation />
      <div className="min-h-[38.5rem] bg-white dark:bg-gray-800">
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-3xl font-bold leading-9 text-gray-900 dark:text-white">
              Sign up to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" method="POST" onSubmit={handleSignup}>
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    className="block w-full rounded-md p-2 border-2 text-black focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-2 p-2 text-black shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md  p-2 text-black shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm border-2"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <p className="mt-4 text-center text-sm text-gray-500">
                Already a member?{" "}
                <Link
                  href="/signin"
                  className="font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer"
                >
                  Sign In
                </Link>
              </p>

              <div>
                <NeuButton button={"SignUp"} />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default SignUp;
