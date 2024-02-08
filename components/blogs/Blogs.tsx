"use client";
import { useEffect, useState } from "react";
import Footer from "../Footer";
import Navigation from "../Navigation";
import BlogCards from "./BlogCards";

const Blogs = () => {
  const [blogData, setBlogData] = useState([]);
  const [categorySelected, setCategorySelected] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3002/blogs");
        if (!response.ok) {
          throw new Error("Failed to fetch blog data");
        }
        const data = await response.json();
        setBlogData(data);
      } catch (error: any) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);
  const handleClick = (value) => {
    setCategorySelected(value);
  };
  console.log("This is blogData" + blogData[0].category);

  return (
    <div>
      <Navigation />
      <div className="flex space-x-4 justify-center mt-5">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleClick("Programming")}
        >
          Programming
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleClick("Gaming")}
        >
          Gaming
        </button>
        <button
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleClick("Blockchain")}
        >
          Blockchain
        </button>
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 min-h-[38.5rem]">
        {blogData.map((blog) => (
          <BlogCards key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="mt-12"></div>
      <Footer />
    </div>
  );
};

export default Blogs;
