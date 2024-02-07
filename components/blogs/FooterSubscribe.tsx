import React from "react";

const FooterSubscribe = () => {
    return (
        <div>
            <section className="bg-[#1E3A8A] text-gray-200" >
                <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:pt-20">
                    <div className="row-gap-10 grid gap-6 md:grid-cols-2">
                        <div className="mx-auto md:my-auto md:ml-0 md:pb-6 md:pr-24">
                            <h2 className="mb-3 flex justify-center text-6xl font-bold md:justify-start">
                                Next.js + Tailwind CSS
                            </h2>
                            <p className="text-center text-xl text-gray-200 dark:text-slate-300 md:text-left">
                                Aliquam sodales porttitor lacus ac tristique. Etiam posuere elit
                                at leo feugiat sodales. Sed ac mauris quis sem tempor
                                condimentum non at metus.
                            </p>
                        </div>
                        <div className="relative -mb-6">
                            <div>
                                <a
                                    href="/"
                                    className="w-full sm:mb-0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="card mb-6 px-5 py-4 bg-white">
                                        <div className="flex items-center justify-between">
                                            <div className="w-full">
                                                <h3 className="mb-3 text-xl font-bold text-gray-700 dark:text-white">
                                                    Learn more
                                                </h3>
                                                <p className="text-gray-600 dark:text-slate-400">
                                                    className aptent taciti sociosqu ad litora torquent
                                                    per conubia.
                                                </p>
                                            </div>
                                            <div className="flex h-10 w-10 items-center justify-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="h-6 w-6 text-primary-600 dark:text-slate-200"
                                                >
                                                    <path d="M9 6l6 6l-6 6"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <div className="card mb-6 px-5 py-4 bg-white">
                                    <div className="flex items-center justify-between">
                                        <div className="w-full">
                                            <h3 className="mb-3 text-xl font-bold text-gray-700 dark:text-white">
                                                Subscribe
                                            </h3>
                                            <p className="text-gray-600 dark:text-slate-400">
                                                Morbi orci nunc, euismod ac dui id, convallis.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <form className="rounded-md border border-gray-400 bg-white shadow-md">
                                            <div className="flex items-center">
                                                <span className="rounded-bl rounded-tl border-r-[1px] border-gray-400 px-2 py-2 dark:bg-[#3b3b3b]">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="h-6 w-6 text-[#2563EB] dark:text-gray-400
                                                        
                                                        "

                                                    >
                                                        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                                                        <path d="M3 7l9 6l9 -6"></path>
                                                    </svg>
                                                </span>
                                                <input
                                                    placeholder="Enter your email address"
                                                    className="w-full py-2 pl-2 pr-4 dark:text-gray-300"
                                                    type="email"
                                                    name="email"
                                                />
                                                <button
                                                    type="submit"
                                                    className="rounded-br rounded-tr border-l-[1px] border-gray-400 bg-primary-600 px-4 py-2 text-white bg-[#2563EB]"
                                                >
                                                    Subscribe
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FooterSubscribe;
