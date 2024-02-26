import React from "react";

const HeroSection = () => {
  return (
    <div>
      <section className=" bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="mx-auto max-w-4xl pb-10 text-center md:pb-16">
              <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
                Demo Pricing Page
              </p>
              <h1 className="leading-tighter font-heading mb-6 text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
                Plans and Prices
              </h1>
              <div className="mx-auto max-w-3xl">
                <p className="mb-6 text-xl font-normal text-gray-600 dark:text-slate-400">
                  <span className="hidden md:inline">
                    Here, you&apos;ll find a clear breakdown of our service
                    plans and their respective features. Whether you&apos;re a
                    small business or a large enterprise, we have options
                    tailored to your needs.
                  </span>{" "}
                  You can choose the plan that best suits your goals!
                </p>
                <div className="flex max-w-none flex-col flex-nowrap gap-4 px-4 sm:flex-row sm:justify-center"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
