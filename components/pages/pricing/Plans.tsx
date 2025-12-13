"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Plans = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "Perfect for getting started",
      features: [
        "Up to 3 articles per month",
        "Basic writing tools",
        "Community access",
      ],
      buttonText: "Get Started",
      buttonLink: "/signup",
      gradient: "from-zinc-500 to-zinc-600",
      featured: false,
    },
    {
      name: "Pro",
      price: "$15",
      period: "/month",
      description: "For serious writers",
      features: [
        "Unlimited articles",
        "Advanced writing tools",
        "Analytics dashboard",
        "Priority support",
      ],
      buttonText: "Upgrade to Pro",
      buttonLink: "/signup?plan=pro",
      gradient: "from-emerald-500 to-teal-500",
      featured: true,
    },
    {
      name: "Business",
      price: "$49",
      period: "/month",
      description: "For professional publishers",
      features: [
        "Everything in Pro",
        "Custom branding",
        "Team collaboration",
        "API access",
      ],
      buttonText: "Contact Sales",
      buttonLink: "/signup?plan=business",
      gradient: "from-blue-500 to-cyan-500",
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

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
        className="absolute top-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
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
        className="absolute bottom-20 left-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Choose Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400">
              Writing Journey
            </span>
          </h2>
          <p className="text-xl text-zinc-400 leading-relaxed">
            Select a plan that best fits your writing goals and aspirations.
            Upgrade or downgrade anytime.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: plan.featured ? 0 : -8,
                transition: { duration: 0.3 },
              }}
              className={`group relative bg-zinc-950 border rounded-3xl p-8 transition-all duration-300 overflow-hidden ${
                plan.featured
                  ? "border-emerald-500/50 scale-105 md:scale-110 shadow-2xl shadow-emerald-500/20"
                  : "border-zinc-900 hover:border-zinc-800"
              }`}
            >
              {/* Featured Badge */}
              {plan.featured && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-emerald-500 to-teal-500 text-black text-xs font-bold px-4 py-1 rounded-bl-xl rounded-tr-3xl">
                  MOST POPULAR
                </div>
              )}

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 ${
                  plan.featured ? "opacity-5" : "group-hover:opacity-5"
                } transition-opacity duration-500`}
              ></div>

              {/* Content */}
              <div className="relative">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {plan.name}
                  </h3>
                  <div className="flex justify-center items-baseline mb-2">
                    <span className="text-5xl font-extrabold text-white">
                      {plan.price}
                    </span>
                    <span className="text-zinc-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-zinc-400">{plan.description}</p>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * featureIndex }}
                      className="flex items-center"
                    >
                      <div
                        className={`w-6 h-6 mr-3 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center flex-shrink-0`}
                      >
                        <svg
                          className="w-4 h-4 text-black"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-zinc-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                {plan.featured ? (
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href={plan.buttonLink}
                      className={`block w-full text-center bg-gradient-to-r ${plan.gradient} text-black font-bold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40`}
                    >
                      {plan.buttonText}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href={plan.buttonLink}
                      className="block w-full text-center bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 text-white font-semibold py-4 rounded-xl transition-all duration-300"
                    >
                      {plan.buttonText}
                    </Link>
                  </motion.div>
                )}
              </div>

              {/* Bottom Accent Line */}
              {!plan.featured && (
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${plan.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                ></motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-zinc-500">
            All plans include a 14-day free trial. Need a custom plan?{" "}
            <Link
              href="/contact"
              className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors duration-300"
            >
              Contact us
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Plans;