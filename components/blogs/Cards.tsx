"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Cards = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.DEPLOYMENTLINK}/blogs`);
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
  }, []); // Fetch data on component mount

  return (
    <div>
      <div className="grid mx-auto gap-8 md:gap-y-12 lg:grid-cols-3 sm:grid-cols-2 pb-6 px-6">
        <div>
          <div className="flex max-w-full ">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-12 w-12 flex items-center justify-center rounded-md text-white bg-[#1E3A8A] p-2 md:p-3 mt-1.5 mb-4 mr-4 rtl:ml-4 rtl:mr-0"
              >
                <path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z"></path>
              </svg>
            </div>
            <div className="mt-0.5">
              <h3 className="mb-3 text-xl font-bold">
                User-Friendly Interface
              </h3>
              <p className="mt-3 text-gray-600 dark:text-slate-400">
                A streamlined and visually appealing interface that welcomes
                bloggers with an intuitive dashboard.
              </p>
              <div className="flex w-auto cursor-pointer">
                <Link
                  className="inline-flex items-center w-full sm:mb-0 mt-3 font-bold text-blue-600 hover:underline dark:text-gray-200 cursor-pointer justify-start"
                  href="/"
                >
                  Discover now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex max-w-full ">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-12 w-12 flex items-center justify-center rounded-md text-white bg-[#1E3A8A] p-2 md:p-3 mt-1.5 mb-4 mr-4 rtl:ml-4 rtl:mr-0"
              >
                <path d="M3 12l3 3l3 -3l-3 -3z"></path>
                <path d="M15 12l3 3l3 -3l-3 -3z"></path>
                <path d="M9 6l3 3l3 -3l-3 -3z"></path>
                <path d="M9 18l3 3l3 -3l-3 -3z"></path>
              </svg>
            </div>
            <div className="mt-0.5">
              <h3 className="mb-3 text-xl font-bold">Content Management</h3>
              <p className="mt-3 text-gray-600 dark:text-slate-400">
                Efficient tools for creating, editing, and organizing blog
                posts.Support for multimedia content like images, videos, and
                audio.
              </p>
              <div className="flex w-auto cursor-pointer">
                <Link
                  className="inline-flex items-center w-full sm:mb-0 mt-3 font-bold text-blue-600 hover:underline dark:text-gray-200 cursor-pointer justify-start"
                  href="/"
                >
                  Discover now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex max-w-full ">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-12 w-12 flex items-center justify-center rounded-md text-white bg-[#1E3A8A] p-2 md:p-3 mt-1.5 mb-4 mr-4 rtl:ml-4 rtl:mr-0"
              >
                <path d="M3.5 5.5l1.5 1.5l2.5 -2.5"></path>
                <path d="M3.5 11.5l1.5 1.5l2.5 -2.5"></path>
                <path d="M3.5 17.5l1.5 1.5l2.5 -2.5"></path>
                <path d="M11 6l9 0"></path>
                <path d="M11 12l9 0"></path>
                <path d="M11 18l9 0"></path>
              </svg>
            </div>
            <div className="mt-0.5">
              <h3 className="mb-3 text-xl font-bold">Customization Options</h3>
              <p className="mt-3 text-gray-600 dark:text-slate-400">
                Personalized themes and templates to match individual
                styles.Customizable layouts for a unique blog appearance.
              </p>
              <div className="flex w-auto cursor-pointer">
                <Link
                  className="inline-flex items-center w-full sm:mb-0 mt-3 font-bold text-blue-600 hover:underline dark:text-gray-200 cursor-pointer justify-start"
                  href="/"
                >
                  Discover now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex max-w-full ">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-12 w-12 flex items-center justify-center rounded-md text-white bg-[#1E3A8A] p-2 md:p-3 mt-1.5 mb-4 mr-4 rtl:ml-4 rtl:mr-0"
              >
                <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3"></path>
                <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3"></path>
                <path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
              </svg>
            </div>
            <div className="mt-0.5">
              <h3 className="mb-3 text-xl font-bold">SEO Optimization</h3>
              <p className="mt-3 text-gray-600 dark:text-slate-400">
                Built-in SEO tools to help improve the visibility of blog posts
                on search engines.Meta tags, descriptions, and keyword
                optimization features.
              </p>
              <div className="flex w-auto cursor-pointer">
                <Link
                  className="inline-flex items-center w-full sm:mb-0 mt-3 font-bold text-blue-600 hover:underline dark:text-gray-200 cursor-pointer justify-start"
                  href="/"
                >
                  Discover now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex max-w-full ">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-12 w-12 flex items-center justify-center rounded-md text-white bg-[#1E3A8A] p-2 md:p-3 mt-1.5 mb-4 mr-4 rtl:ml-4 rtl:mr-0"
              >
                <path d="M21 7l-18 0"></path>
                <path d="M18 10l3 -3l-3 -3"></path>
                <path d="M6 20l-3 -3l3 -3"></path>
                <path d="M3 17l18 0"></path>
              </svg>
            </div>
            <div className="mt-0.5">
              <h3 className="mb-3 text-xl font-bold">Security Measures</h3>
              <p className="mt-3 text-gray-600 dark:text-slate-400">
                Secure login systems and measures to protect against cyber
                threats.Regular backups to prevent and stop data loss and data
                security.
              </p>
              <div className="flex w-auto cursor-pointer">
                <Link
                  className="inline-flex items-center w-full sm:mb-0 mt-3 font-bold text-blue-600 hover:underline dark:text-gray-200 cursor-pointer justify-start"
                  href="/"
                >
                  Discover now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex max-w-full ">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-12 w-12 flex items-center justify-center rounded-md text-white bg-[#1E3A8A] p-2 md:p-3 mt-1.5 mb-4 mr-4 rtl:ml-4 rtl:mr-0"
              >
                <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"></path>
                <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"></path>
                <path d="M9.7 17l4.6 0"></path>
              </svg>
            </div>
            <div className="mt-0.5">
              <h3 className="mb-3 text-xl font-bold">Responsive Design:</h3>
              <p className="mt-3 text-gray-600 dark:text-slate-400">
                Mobile-friendly design to ensure a great user experience across
                devices.Optional dark mode for users who prefer a darker color
                scheme.
              </p>
              <div className="flex w-auto cursor-pointer">
                <Link
                  className="inline-flex items-center w-full sm:mb-0 mt-3 font-bold text-blue-600 hover:underline dark:text-gray-200 cursor-pointer justify-start"
                  href="/"
                >
                  Discover now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
