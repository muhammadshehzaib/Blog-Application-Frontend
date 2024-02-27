import React from "react";
import Person1 from "../../../images/testimonals/photo-1565049786474-1dea82a8b995.webp";
import Person2 from "../../../images/testimonals/photo-1572417884940-c24659be6068.webp";
import Person3 from "../../../images/testimonals/photo-1619734086067-24bf8889ea7d.webp";
import Person4 from "../../../images/testimonals/photo-1659057106920-da022cfbc0cd.webp";
import Person5 from "../../../images/testimonals/photo-1665984867752-6370ab5ae35e.webp";
import Person6 from "../../../images/testimonals/photo-1694287877106-ee22f764aef1.webp";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div>
      <section
        className="relative not-prose scroll-mt-[72px]"
        id="testimonials-on-home"
      >
        <div className="absolute inset-0 bg-blue-50 dark:bg-slate-800"></div>
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default">
          <div className="mb-4">
            <div className="mb-6 mx-auto md:mb-12 text-center">
              <h2 className="font-heading mb-4 font-bold tracking-tight text-2xl sm:text-3xl">
                What our customers say about us
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400 text-center">
                Etiam sed odio et dolor auctor gravida. Curabitur tincidunt elit
                non risus pharetra sodales. Etiam sit amet mattis massa.
              </p>
            </div>
          </div>
          <div className="flex items-stretch justify-center">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <div
                className="card max-w-sm h-full hover:border-blue-600 hover:shadow-lg hover:transition hover:duration-100 bg-white
                            p-4
                            "
              >
                <div className="select-none h-full">
                  <div className="flex flex-col justify-between items-stretch w-full h-full">
                    <div className="flex items-center">
                      <Image
                        src={Person1.src}
                        alt="Tayla Kirsten"
                        loading="lazy"
                        width="248"
                        height="248"
                        decoding="async"
                        data-nimg="1"
                        className="object-cover shadow-lg bg-gray-500 dark:bg-slate-700 mr-4 h-10 w-10 rounded-full"
                      />
                      <div className="flex flex-col justify-center text-left">
                        <h3 className="font-semibold">Tayla Kirsten</h3>
                        <span className="dark:text-slate-400 text-sm">
                          Marketing Manager
                        </span>
                      </div>
                    </div>
                    <hr className="border-gray-200 dark:border-gray-700 my-4" />
                    <blockquote className="flex-auto">
                      <p className="font-light dark:text-slate-400">
                        &quot; ScribbleSphere has transformed my blogging
                        journey! The seamless interface and powerful features
                        made publishing and sharing my thoughts a breeze. It ...
                        &quot;
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="card max-w-sm h-full hover:border-blue-600 hover:shadow-lg hover:transition hover:duration-100 p-4 bg-white">
                <div className="select-none h-full">
                  <div className="flex flex-col justify-between items-stretch w-full h-full">
                    <div className="flex items-center">
                      <Image
                        src={Person2.src}
                        alt="Silver Jordan"
                        loading="lazy"
                        width="248"
                        height="248"
                        decoding="async"
                        data-nimg="1"
                        className="object-cover shadow-lg bg-gray-500 dark:bg-slate-700 mr-4 h-10 w-10 rounded-full"
                      />
                      <div className="flex flex-col justify-center text-left">
                        <h3 className="font-semibold">Silver Jordan</h3>
                        <span className="dark:text-slate-400 text-sm">
                          Senior Marketer
                        </span>
                      </div>
                    </div>
                    <hr className="border-gray-200 dark:border-gray-700 my-4" />
                    <blockquote className="flex-auto">
                      <p className="font-light dark:text-slate-400">
                        &quot; As a seasoned blogger, finding a platform that
                        balances simplicity and sophistication is crucial.
                        TailNext not only meets but exceeds these expectatio...
                        &quot;
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="card max-w-sm h-full hover:border-blue-600 hover:shadow-lg hover:transition hover:duration-100 p-4 bg-white">
                <div className="select-none h-full">
                  <div className="flex flex-col justify-between items-stretch w-full h-full">
                    <div className="flex items-center">
                      <Image
                        src={Person3.src}
                        alt="Kelsey Arden"
                        loading="lazy"
                        width="248"
                        height="248"
                        decoding="async"
                        data-nimg="1"
                        className="object-cover shadow-lg bg-gray-500 dark:bg-slate-700 mr-4 h-10 w-10 rounded-full"
                      />
                      <div className="flex flex-col justify-center text-left">
                        <h3 className="font-semibold">Kelsey Arden</h3>
                        <span className="dark:text-slate-400 text-sm">
                          Co-Founder &amp; CEO
                        </span>
                      </div>
                    </div>
                    <hr className="border-gray-200 dark:border-gray-700 my-4" />
                    <blockquote className="flex-auto">
                      <p className="font-light dark:text-slate-400">
                        &quot; The synergy of Next.js and Tailwind CSS on
                        Scribblesphere provides an unbeatable foundation for my
                        blog. The attention to detail in design, combined w...
                        &quot;
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="card max-w-sm h-full hover:border-blue-600 hover:shadow-lg hover:transition hover:duration-100 p-4 bg-white">
                <div className="select-none h-full">
                  <div className="flex flex-col justify-between items-stretch w-full h-full">
                    <div className="flex items-center">
                      <Image
                        src={Person4.src}
                        alt="Sarah Johnson"
                        loading="lazy"
                        width="248"
                        height="248"
                        decoding="async"
                        data-nimg="1"
                        className="object-cover shadow-lg bg-gray-500 dark:bg-slate-700 mr-4 h-10 w-10 rounded-full"
                      />
                      <div className="flex flex-col justify-center text-left">
                        <h3 className="font-semibold">Sarah Johnson</h3>
                        <span className="dark:text-slate-400 text-sm">
                          Business Owner
                        </span>
                      </div>
                    </div>
                    <hr className="border-gray-200 dark:border-gray-700 my-4" />
                    <blockquote className="flex-auto">
                      <p className="font-light dark:text-slate-400">
                        &quot; Scribblesphere commitment to best practices is
                        evident in every feature. From dark mode support to
                        image optimization, it ticks all the boxes. My blog...
                        &quot;
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="card max-w-sm h-full hover:border-blue-600 hover:shadow-lg hover:transition hover:duration-100 p-4 bg-white">
                <div className="select-none h-full">
                  <div className="flex flex-col justify-between items-stretch w-full h-full">
                    <div className="flex items-center">
                      <Image
                        src={Person5.src}
                        alt="Keith Young"
                        loading="lazy"
                        width="248"
                        height="248"
                        decoding="async"
                        data-nimg="1"
                        className="object-cover shadow-lg bg-gray-500 dark:bg-slate-700 mr-4 h-10 w-10 rounded-full"
                      />
                      <div className="flex flex-col justify-center text-left">
                        <h3 className="font-semibold">Keith Young</h3>
                        <span className="dark:text-slate-400 text-sm">
                          Freelance Developer
                        </span>
                      </div>
                    </div>
                    <hr className="border-gray-200 dark:border-gray-700 my-4" />
                    <blockquote className="flex-auto">
                      <p className="font-light dark:text-slate-400">
                        &quot; Starting a blog can be daunting, but
                        Scribblesphere made it surprisingly simple. The
                        thoughtful guidance and responsive support team ensured
                        a smooth ... &quot;
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="card max-w-sm h-full hover:border-blue-600 hover:shadow-lg hover:transition hover:duration-100 p-4 bg-white">
                <div className="select-none h-full">
                  <div className="flex flex-col justify-between items-stretch w-full h-full">
                    <div className="flex items-center">
                      <Image
                        src={Person6.src}
                        alt="Lisa Gordon"
                        loading="lazy"
                        width="248"
                        height="248"
                        decoding="async"
                        data-nimg="1"
                        className="object-cover shadow-lg bg-gray-500 dark:bg-slate-700 mr-4 h-10 w-10 rounded-full"
                      />
                      <div className="flex flex-col justify-center text-left">
                        <h3 className="font-semibold">Lisa Gordon</h3>
                        <span className="dark:text-slate-400 text-sm">
                          Project Manager
                        </span>
                      </div>
                    </div>
                    <hr className="border-gray-200 dark:border-gray-700 my-4" />
                    <blockquote className="flex-auto">
                      <p className="font-light dark:text-slate-400">
                        &quot; Scribblesphere offers a perfect blend of
                        creativity and functionality. The templates are
                        stunning, and the platform is designed to cater to
                        bloggers o... &quot;
                      </p>
                    </blockquote>
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

export default Testimonials;
