"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import NeuButton from "./buttons/Submit";
import Footer from "./Footer";
import Navigation from "./Navigation";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import useAuth from "@/hooks/useAuth";

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
        toast.success("Password Change Successfully");
        router.push("/signin");
      }, 1000);

      console.log("Password Change Successful:", responseData);
    } catch (error: any) {
      console.error("Password Change Fail", error.message);
    }
  };
  return (
    <>
      <div>
        <Navigation />
        <div className="flex min-h-[38.5rem] flex-col justify-center px-6 py-12 lg:px-8 bg-white dark:bg-gray-800">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-10 text-center text-3xl font-bold leading-9 text-gray-900 dark:text-white">
              Enter Your New Password
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
            <form className="space-y-6" onSubmit={handlePasswordChange}>
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
          </div>
        </div>
        <Footer />
      </div>
      <ToastContainer />
    </>
  );
};

export default Password;
