import React from 'react'
import Navigation from '../Navigation'
import Footer from '../Footer'
import Image from 'next/image';
import MainImage from "../../images/hero (1).webp"
import Features from './Features';

const Blogs = () => {
    console.log(MainImage);

    return (
        <div className=''>
            <Navigation />
            <div className='px-3 mx-auto max-w-4xl pb-10 text-center md:pb-16 mt-12'>
                <h1 className="leading-tighter font-heading mb-6 text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
                    Explore the world of blogging with Next.js + Tailwind CSS
                </h1>
                <div className="mx-auto max-w-3xl">
                    <p className="mb-6 text-xl font-normal text-gray-600 dark:text-slate-400">ScribbleSphere is a polished template crafted for your blogging journey using Next.js + Tailwind CSS. It incorporates industry best practices, ensuring excellence in SEO, Accessibility, Dark Mode, and superior Page Speed, along with optimized image handling.</p>
                </div>
                <div className="relative m-auto max-w-5xl">
                    <img
                        className="mx-auto h-auto w-full rounded-md bg-gray-400 dark:bg-slate-700"
                        src={MainImage.src}
                        alt=''

                        width={1024}
                        height={607}
                        sizes="(max-width: 64rem) 100vw, 1024px"
                        loading="eager"
                    />
                </div>

            </div>
            <Features />
            <Footer />
        </div>
    )
}

export default Blogs
