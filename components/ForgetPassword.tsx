"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import NeuButton from "./buttons/Submit";
import Navigation from "./Navigation";
import Footer from "./Footer";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

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
      <div>
        <>
          <Navigation />
          <div className="flex items-center min-h-[50rem] max-w-full justify-center">
            <form
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[50%]"
              onSubmit={handleSubmit}
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="title"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <NeuButton button={"Submit"} />
              </div>
            </form>
          </div>
          <Footer />
        </>
      </div>
      <ToastContainer />
    </>
  );
};

export default ForgetPassword;
