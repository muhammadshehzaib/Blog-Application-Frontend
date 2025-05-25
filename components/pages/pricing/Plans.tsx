import React from "react";
import Link from "next/link";

const Plans = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 font-serif">
            Choose Your <span className="text-blue-600 dark:text-blue-400">Writing Journey</span>
              </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Select a plan that best fits your writing goals and aspirations. Upgrade or downgrade anytime.
              </p>
            </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Free</h3>
              <div className="flex justify-center items-baseline mb-2">
                <span className="text-5xl font-extrabold text-gray-900 dark:text-white">$0</span>
                <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">Perfect for getting started</p>
                  </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                <span className="text-gray-600 dark:text-gray-300">Up to 3 articles per month</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                <span className="text-gray-600 dark:text-gray-300">Basic writing tools</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                <span className="text-gray-600 dark:text-gray-300">Community access</span>
              </li>
            </ul>
            <Link href="/signup" className="block w-full text-center bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold py-3 rounded-lg transition duration-150">
              Get Started
            </Link>
                            </div>

          {/* Pro Plan */}
          <div className="bg-blue-600 dark:bg-blue-700 rounded-xl p-8 shadow-lg transform scale-105">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Pro</h3>
              <div className="flex justify-center items-baseline mb-2">
                <span className="text-5xl font-extrabold text-white">$15</span>
                <span className="text-blue-200">/month</span>
              </div>
              <p className="text-blue-100">For serious writers</p>
                      </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-200 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                <span className="text-white">Unlimited articles</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-200 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                <span className="text-white">Advanced writing tools</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-200 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                <span className="text-white">Analytics dashboard</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-200 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                <span className="text-white">Priority support</span>
              </li>
            </ul>
            <Link href="/signup?plan=pro" className="block w-full text-center bg-white hover:bg-gray-50 text-blue-600 font-semibold py-3 rounded-lg transition duration-150">
              Upgrade to Pro
            </Link>
                            </div>

          {/* Business Plan */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Business</h3>
              <div className="flex justify-center items-baseline mb-2">
                <span className="text-5xl font-extrabold text-gray-900 dark:text-white">$49</span>
                <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">For professional publishers</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Everything in Pro</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Custom branding</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Team collaboration</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">API access</span>
              </li>
            </ul>
            <Link href="/signup?plan=business" className="block w-full text-center bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold py-3 rounded-lg transition duration-150">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
