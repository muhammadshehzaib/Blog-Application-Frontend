import React from "react";

const Plans = () => {
  return (
    <div>
      <section className="relative not-prose scroll-mt-[72px]">
        <div className="absolute inset-0 bg-blue-50 dark:bg-slate-800"></div>
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default">
          <div className="mb-4">
            <div className="mb-6 mx-auto md:mb-12 text-center max-w-5xl">
              <h2 className="font-heading mb-4 font-bold tracking-tight text-2xl sm:text-3xl">
                Our plans
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400 text-center">
                Discover our flexible pricing options designed to fit your needs
                perfectly.{" "}
                <span className="hidden md:inline">
                  No matter the size of your project, we have the right plan for
                  you.
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-stretch justify-center">
            <div className="grid grid-cols-3 gap-3 dark:text-white sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              <div className="col-span-3 mx-auto flex w-full sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 bg-white p-6 rounded-lg drop-shadow-xl">
                <div className="card max-w-sm flex flex-col justify-between text-center ">
                  <div className="px-2 py-0">
                    <h3 className="text-center text-xl font-semibold uppercase leading-6 tracking-wider mb-2">
                      basic
                    </h3>
                    <p className="font-light sm:text-lg text-gray-600 dark:text-slate-400">
                      Optimal choice for personal use
                    </p>
                    <div className="my-8">
                      <div className="flex items-center justify-center text-center mb-1">
                        <span className="text-5xl">$</span>
                        <span className="text-6xl font-extrabold">29</span>
                      </div>
                      <span className="text-base leading-6 lowercase text-gray-600 dark:text-slate-400">
                        per month
                      </span>
                    </div>
                    <div className="my-8 md:my-10 space-y-2 text-left">
                      <div className="grid mx-auto max-w-4xl gap-2 md:gap-y-2">
                        <div>
                          <div className="flex items-start space-x-2">
                            <div className="flex justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="w-4 h-4 mt-1.5 rtl:mr-0 rtl:ml-2 mr-1.5 flex items-center justify-center rounded-full border-2 border-primary-600 bg-primary-600 text-white dark:text-slate-200"
                              >
                                <path d="M5 12l5 5l10 -10"></path>
                              </svg>
                            </div>
                            <div className="mt-0.5">
                              <p className="text-gray-600 dark:text-slate-400">
                                Access to a selection of professionally designed
                                website templates.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-start space-x-2">
                            <div className="flex justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="w-4 h-4 mt-1.5 rtl:mr-0 rtl:ml-2 mr-1.5 flex items-center justify-center rounded-full border-2 border-primary-600 bg-primary-600 text-white dark:text-slate-200"
                              >
                                <path d="M5 12l5 5l10 -10"></path>
                              </svg>
                            </div>
                            <div className="mt-0.5">
                              <p className="text-gray-600 dark:text-slate-400">
                                Email support to assist you with any questions
                                or issues.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-start space-x-2">
                            <div className="flex justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="w-4 h-4 mt-1.5 rtl:mr-0 rtl:ml-2 mr-1.5 flex items-center justify-center rounded-full border-2 border-primary-600 bg-primary-600 text-white dark:text-slate-200"
                              >
                                <path d="M5 12l5 5l10 -10"></path>
                              </svg>
                            </div>
                            <div className="mt-0.5">
                              <p className="text-gray-600 dark:text-slate-400">
                                Adequate storage space for small to medium-sized
                                websites.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-start space-x-2">
                            <div className="flex justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="w-4 h-4 mt-1.5 rtl:mr-0 rtl:ml-2 mr-1.5 flex items-center justify-center rounded-full border-2 border-primary-600 bg-primary-600 text-white dark:text-slate-200"
                              >
                                <path d="M5 12l5 5l10 -10"></path>
                              </svg>
                            </div>
                            <div className="mt-0.5">
                              <p className="text-gray-600 dark:text-slate-400">
                                Core features for a functional online presence,
                                such as SEO tools and contact forms.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-auto cursor-pointer">
                    <a
                      className="inline-flex items-center justify-center w-full sm:mb-0 btn drop-shadow-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="/"
                    >
                      Free 7-day trial
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-span-3 mx-auto flex w-full sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 bg-white p-6 rounded-lg drop-shadow-xl">
                <div className="card max-w-sm flex flex-col justify-between text-center">
                  <div className="absolute right-[-5px] rtl:right-auto rtl:left-[-5px] top-[-5px] z-[1] h-[100px] w-[100px] overflow-hidden text-right">
                    <span className="absolute top-[19px] right-[-21px] rtl:right-auto rtl:left-[-21px] block w-full rotate-45 rtl:-rotate-45 bg-green-700 text-center text-[10px] font-bold uppercase leading-5 text-white shadow-[0_3px_10px_-5px_rgba(0,0,0,0.3)] before:absolute before:left-0 before:top-full before:z-[-1] before:border-[3px] before:border-r-transparent before:border-b-transparent before:border-l-green-800 before:border-t-green-800  after:absolute after:right-0 after:top-full after:z-[-1] after:border-[3px] after:border-l-transparent after:border-b-transparent after:border-r-green-800 after:border-t-green-800 ">
                      Popular
                    </span>
                  </div>
                  <div className="px-2 py-0">
                    <h3 className="text-center text-xl font-semibold uppercase leading-6 tracking-wider mb-2">
                      standard
                    </h3>
                    <p className="font-light sm:text-lg text-gray-600 dark:text-slate-400">
                      Optimal choice for small teams
                    </p>
                    <div className="my-8">
                      <div className="flex items-center justify-center text-center mb-1">
                        <span className="text-5xl">$</span>
                        <span className="text-6xl font-extrabold">69</span>
                      </div>
                      <span className="text-base leading-6 lowercase text-gray-600 dark:text-slate-400">
                        per month
                      </span>
                    </div>
                    <div className="my-8 md:my-10 space-y-2 text-left">
                      <div className="grid mx-auto max-w-4xl gap-2 md:gap-y-2">
                        <div>
                          <div className="flex items-start space-x-2">
                            <div className="flex justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="w-4 h-4 mt-1.5 rtl:mr-0 rtl:ml-2 mr-1.5 flex items-center justify-center rounded-full border-2 border-primary-600 bg-primary-600 text-white dark:text-slate-200"
                              >
                                <path d="M5 12l5 5l10 -10"></path>
                              </svg>
                            </div>
                            <div className="mt-0.5">
                              <p className="text-gray-600 dark:text-slate-400">
                                A larger variety of premium website templates to
                                choose from.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-start space-x-2">
                            <div className="flex justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="w-4 h-4 mt-1.5 rtl:mr-0 rtl:ml-2 mr-1.5 flex items-center justify-center rounded-full border-2 border-primary-600 bg-primary-600 text-white dark:text-slate-200"
                              >
                                <path d="M5 12l5 5l10 -10"></path>
                              </svg>
                            </div>
                            <div className="mt-0.5">
                              <p className="text-gray-600 dark:text-slate-400">
                                Faster response times and priority customer
                                support.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-start space-x-2">
                            <div className="flex justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="w-4 h-4 mt-1.5 rtl:mr-0 rtl:ml-2 mr-1.5 flex items-center justify-center rounded-full border-2 border-primary-600 bg-primary-600 text-white dark:text-slate-200"
                              >
                                <path d="M5 12l5 5l10 -10"></path>
                              </svg>
                            </div>
                            <div className="mt-0.5">
                              <p className="text-gray-600 dark:text-slate-400">
                                More storage space to accommodate growing
                                websites and content.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-start space-x-2">
                            <div className="flex justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="w-4 h-4 mt-1.5 rtl:mr-0 rtl:ml-2 mr-1.5 flex items-center justify-center rounded-full border-2 border-primary-600 bg-primary-600 text-white dark:text-slate-200"
                              >
                                <path d="M5 12l5 5l10 -10"></path>
                              </svg>
                            </div>
                            <div className="mt-0.5">
                              <p className="text-gray-600 dark:text-slate-400">
                                Enable e-commerce capabilities to sell products
                                or services online.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-auto cursor-pointer">
                    <a
                      className="inline-flex items-center justify-center w-full sm:mb-0 btn btn-info"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="/"
                    >
                      Free 15-day trial
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-span-3 mx-auto flex w-full sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 bg-white p-6 rounded-lg drop-shadow-xl">
                <div className="card max-w-sm flex flex-col justify-between text-center">
                  <div className="px-2 py-0">
                    <h3 className="text-center text-xl font-semibold uppercase leading-6 tracking-wider mb-2">
                      premium
                    </h3>
                    <p className="font-light sm:text-lg text-gray-600 dark:text-slate-400">
                      Optimal choice for companies
                    </p>
                    <div className="my-8">
                      <div className="flex items-center justify-center text-center mb-1">
                        <span className="text-5xl">$</span>
                        <span className="text-6xl font-extrabold">199</span>
                      </div>
                      <span className="text-base leading-6 lowercase text-gray-600 dark:text-slate-400">
                        per month
                      </span>
                    </div>
                    <div className="my-8 md:my-10 space-y-2 text-left">
                      <div className="grid mx-auto max-w-4xl gap-2 md:gap-y-2">
                        <div>
                          <div className="flex items-start space-x-2">
                            <div className="flex justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="w-4 h-4 mt-1.5 rtl:mr-0 rtl:ml-2 mr-1.5 flex items-center justify-center rounded-full border-2 border-primary-600 bg-primary-600 text-white dark:text-slate-200"
                              >
                                <path d="M5 12l5 5l10 -10"></path>
                              </svg>
                            </div>
                            <div className="mt-0.5">
                              <p className="text-gray-600 dark:text-slate-400">
                                Access to exclusive and customizable premium
                                website templates.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-start space-x-2">
                            <div className="flex justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="w-4 h-4 mt-1.5 rtl:mr-0 rtl:ml-2 mr-1.5 flex items-center justify-center rounded-full border-2 border-primary-600 bg-primary-600 text-white dark:text-slate-200"
                              >
                                <path d="M5 12l5 5l10 -10"></path>
                              </svg>
                            </div>
                            <div className="mt-0.5">
                              <p className="text-gray-600 dark:text-slate-400">
                                Round-the-clock customer support for immediate
                                assistance.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-start space-x-2">
                            <div className="flex justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="w-4 h-4 mt-1.5 rtl:mr-0 rtl:ml-2 mr-1.5 flex items-center justify-center rounded-full border-2 border-primary-600 bg-primary-600 text-white dark:text-slate-200"
                              >
                                <path d="M5 12l5 5l10 -10"></path>
                              </svg>
                            </div>
                            <div className="mt-0.5">
                              <p className="text-gray-600 dark:text-slate-400">
                                No limits on storage, ideal for extensive
                                websites and media.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-start space-x-2">
                            <div className="flex justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="w-4 h-4 mt-1.5 rtl:mr-0 rtl:ml-2 mr-1.5 flex items-center justify-center rounded-full border-2 border-primary-600 bg-primary-600 text-white dark:text-slate-200"
                              >
                                <path d="M5 12l5 5l10 -10"></path>
                              </svg>
                            </div>
                            <div className="mt-0.5">
                              <p className="text-gray-600 dark:text-slate-400">
                                Advanced SEO, analytics, and marketing tools for
                                optimal performance and growth.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-auto cursor-pointer">
                    <a
                      className="inline-flex items-center justify-center w-full sm:mb-0 btn drop-shadow-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="/"
                    >
                      Free 30-day trial
                    </a>
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

export default Plans;
("");
