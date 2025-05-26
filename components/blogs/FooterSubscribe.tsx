import React from "react";

const FooterSubscribe = () => {
    return (
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

    );
};

export default FooterSubscribe;
