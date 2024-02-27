import React from "react";
import Image1 from "../../../images/aboutus/hero2.webp";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div>
      <section className="mt-[-72px] bg-blue-50 dark:bg-slate-800">
        <div className="mx-auto max-w-[100%] px-4 pt-[72px] sm:px-6 md:flex md:h-screen 2xl:h-auto flex-col">
          <div className="block py-12 text-center md:flex md:py-12 md:text-left lg:py-16">
            <div className="mx-auto flex max-w-5xl basis-[56%] items-center">
              <div className="max-w-3xl pb-12 pr-0 md:py-0 md:pr-8 md:pb-0 lg:pr-16">
                <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-primary-200">
                  About Us Demo Page
                </p>
                <h1 className="leading-tighter font-heading mb-4 px-4 text-5xl font-bold tracking-tighter md:px-0 md:text-[3.48rem]">
                  Great companies are made by great people
                </h1>
                <div className="mx-auto max-w-3xl">
                  <p className="mb-8 text-xl font-normal text-gray-600 dark:text-slate-400">
                    Vivamus venenatis, lectus a pellentesque placerat, felis
                    tellus ultrices eros, et aliquam sapien nibh sed sem. Fusce
                    ut ante eget purus viverra malesuada. Morbi eget mi maximus,
                    ultricies urna eget, tristique lorem. Fusce cursus venenatis
                    quam, a blandit lectus vulputate id. Praesent id interdum
                    orci, vitae condimentum dui.
                  </p>
                  <div className="flex max-w-none flex-col flex-nowrap justify-center gap-4 sm:flex-row md:m-0 md:justify-start">
                    <div className="flex w-auto cursor-pointer">
                      <a
                        className="inline-flex items-center justify-center w-full sm:mb-0 btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/"
                      >
                        View jobs
                      </a>
                    </div>
                    <div className="flex w-auto cursor-pointer">
                      <a
                        className="inline-flex items-center justify-center w-full sm:mb-0 btn"
                        href="/contact"
                      >
                        Contact us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="block flex-1 items-center md:flex">
              <div className="relative m-auto h-full max-w-4xl object-cover">
                <Image
                  src={Image1.src}
                  alt="Hero TailNext"
                  loading="eager"
                  width="540"
                  height="405"
                  decoding="async"
                  data-nimg="1"
                  className="mx-auto h-full w-auto rounded-md bg-gray-400 object-cover drop-shadow-2xl dark:bg-slate-700"
                  sizes="(min-width: 1920px) 749px, (min-width: 1540px) 43.89vw, (min-width: 1360px) 542px, (min-width: 780px) calc(39.29vw + 16px), calc(96.52vw - 22px)"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
