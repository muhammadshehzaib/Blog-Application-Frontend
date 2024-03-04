"use client";
import React, { useState, useEffect } from "react";
import Admin from "./Admin";
import Navigation from "../Navigation";
import Footer from "../Footer";
import { useRouter } from "next/navigation";
import Example from "../buttons/CreateCategory";

interface Blog {
  id: string;
  _id: string;
  status: string;
  createdAt: string;
  title: string;
}

const AdminPanel = () => {
  const [blogData, setBlogData] = useState<Blog[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.DEPLOYMENTLINK}/blogs`);
        if (!response.ok) {
          throw new Error("Failed to fetch blog data");
        }
        const data: Blog[] = await response.json();

        setBlogData(data);
      } catch (error: any) {
        console.error(error.message);
      }
    };

    fetchData();
  }, [blogData]);

  return (
    <>
      <Navigation />
      <div className="mx-auto p-6 min-h-[38.5rem]">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold mb-6">Admin Panel</h2>
          <Example />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th
                  colSpan={4}
                  className="py-3 px-6 border-b text-center font-semibold"
                >
                  Blog Information
                </th>
              </tr>
              <tr>
                <th className="py-2 px-6 border-b">Status</th>
                <th className="py-2 px-6 border-b">Created At</th>
                <th className="py-2 px-6 border-b">Blog Title</th>
                <th className="py-2 px-6 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {blogData.map((blog) => (
                <Admin key={blog.id} blog={blog} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AdminPanel;
