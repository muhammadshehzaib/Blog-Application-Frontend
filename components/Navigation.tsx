"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";

const Navigation = () => {
  const router = useRouter();
  const { logout, isAuthenticated } = useAuth();

  const handleLogout = () => {
    // Simulate a logout action
    logout();
    router.push("signin");
  };
  return (
    <div className="navbar bg-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {isAuthenticated ? (
              ""
            ) : (
              <li>
                <a onClick={() => router.push("/signin")}>Signup</a>
              </li>
            )}

            <li>
              <a>Pages</a>
              <ul className="p-2">
                <li>
                  <a onClick={() => router.push("/pages/services")}>Services</a>
                </li>
                <li>
                  <a onClick={() => router.push("/pages/pricing")}>Pricing</a>
                </li>
                <li>
                  <a onClick={() => router.push("/pages/aboutus")}>About us</a>
                </li>
              </ul>
            </li>
            <li>
              <a onClick={() => router.push("/blogs")}>Blogs</a>
            </li>
            <li>
              {isAuthenticated ? (
                <a onClick={() => router.push("/create-blogs")}>Write Blogs</a>
              ) : (
                ""
              )}
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl" onClick={() => router.push("/")}>
          Scribble Sphere
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {isAuthenticated ? (
            ""
          ) : (
            <li>
              <a
                className="flex items-center px-4 py-3 font-medium transition duration-150 ease-in-out hover:text-gray-900 dark:hover:text-white text-xl"
                onClick={() => router.push("/signup")}
              >
                Signup
              </a>
            </li>
          )}
          <li>
            <details>
              <summary className="flex items-center px-4 py-3 font-medium transition duration-150 ease-in-out hover:text-gray-900 dark:hover:text-white text-xl">
                Pages
              </summary>
              <ul className="block rounded pl-4 font-medium drop-shadow-xl md:absolute md:min-w-[200px] md:bg-white/90 md:pl-0 md:backdrop-blur-md dark:md:bg-slate-900/90 z-10">
                <li>
                  <a
                    className="whitespace-no-wrap block py-2 px-5 first:rounded-t last:rounded-b dark:hover:bg-gray-700 md:hover:bg-gray-200"
                    onClick={() => router.push("/pages/services")}
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    className="whitespace-no-wrap block py-2 px-5 first:rounded-t last:rounded-b dark:hover:bg-gray-700 md:hover:bg-gray-200"
                    onClick={() => router.push("/pages/pricing")}
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    className="whitespace-no-wrap block py-2 px-5 first:rounded-t last:rounded-b dark:hover:bg-gray-700 md:hover:bg-gray-200"
                    onClick={() => router.push("/pages/aboutus")}
                  >
                    About us
                  </a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a
              className="flex items-center px-4 py-3 font-medium transition duration-150 ease-in-out hover:text-gray-900 dark:hover:text-white text-xl"
              onClick={() => router.push("/blogs")}
            >
              Blogs
            </a>
          </li>
          <li>
            <a
              className="flex items-center px-4 py-3 font-medium transition duration-150 ease-in-out hover:text-gray-900 dark:hover:text-white text-xl"
              onClick={() => router.push("/create-blogs")}
            >
              Write Blog
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {isAuthenticated ? (
          <a className="btn" onClick={handleLogout}>
            Logout
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navigation;
