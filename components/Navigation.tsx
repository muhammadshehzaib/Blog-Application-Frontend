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
    <nav className="navbar bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
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
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-lg bg-white dark:bg-gray-800 rounded-lg w-52 space-y-2">
            <li>
              <Link href="/blogs" className="text-base font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Articles
              </Link>
            </li>
            <li>
              <Link href="/pages/services" className="text-base font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Technology
              </Link>
            </li>
            <li>
              <Link href="/pages/pricing" className="text-base font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Lifestyle
              </Link>
            </li>
            <li>
              <Link href="/pages/aboutus" className="text-base font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Travel
              </Link>
            </li>
            {isAuthenticated && (
              <li>
                <Link href="/create-blogs" className="text-base font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 transition-colors">
                  Write Article
                </Link>
              </li>
            )}
            {!isAuthenticated && (
              <li>
                <Link href="/signin" className="text-base font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Sign In
                </Link>
              </li>
            )}
          </ul>
        </div>
        <Link className="btn btn-ghost text-2xl font-serif tracking-wide hover:bg-transparent hover:text-blue-600 dark:hover:text-blue-400 transition-colors" href="/">
          Writers&apos; Haven
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex items-center gap-6">
        <ul className="flex items-center gap-6">
          <li>
            <Link href="/blogs" className="text-base font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Articles
            </Link>
          </li>
          <li>
            <Link href="/pages/services" className="text-base font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Technology
            </Link>
          </li>
          <li>
            <Link href="/pages/pricing" className="text-base font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Lifestyle
            </Link>
          </li>
          <li>
            <Link href="/pages/aboutus" className="text-base font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Travel
            </Link>
          </li>
          {isAuthenticated && (
            <li>
              <Link href="/create-blogs" className="text-base font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 transition-colors">
                Write Article
              </Link>
            </li>
          )}
          {!isAuthenticated ? (
            <li>
              <Link href="/signin" className="text-base font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Sign In
              </Link>
            </li>
          ) : (
            <li>
              <button onClick={handleLogout} className="text-base font-medium text-red-600 hover:text-red-700 transition-colors">
                Logout
              </button>
            </li>
          )}
        </ul>
        <button
          onClick={toggleDarkMode}
          className="btn btn-ghost btn-circle hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle dark mode"
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
      </div>
    </nav>
  );
};

export default Navigation;