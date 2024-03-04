"use client";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Navigation from "../Navigation";
import Footer from "../Footer";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import NeuButton from "../buttons/Submit";

interface FormData {
  title: string;
  content: string;
  image: File | null;
  category: string;
}

interface Category {
  _id: string;
  category: string;
}

const CreateBlog: React.FC = () => {
  const { isAuthenticated, token } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    title: "",
    content: "",
    image: null,
    category: "",
  });
  const [categories, setCategories] = useState<Category[]>([]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "content" ? String(value) : value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: file || null,
    }));
    // console.log(file);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isAuthenticated) {
      try {
        const data = new FormData();
        data.append("file", formData.image as File);
        data.append("title", formData.title);
        data.append("content", formData.content);
        data.append("category", formData.category);

        const response = await fetch(`${process.env.DEPLOYMENTLINK}/blogs`, {
          method: "POST",
          headers: {
            authorization: `bearer ${token}`,
          },
          body: data,
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Blog Cannot be added", errorData);
          return;
        }

        const responseData = await response.json();
        console.log("Blog Created Successfully", responseData);
        setFormData({
          title: "",
          content: "",
          image: null,
          category: "",
        });
        router.push(`/blogs`);
      } catch (error: any) {
        console.error("Blog not Created:", error.message);
      }
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        `${process.env.DEPLOYMENTLINK}/blogscategories`,
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Category Cannot be added", errorData);
        return;
      }

      const responseData = await response.json();
      setCategories(responseData); // Update state with fetched data
      console.log("Categories Fetched Successfully", responseData);
    } catch (error: any) {
      console.error("Categories not Fetched:", error.message);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="bg-white">
      <Navigation />
      <div className="flex items-center min-h-[50rem] max-w-full justify-center">
        <form
          className="bg-white shadow-md rounded px-6 pt-6 pb-8 mb-4 w-[50%]"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="title"
            >
              Title:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="content"
            >
              Content:
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-x"
              id="content"
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="category"
            >
              Category:
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Select a category
              </option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.category}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="image"
            >
              Upload Image:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="image"
              name="image"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <NeuButton button={"Add Blog"} />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CreateBlog;
