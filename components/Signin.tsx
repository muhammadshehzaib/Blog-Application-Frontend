"use client";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
import Navigation from "./Navigation";
import NeuButton from "./buttons/Submit";
import Link from "next/link";

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
        console.error("Signup Failed:", errorData);
        toast.error("Username and password incorrect");

        return;
      }

      const responseData = await response.json();

      toast.success("User Created successful");
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
      console.error("Signup Failed:", error.message);
    }
  };

  return (
    <>
      <Navigation />
      <div className="flex min-h-[38.5rem] flex-col justify-center px-6 py-12 lg:px-8 bg-white dark:bg-gray-800">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-10 text-center text-3xl font-bold leading-9 text-gray-900 dark:text-white">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
          <form className="space-y-6" onSubmit={handleSignin}>
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
                  className="block w-full rounded-md border-0 p-2 text-black shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
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
                <div className="text-sm">
                  <Link
                    href="/forgetpassword"
                    className="font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 p-2 text-black shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <NeuButton button={"login"} />
            </div>
          </form>

          <p className="mt-8 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link
              href="/signup"
              className="font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default SignIn;
