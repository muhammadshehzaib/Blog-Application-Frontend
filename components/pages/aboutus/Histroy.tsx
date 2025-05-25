import React from "react";

const History = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 font-serif">
            Our <span className="text-blue-600 dark:text-blue-400">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            From a simple idea to a thriving writing community, follow our path of continuous innovation and growth.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* First Timeline Item */}
          <div className="flex mb-12">
            <div className="flex flex-col items-center mr-6">
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </div>
              <div className="w-px h-full bg-blue-200 dark:bg-blue-800"></div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">The Beginning (2022)</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Started with a vision to create a platform where writers could share their stories freely and connect with readers worldwide.
              </p>
            </div>
          </div>

          {/* Second Timeline Item */}
          <div className="flex mb-12">
            <div className="flex flex-col items-center mr-6">
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <div className="w-px h-full bg-blue-200 dark:bg-blue-800"></div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Growing Community (2023)</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Reached our first milestone of 10,000 active writers and launched community features to foster collaboration.
              </p>
            </div>
          </div>

          {/* Third Timeline Item */}
          <div className="flex mb-12">
            <div className="flex flex-col items-center mr-6">
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div className="w-px h-full bg-blue-200 dark:bg-blue-800"></div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Platform Evolution (2023)</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Introduced advanced writing tools, analytics, and monetization features to help writers succeed.
              </p>
            </div>
          </div>

          {/* Fourth Timeline Item */}
          <div className="flex mb-12">
            <div className="flex flex-col items-center mr-6">
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
              </div>
              <div className="w-px h-full bg-blue-200 dark:bg-blue-800"></div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Global Expansion (2024)</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Expanded to serve writers in over 100 countries and launched localization support for multiple languages.
              </p>
            </div>
          </div>

          {/* Fifth Timeline Item */}
          <div className="flex">
            <div className="flex flex-col items-center mr-6">
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Looking Ahead (2024 & Beyond)</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Continuing to innovate with AI-powered writing assistance, enhanced collaboration tools, and new ways for writers to reach their audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
