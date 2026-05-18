"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Articles", href: "/blogs", code: "01" },
  { name: "Technology", href: "/pages/services", code: "02" },
  { name: "Lifestyle", href: "/pages/pricing", code: "03" },
  { name: "Travel", href: "/pages/aboutus", code: "04" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => setIsAuthenticated(false);

  return (
    <>
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-200 ${
          isScrolled
            ? "bg-ink/85 backdrop-blur-md border-b border-rule"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <span className="font-mono text-paper-3 text-xs">
                <span className="text-accent">▎</span>
              </span>
              <span className="font-display text-paper text-[1.35rem] leading-none tracking-tight">
                Writers&apos; Haven
              </span>
              <span className="hidden md:inline font-mono text-paper-3 text-[0.65rem] tracking-label uppercase ml-1">
                v.01
              </span>
            </Link>

            {/* Desktop nav */}
            <ul className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.03, duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className="group flex items-baseline gap-1.5 px-3 py-2 text-paper-2 hover:text-paper transition-colors"
                  >
                    <span className="font-mono text-[0.65rem] text-paper-3 group-hover:text-accent transition-colors">
                      {link.code}
                    </span>
                    <span className="text-sm">{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Right actions */}
            <div className="hidden lg:flex items-center gap-2">
              {!isAuthenticated ? (
                <Link
                  href="/signin"
                  className="px-3 py-2 text-sm text-paper-2 hover:text-paper transition-colors"
                >
                  Sign in
                </Link>
              ) : (
                <button
                  onClick={handleLogout}
                  className="px-3 py-2 text-sm text-paper-2 hover:text-paper transition-colors"
                >
                  Sign out
                </button>
              )}
              <Link
                href="/create-blogs"
                className="group inline-flex items-center gap-2 border border-paper text-paper px-4 py-2 text-sm hover:bg-paper hover:text-ink transition-colors"
              >
                <span className="font-mono text-[0.7rem] opacity-60 group-hover:opacity-100">
                  [
                </span>
                <span>Write</span>
                <span className="font-mono text-[0.7rem] opacity-60 group-hover:opacity-100">
                  ]
                </span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-9 h-9 border border-rule flex items-center justify-center text-paper-2 hover:text-paper hover:border-paper-3 transition-colors"
              aria-label="Toggle menu"
            >
              <span className="font-mono text-sm">
                {isMobileMenuOpen ? "×" : "≡"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="lg:hidden border-t border-rule bg-ink overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-6 py-5 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03, duration: 0.18 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-baseline gap-3 py-2.5 text-paper-2 hover:text-paper transition-colors"
                    >
                      <span className="font-mono text-[0.65rem] text-paper-3">
                        {link.code}
                      </span>
                      <span>{link.name}</span>
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-4 mt-3 border-t border-rule flex flex-col gap-2">
                  {!isAuthenticated ? (
                    <Link
                      href="/signin"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="py-2 text-paper-2 hover:text-paper transition-colors"
                    >
                      Sign in
                    </Link>
                  ) : (
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="py-2 text-left text-paper-2 hover:text-paper transition-colors"
                    >
                      Sign out
                    </button>
                  )}
                  <Link
                    href="/create-blogs"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="inline-flex items-center justify-center gap-2 border border-paper text-paper px-4 py-2.5 hover:bg-paper hover:text-ink transition-colors"
                  >
                    <span className="font-mono text-[0.7rem] opacity-60">[</span>
                    Write
                    <span className="font-mono text-[0.7rem] opacity-60">]</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer */}
      <div className="h-16" />
    </>
  );
};

export default Navigation;
