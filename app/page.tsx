'use client'
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';

interface Blog {
  _id: string;
  status: string;
  createdAt: string;
  title: string;
  image: string;
  content: string;
  author: string;
  category?: {
    category: string;
  };
}

export default function Home() {
  const [blogData, setBlogData] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`);
        if (!response.ok) {
          throw new Error("Failed to fetch blog data");
        }
        const data: Blog[] = await response.json();
        setBlogData(data.filter(blog => blog.status === "Approved"));
      } catch (error: any) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const SkeletonLoader = () => (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg border border-zinc-800"
    >
      <div className="h-56 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 animate-pulse"></div>
      <div className="p-6 space-y-4">
        <div className="h-4 w-24 bg-zinc-800 rounded-full animate-pulse"></div>
        <div className="h-6 bg-zinc-800 rounded-lg animate-pulse"></div>
        <div className="space-y-2">
          <div className="h-4 bg-zinc-800 rounded animate-pulse"></div>
          <div className="h-4 bg-zinc-800 rounded animate-pulse w-2/3"></div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <main className="bg-black text-white overflow-hidden">
      {/* Hero Section with Parallax */}
      <Navigation />
      <motion.section 
        style={{ opacity }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]"></div>
        
        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-6xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block mb-6 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium"
          >
            ✨ Welcome to the Future of Blogging
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            We Turn Ideas Into{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400">
              Stories
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Where creative minds converge to craft compelling narratives that resonate with millions of readers worldwide
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(16, 185, 129, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black rounded-xl font-semibold transition-all duration-300"
            >
              Start Writing Today
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-xl font-semibold transition-all duration-300"
            >
              Explore Stories
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-zinc-700 rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-emerald-400 rounded-full"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section className="py-32 relative border-t border-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-4 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-emerald-400 text-sm font-medium"
            >
              FEATURES
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Everything You Need to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
                Succeed
              </span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Powerful tools designed for modern content creators
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                ),
                title: "Rich Text Editor",
                description: "Write beautiful content with our powerful editor featuring markdown support and real-time preview.",
                gradient: "from-emerald-500 to-teal-500",
                stat: "50K+",
                statLabel: "Active Writers"
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                ),
                title: "Advanced Analytics",
                description: "Track your blog's performance with detailed analytics and reader insights in real-time.",
                gradient: "from-blue-500 to-cyan-500",
                stat: "2M+",
                statLabel: "Monthly Views"
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                ),
                title: "Global Community",
                description: "Connect with writers worldwide, collaborate, and grow your audience exponentially.",
                gradient: "from-purple-500 to-pink-500",
                stat: "150+",
                statLabel: "Countries"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-zinc-950 border border-zinc-900 rounded-2xl p-8 hover:border-zinc-800 transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative">
                  <motion.div 
                    className={`w-14 h-14 mb-6 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {feature.icon}
                    </svg>
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-400 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="flex items-end gap-2">
                    <span className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${feature.gradient}`}>
                      {feature.stat}
                    </span>
                    <span className="text-zinc-500 text-sm mb-1">{feature.statLabel}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Blog Posts Section */}
      <section className="py-32 relative border-t border-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-4 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-blue-400 text-sm font-medium"
            >
              FEATURED CONTENT
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Stories That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Matter
              </span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Discover the most impactful content from our community
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="wait">
              {isLoading ? (
                <>
                  <SkeletonLoader />
                  <SkeletonLoader />
                  <SkeletonLoader />
                </>
              ) : blogData.length > 0 ? (
                blogData.slice(0, 3).map((blog, index) => (
                  <motion.div
                    key={blog._id}
                    variants={itemVariants}
                    onHoverStart={() => setHoveredCard(blog._id)}
                    onHoverEnd={() => setHoveredCard(null)}
                    className="group relative bg-zinc-950 border border-zinc-900 rounded-2xl overflow-hidden hover:border-zinc-800 transition-all duration-300"
                  >
                    <div className="relative h-64 overflow-hidden bg-zinc-900">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"
                        initial={{ opacity: 0.6 }}
                        animate={{ opacity: hoveredCard === blog._id ? 0.8 : 0.6 }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                      />
                      <motion.div
                        className="absolute top-4 left-4 z-20"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span className="px-3 py-1.5 bg-emerald-500/90 backdrop-blur-sm text-black rounded-lg text-xs font-bold uppercase tracking-wider">
                          {blog.category?.category || "General"}
                        </span>
                      </motion.div>
                    </div>
                    
                    <div className="p-6">
                      <motion.h3 
                        className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-emerald-400 transition-colors duration-300"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {blog.title}
                      </motion.h3>
                      <p className="text-zinc-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                        {blog.content.length > 120 ? `${blog.content.substring(0, 120)}...` : blog.content}
                      </p>
                      <div className="flex justify-between items-center pt-4 border-t border-zinc-900">
                        <motion.a
                          href={`/blogs/${blog._id}`}
                          className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-semibold text-sm group"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          Read Article
                          <motion.svg 
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            animate={{ x: hoveredCard === blog._id ? 5 : 0 }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </motion.svg>
                        </motion.a>
                        <span className="text-xs text-zinc-500 uppercase tracking-wider">
                          {new Date(blog.createdAt).toLocaleDateString(undefined, {
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-3 text-center text-zinc-500 py-20">
                  No blog posts available at the moment.
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden border-t border-zinc-900">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]"></div>
        
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="inline-block mb-6 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-emerald-400 text-sm font-medium"
              >
                JOIN THE MOVEMENT
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-bold mb-6">
                Stop Losing{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
                  Readers
                </span>
              </h2>
              <p className="text-xl text-zinc-400 mb-8 max-w-3xl mx-auto">
                Join thousands of writers who&apos;ve transformed their content into revenue-generating machines
              </p>
            </div>

            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { number: "+40%", label: "Avg. Growth", color: "from-emerald-400 to-teal-400" },
                { number: "50K+", label: "Active Writers", color: "from-blue-400 to-cyan-400" },
                { number: "2M+", label: "Monthly Readers", color: "from-purple-400 to-pink-400" },
                { number: "150+", label: "Countries", color: "from-orange-400 to-red-400" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-6 bg-zinc-950 border border-zinc-900 rounded-2xl hover:border-zinc-800 transition-all duration-300"
                >
                  <motion.div 
                    className={`text-4xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-zinc-500 text-sm uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="bg-zinc-950 border border-zinc-900 rounded-3xl p-8 md:p-12"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid md:grid-cols-5 gap-8 items-center">
                <div className="md:col-span-3">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    Start Your Journey{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
                      Today
                    </span>
                  </h3>
                  <p className="text-zinc-400 mb-8 leading-relaxed">
                    Join Writers&apos; Haven and transform your passion into profit. Get access to exclusive tools, analytics, and a global community.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Advanced SEO optimization tools",
                      "Real-time collaboration features",
                      "Priority support & guidance"
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center text-zinc-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="w-5 h-5 mr-3 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-2 space-y-4">
                  <motion.input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-6 py-4 bg-black border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors duration-300"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.button 
                    className="w-full px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black rounded-xl font-bold transition-all duration-300"
                    whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(16, 185, 129, 0.4)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started Free
                  </motion.button>
                  <p className="text-xs text-zinc-600 text-center">
                    No credit card required • 14-day free trial • Cancel anytime
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}