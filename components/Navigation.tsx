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
    <div className="navbar bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-sm fixed top-0 left-0 right-0 z-50">
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
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-white dark:bg-gray-800 rounded-box w-52">
            <li>
              <Link href="/blogs" className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400">
                Articles
              </Link>
            </li>
            <li>
              <Link href="/pages/services">Technology</Link>
            </li>
            <li>
              <Link href="/pages/pricing">Lifestyle</Link>
            </li>
            <li>
              <Link href="/pages/aboutus">Travel</Link>
            </li>
            {isAuthenticated && (
              <li>
                <Link href="/create-blogs" className="text-lg font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500">
                  Write Article
                </Link>
              </li>
            )}
            {!isAuthenticated && (
              <li>
                <Link href="/signin" className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400">
                  Sign In
                </Link>
              </li>
            )}
          </ul>
        </div>
        <Link className="btn btn-ghost text-2xl font-serif tracking-wide" href="/">
          Scribble Sphere
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <Link href="/blogs" className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400">
              Articles
            </Link>
          </li>
          <li>
            <details>
              <summary className="text-lg font-medium">Categories</summary>
              <ul className="p-2 bg-white dark:bg-gray-800 rounded-box shadow-lg mt-2">
                <li>
                  <Link href="/pages/services">Technology</Link>
                </li>
                <li>
                  <Link href="/pages/pricing">Lifestyle</Link>
                </li>
                <li>
                  <Link href="/pages/aboutus">Travel</Link>
                </li>
              </ul>
            </details>
          </li>
          {isAuthenticated && (
            <li>
              <Link href="/create-blogs" className="text-lg font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500">
                Write Article
              </Link>
            </li>
          )}
          {!isAuthenticated ? (
            <li>
              <Link href="/signin" className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400">
                Sign In
              </Link>
            </li>
          ) : (
            <li>
              <button onClick={handleLogout} className="text-lg font-medium text-red-600 hover:text-red-700">
                Logout
              </button>
            </li>
          )}
          <button
            onClick={toggleDarkMode}
            className="btn btn-ghost btn-circle"
          >
            {isDarkMode ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
