"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";

const Navigation = () => {
  const router = useRouter();
  const { logout, isAuthenticated } = useAuth();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  const handleLogout = () => {
    logout();
    router.push("/signin");
  };

  return (
    <div className="navbar bg-white dark:bg-gray-800 text-gray-800 dark:text-white">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 dark:bg-gray-900 text-gray-800 dark:text-white rounded-box w-52"
          >
            {!isAuthenticated && (
              <li>
                <a
                  className="hover:text-gray-900 dark:hover:text-gray-200"
                  onClick={() => router.push("/signin")}
                >
                  Signup
                </a>
              </li>
            )}
            <li>
              <div>Pages</div>
              <ul className="p-2">
                <li>
                  <Link href="/pages/services">Services</Link>
                </li>
                <li>
                  <Link href="/pages/pricing">Pricing</Link>
                </li>
                <li>
                  <Link href="/pages/aboutus">About us</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
            {isAuthenticated && (
              <li>
                <Link href="/create-blogs">Write Blogs</Link>
              </li>
            )}
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl" href="/">
          Scribble Sphere
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {!isAuthenticated && (
            <li>
              <Link
                className="flex items-center px-4 py-3 font-medium text-gray-800 dark:text-white hover:text-gray-900 dark:hover:text-gray-200 text-xl"
                href="/signup"
              >
                Signup
              </Link>
            </li>
          )}
          <li>
            <details>
              <summary className="flex items-center px-4 py-3 font-medium text-gray-800 dark:text-white hover:text-gray-900 dark:hover:text-gray-200 text-xl">
                Pages
              </summary>
              <ul className="block rounded drop-shadow-xl md:absolute md:min-w-[200px] md:bg-white dark:md:bg-slate-900 z-10">
                <li>
                  <Link
                    className="block py-2 px-5 hover:bg-gray-200 dark:hover:bg-gray-700"
                    href="/pages/services"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    className="block py-2 px-5 hover:bg-gray-200 dark:hover:bg-gray-700"
                    href="/pages/pricing"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    className="block py-2 px-5 hover:bg-gray-200 dark:hover:bg-gray-700"
                    href="/pages/aboutus"
                  >
                    About us
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link
              className="flex items-center px-4 py-3 font-medium text-gray-800 dark:text-white hover:text-gray-900 dark:hover:text-gray-200 text-xl"
              href="/blogs"
            >
              Blogs
            </Link>
          </li>
          {isAuthenticated && (
            <li>
              <Link
                className="flex items-center px-4 py-3 font-medium text-gray-800 dark:text-white hover:text-gray-900 dark:hover:text-gray-200 text-xl"
                href="/create-blogs"
              >
                Write Blog
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end flex items-center">
        <button
          className="btn btn-ghost"
          onClick={toggleDarkMode}
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? "🌞 Light" : "🌙 Dark"}
        </button>
        {isAuthenticated && (
          <a className="btn" onClick={handleLogout}>
            Logout
          </a>
        )}
      </div>
    </div>
  );
};

export default Navigation;
