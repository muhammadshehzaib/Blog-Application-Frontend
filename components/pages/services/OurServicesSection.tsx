import React from "react";

const OurServicesSection = () => {
  return (
    <div className="mb-12">
      <section className="relative mx-auto py-12 md:py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0 mb-36 bg-blue-50 dark:bg-slate-800"></div>
        <div className="relative mx-auto -mb-12 max-w-6xl px-4 sm:px-6">
          <div className="mb-4">
            <div className="mb-6 mx-auto md:mb-12 text-center">
              <h2 className="font-heading mb-4 font-bold tracking-tight text-4xl md:text-5xl">
                Our Services
              </h2>
            </div>
          </div>
          <div className="grid mx-auto gap-8 md:gap-y-12 lg:grid-cols-3 sm:grid-cols-2">
            <div className="bg-white p-4 border-2 drop-shadow-xl">
              <div
                className="card flex flex-start min-w-screen-sm items-stretch h-full flex-row rounded-lg 
              "
              >
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
                    className="rtl:mr-0 rtl:ml-2 h-8 w-8 mr-4 text-blue-800 dark:text-primary-600"
                  >
                    <path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z"></path>
                  </svg>
                </div>
                <div className="mt-0.5">
                  <h3 className="text-xl font-bold">
                    Next.Js + Tailwind CSS Integration
                  </h3>
                  <p className="mt-3 text-md text-gray-500 dark:text-gray-400">
                    Nullam non sodales massa. Ut justo neque, elementum et
                    vehicula vel, pellentesque non orci.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 border-2 drop-shadow-xl">
              <div className="card flex flex-start min-w-screen-sm items-stretch h-full flex-row rounded-lg">
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
                    className="rtl:mr-0 rtl:ml-2 h-8 w-8 mr-4 text-blue-800 dark:text-primary-600"
                  >
                    <path d="M3 12l3 3l3 -3l-3 -3z"></path>
                    <path d="M15 12l3 3l3 -3l-3 -3z"></path>
                    <path d="M9 6l3 3l3 -3l-3 -3z"></path>
                    <path d="M9 18l3 3l3 -3l-3 -3z"></path>
                  </svg>
                </div>
                <div className="mt-0.5">
                  <h3 className="text-xl font-bold">Ready-to-use Components</h3>
                  <p className="mt-3 text-md text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 border-2 drop-shadow-xl">
              <div className="card flex flex-start min-w-screen-sm items-stretch h-full flex-row rounded-lg">
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
                    className="rtl:mr-0 rtl:ml-2 h-8 w-8 mr-4 text-blue-800 dark:text-primary-600"
                  >
                    <path d="M3.5 5.5l1.5 1.5l2.5 -2.5"></path>
                    <path d="M3.5 11.5l1.5 1.5l2.5 -2.5"></path>
                    <path d="M3.5 17.5l1.5 1.5l2.5 -2.5"></path>
                    <path d="M11 6l9 0"></path>
                    <path d="M11 12l9 0"></path>
                    <path d="M11 18l9 0"></path>
                  </svg>
                </div>
                <div className="mt-0.5">
                  <h3 className="text-xl font-bold">Best Practices</h3>
                  <p className="mt-3 text-md text-gray-500 dark:text-gray-400">
                    Morbi sit amet arcu vitae metus molestie auctor sit amet in
                    risus. Sed vel lacinia purus.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 border-2 drop-shadow-xl">
              <div className="card flex flex-start min-w-screen-sm items-stretch h-full flex-row rounded-lg">
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
                    className="rtl:mr-0 rtl:ml-2 h-8 w-8 mr-4 text-blue-800 dark:text-primary-600"
                  >
                    <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3"></path>
                    <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3"></path>
                    <path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                  </svg>
                </div>
                <div className="mt-0.5">
                  <h3 className="text-xl font-bold">Excellent Page Speed</h3>
                  <p className="mt-3 text-md text-gray-500 dark:text-gray-400">
                    Phasellus id cursus urna. Nullam feugiat tellus sed euismod
                    venenatis. Phasellus id cursus urna. Nullam feugiat tellus
                    sed euismod venenatis.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 border-2 drop-shadow-xl">
              <div className="card flex flex-start min-w-screen-sm items-stretch h-full flex-row rounded-lg">
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
                    className="rtl:mr-0 rtl:ml-2 h-8 w-8 mr-4 text-blue-800 dark:text-primary-600"
                  >
                    <path d="M21 7l-18 0"></path>
                    <path d="M18 10l3 -3l-3 -3"></path>
                    <path d="M6 20l-3 -3l3 -3"></path>
                    <path d="M3 17l18 0"></path>
                  </svg>
                </div>
                <div className="mt-0.5">
                  <h3 className="text-xl font-bold">
                    Search Engine Optimization (SEO)
                  </h3>
                  <p className="mt-3 text-md text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi sagittis, quam nec venenatis lobortis, mi risus tempus
                    nulla.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="bg-white p-4 border-2 drop-shadow-xl
            "
            >
              <div className="card flex flex-start min-w-screen-sm items-stretch h-full flex-row rounded-lg">
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
                    className="rtl:mr-0 rtl:ml-2 h-8 w-8 mr-4 text-blue-800 dark:text-primary-600"
                  >
                    <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"></path>
                    <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"></path>
                    <path d="M9.7 17l4.6 0"></path>
                  </svg>
                </div>
                <div className="mt-0.5">
                  <h3 className="text-xl font-bold">
                    Open to new ideas and contributions
                  </h3>
                  <p className="mt-3 text-md text-gray-500 dark:text-gray-400">
                    Maecenas urna augue, commodo vitae lectus euismod, tempor
                    aliquam arcu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurServicesSection;
