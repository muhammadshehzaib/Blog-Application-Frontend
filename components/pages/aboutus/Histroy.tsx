"use client";

import React from "react";
import { motion } from "framer-motion";

const History = () => {
  const timeline = [
    {
      year: "2022",
      title: "The Beginning",
      description:
        "Started with a vision to create a platform where writers could share their stories freely and connect with readers worldwide.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      ),
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      year: "2023",
      title: "Growing Community",
      description:
        "Reached our first milestone of 10,000 active writers and launched community features to foster collaboration.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      ),
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      year: "2023",
      title: "Platform Evolution",
      description:
        "Introduced advanced writing tools, analytics, and monetization features to help writers succeed.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      ),
      gradient: "from-purple-500 to-pink-500",
    },
    {
      year: "2024",
      title: "Global Expansion",
      description:
        "Expanded to serve writers in over 100 countries and launched localization support for multiple languages.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      ),
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      year: "2024 & Beyond",
      title: "Looking Ahead",
      description:
        "Continuing to innovate with AI-powered writing assistance, enhanced collaboration tools, and new ways for writers to reach their audience.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      ),
      gradient: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <div className="relative bg-black text-white overflow-hidden py-24 border-t border-zinc-900">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]"></div>

      {/* Floating Gradient Orbs */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block mb-6 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium"
          >
            🗓️ Our Timeline
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400">
              Journey
            </span>
          </h2>
          <p className="text-xl text-zinc-400 leading-relaxed">
            From a simple idea to a thriving writing community, follow our path
            of continuous innovation and growth.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex mb-12 last:mb-0"
            >
              {/* Timeline Icon & Line */}
              <div className="flex flex-col items-center mr-6 md:mr-8">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center justify-center"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <svg
                      className="w-7 h-7 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {item.icon}
                    </svg>
                  </div>
                </motion.div>
                {index !== timeline.length - 1 && (
                  <div className="w-0.5 h-full bg-gradient-to-b from-zinc-700 to-zinc-900 mt-4"></div>
                )}
              </div>

              {/* Content Card */}
              <motion.div
                whileHover={{
                  x: 5,
                  transition: { duration: 0.3 },
                }}
                className="group flex-1 bg-zinc-950 border border-zinc-900 rounded-2xl p-6 md:p-8 hover:border-zinc-800 transition-all duration-300 overflow-hidden relative"
              >
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                <div className="relative">
                  {/* Year Badge */}
                  <div className="inline-block mb-3">
                    <span
                      className={`px-3 py-1 rounded-lg text-xs font-bold bg-gradient-to-r ${item.gradient} text-black`}
                    >
                      {item.year}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-blue-400 transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed text-base md:text-lg">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                ></motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-zinc-400 mb-6">
            Want to be part of our journey?
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(16, 185, 129, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black rounded-xl font-bold transition-all duration-300 shadow-lg shadow-emerald-500/20"
          >
            Join Our Community
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default History;