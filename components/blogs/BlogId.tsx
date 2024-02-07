'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';

import { useRouter } from 'next/navigation'

const BlogId = ({ blog }) => {
    const router = useRouter()
    const [blogs, setBlogs] = useState()


    // console.log("This is blog : ", blog);

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:3002/blogs/${blog}`);
            const data = await response.json()

            if (!response.ok) {
                throw new Error('Failed to fetch blog data');
            }

            setBlogs(data);


        } catch (error: any) {
            console.error(error.message);
        }
    };


    useEffect(() => {
        fetchData()
    }, [])

    console.log("This is blogs : ", blogs);


    return (
        <div className="max-w-2xl mx-auto mt-8">
            <img src={blogs.image} alt="" />
            <div>{blogs.title}</div>
            <div>{blogs.content}</div>

        </div>
    )
}

export default BlogId;
