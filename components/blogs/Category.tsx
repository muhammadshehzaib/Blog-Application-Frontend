"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Navigation from "../Navigation";
import Footer from "../Footer";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import NeuButton from "../buttons/Submit";

interface FormData {
  category: string;
}

const Category = () => {
  const [formData, setFormData] = useState<FormData>({
    category: "",
  });
  const { isAuthenticated, token } = useAuth();
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
    if (isAuthenticated) {
      try {
        const data = new FormData();
        data.append("category", formData.category);

        const response = await fetch(
          `${process.env.DEPLOYMENTLINK}/blogscategories`,
          {
            method: "POST",
            headers: {
              authorization: `bearer ${token}`,
            },
            body: data,
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Category Cannot be added", errorData);
          return;
        }

        const responseData = await response.json();
        console.log("Category Created Successfully", responseData);
        setFormData({
          category: "",
        });
        router.push(`/admin`);
      } catch (error: any) {
        console.error("Blog not Created:", error.message);
      }
    }
  };
  return (
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
              Create Category :
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="category"
              name="category"
              type="text"
              value={formData.category}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <NeuButton button={"Add Category"} />
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Category;
