import React, { useState } from "react";
import Navigation from "../Navigation";
import Footer from "../Footer";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";

const CreateBlog = () => {
  const { isAuthenticated, token } = useAuth();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: null,
    category: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "content" ? String(value) : value,
    }));
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: file,
    }));
    console.log(file);
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (isAuthenticated) {
      try {
        const data = new FormData();
        data.append("file", formData.image);
        data.append("title", formData.title);
        data.append("content", formData.content);
        data.append("category", formData.category);

        const response = await fetch("http://localhost:3002/blogs", {
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
        console.log(responseData);

        console.log("Blog Created Successfully", responseData);
      } catch (error: any) {
        console.error("Blog not Created:", error.message);
      }

      console.log(formData);
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
              className="block text-gray-700 text-sm font-bold mb-2"
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
              className="block text-gray-700 text-sm font-bold mb-2"
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
              <option value="Programming">Programming</option>
              <option value="Gaming">Gaming</option>
              <option value="Blockchain">Blockchain</option>
            </select>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
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
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default CreateBlog;
