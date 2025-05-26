'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import FooterSubscribe from "@/components/blogs/FooterSubscribe";
import Testimonials from '@/components/blogs/content/Testimonials';

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

  // Skeleton loader component
  const SkeletonLoader = () => (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
      <div className="h-48 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
      <div className="p-6">
        <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4"></div>
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-2/3"></div>
      </div>
    </div>
  );

  return (
    <main className="bg-white dark:bg-gray-900">
        <Navigation />

      {/* What you get with ScribbleSphere Section */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 mt-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 font-serif">
              What you get with <span className="text-blue-600 dark:text-blue-400">Writers&apos; Haven</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Everything you need to create, publish, and grow your blog
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-blue-600 dark:text-blue-400 mb-6">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Rich Text Editor</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Write beautiful content with our powerful editor featuring markdown support and real-time preview.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-blue-600 dark:text-blue-400 mb-6">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Analytics Dashboard</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Track your blog&apos;s performance with detailed analytics and reader insights.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-blue-600 dark:text-blue-400 mb-6">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Community Features</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Connect with other writers, collaborate, and grow your audience together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 font-serif">
              Featured <span className="text-blue-600 dark:text-blue-400">Blog Posts</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Discover trending stories from our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              <>
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
              </>
            ) : blogData.length > 0 ? (
              blogData.slice(0, 3).map((blog) => (
                <div key={blog._id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-blue-600 dark:text-blue-400 mb-2">
                      {blog.category?.category || "General"}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {blog.content.length > 150 ? `${blog.content.substring(0, 150)}...` : blog.content}
                    </p>
                    <div className="flex justify-between items-center">
                      <Link href={`/blogs/${blog._id}`} className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
                        Read More →
                      </Link>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(blog.createdAt).toLocaleDateString(undefined, {
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center text-gray-600 dark:text-gray-300">
                No blog posts available at the moment.
              </div>
            )}
          </div>
        </div>
      </section>
          <Testimonials/>
      {/* Join Our Community Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6 font-serif">
                Join Our Growing Community of Writers
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Be part of a thriving ecosystem of creative minds, storytellers, and thought leaders
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div className="text-center p-6 bg-white bg-opacity-10 rounded-xl backdrop-blur-lg">
                <div className="text-4xl font-bold text-white mb-2">50K+</div>
                <div className="text-blue-100">Active Writers</div>
              </div>
              <div className="text-center p-6 bg-white bg-opacity-10 rounded-xl backdrop-blur-lg">
                <div className="text-4xl font-bold text-white mb-2">100K+</div>
                <div className="text-blue-100">Published Articles</div>
              </div>
              <div className="text-center p-6 bg-white bg-opacity-10 rounded-xl backdrop-blur-lg">
                <div className="text-4xl font-bold text-white mb-2">2M+</div>
                <div className="text-blue-100">Monthly Readers</div>
              </div>
              <div className="text-center p-6 bg-white bg-opacity-10 rounded-xl backdrop-blur-lg">
                <div className="text-4xl font-bold text-white mb-2">150+</div>
                <div className="text-blue-100">Countries Reached</div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 rounded-2xl backdrop-blur-lg p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Start Your Writing Journey Today</h3>
                  <p className="text-blue-100 mb-6">
                    Join Writers&apos; Haven and turn your passion for writing into engaging content that reaches readers worldwide.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-blue-100">
                      <svg className="w-5 h-5 mr-3 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Free getting started guides
                    </li>
                    <li className="flex items-center text-blue-100">
                      <svg className="w-5 h-5 mr-3 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Access to writer&apos;s community
                    </li>
                    <li className="flex items-center text-blue-100">
                      <svg className="w-5 h-5 mr-3 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Professional writing tools
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-6 py-4 rounded-lg bg-white bg-opacity-20 border border-blue-300 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                  <button className="w-full px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition duration-300">
                    Get Started for Free
                  </button>
                  <p className="text-sm text-blue-200 text-center">
                    No credit card required • Free 14-day trial
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        <Footer />
    </main>
  );
}
