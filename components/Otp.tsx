"use client";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Footer from "./Footer";
import NeuButton from "./buttons/Submit";
import Navigation from "./Navigation";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

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
        toast.error("Otp and Email is not correct");
        return;
      }

      const responseData = await response.json();
      setTimeout(() => {
        toast.success("Email Accepted");
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
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="title"
                >
                  OTP
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="text"
                  name="otp"
                  type="otp"
                  value={formData.otp}
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

export default Otp;
