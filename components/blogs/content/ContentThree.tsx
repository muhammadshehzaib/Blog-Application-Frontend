import React from "react";
import Gas from "../../../images/gas.webp";
import Image from "next/image";

const ContentThree = () => {
  return (
    <div>
      <section className="relative not-prose scroll-mt-[72px]">
        <div className="absolute inset-0 bg-transparent"></div>
        <div className="relative mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default max-w-6xl">
          <div className="flex flex-col gap-8 md:gap-12  md:flex-row">
            <div className="md:py-4 md:pr-16 md:rtl:pr-0 md:rtl:pl-16 md:basis-1/2">
              <div className="mb-4">
                <div className="mb-6 mx-auto md:mb-12 text-left rtl:text-right">
                  <h2 className="font-heading mb-4 font-bold tracking-tight text-3xl sm:text-4xl">
                    Sed ac magna sit amet risus tristique interdum.
                  </h2>
                </div>
              </div>
              <div className="">
                <div className="flex">
                  <div className="flex flex-col items-center mr-4 rtl:mr-0 rtl:ml-4">
                    <div className="flex items-center justify-center ">
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
                        className="w-10 h-10 p-2 rounded-full border-2 text-primary border-primary-900"
                      >
                        <path d="M12 5l0 14"></path>
                        <path d="M18 13l-6 6"></path>
                        <path d="M6 13l6 6"></path>
                      </svg>
                    </div>
                    <div className="w-px h-full bg-black/10 dark:bg-slate-400/50"></div>
                  </div>
                  <div className="pt-1 pb-8">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-slate-300 mb-2">
                      Step 1
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi sagittis, quam nec venenatis lobortis, mirisus
                      tempus nulla, sed porttitor est nibh at nulla. Praesent
                      placerat enim ut ex tincidunt vehicula. Fusce sit amet dui
                      tellus.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col items-center mr-4 rtl:mr-0 rtl:ml-4">
                    <div className="flex items-center justify-center ">
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
                        className="w-10 h-10 p-2 rounded-full border-2 text-primary border-primary-900"
                      >
                        <path d="M12 5l0 14"></path>
                        <path d="M18 13l-6 6"></path>
                        <path d="M6 13l6 6"></path>
                      </svg>
                    </div>
                    <div className="w-px h-full bg-black/10 dark:bg-slate-400/50"></div>
                  </div>
                  <div className="pt-1 pb-8">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-slate-300 mb-2">
                      Step 2
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi sagittis, quam nec venenatis lobortis, mirisus
                      tempus nulla, sed porttitor est nibh at nulla.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col items-center mr-4 rtl:mr-0 rtl:ml-4">
                    <div className="flex items-center justify-center ">
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
                        className="w-10 h-10 p-2 rounded-full border-2 text-primary border-primary-900"
                      >
                        <path d="M12 5l0 14"></path>
                        <path d="M18 13l-6 6"></path>
                        <path d="M6 13l6 6"></path>
                      </svg>
                    </div>
                    <div className="w-px h-full bg-black/10 dark:bg-slate-400/50"></div>
                  </div>
                  <div className="pt-1 pb-8">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-slate-300 mb-2">
                      Step 3
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi sagittis, quam nec venenatis lobortis, mirisus
                      tempus nulla, sed porttitor est nibh at nulla.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col items-center mr-4 rtl:mr-0 rtl:ml-4">
                    <div className="flex items-center justify-center text-slate-200 rounded-full bg-primary-900">
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
                        className="w-10 h-10 p-2 rounded-full border-2 text-primary border-primary-900"
                      >
                        <path d="M5 12l5 5l10 -10"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="pt-1 ">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-slate-300 mb-2">
                      Ready!
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative md:basis-1/2">
              <Image
                src={Gas.src}
                alt="Steps image"
                loading="lazy"
                width="400"
                height="768"
                decoding="async"
                data-nimg="1"
                className="inset-0 object-cover object-top w-full rounded-md shadow-lg md:absolute md:h-full bg-gray-400 dark:bg-slate-700"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentThree;
