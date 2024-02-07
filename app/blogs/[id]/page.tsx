'use client'
import BlogId from '@/components/blogs/BlogId'
import React, { useEffect, useState } from 'react'

const page = ({ params }: { params: { id: string } }) => {
    // console.log(params.id);
    // const [blogId, setBlogId] = useState();

    console.log("This is params Id : ", params.id);
    // console.log("This is blog in page[id] Id : ", blog);


    // const fetchData = async () => {
    //     try {
    //         const response = await fetch(`http://localhost:3000/blogs/${params.id}`);
    //         // console.log(response);


    //         if (!response.ok) {
    //             throw new Error('Failed to fetch blog data');
    //         }
    //         const data = params.id;
    //         setBlogId(data);
    //         // console.log("This is by Id data" + params.id);

    //     } catch (error: any) {
    //         console.error(error.message);
    //     }
    // };


    // useEffect(() => {
    //     fetchData()
    // }, [])

    return (
        <div>
            <BlogId blog={params.id} />
        </div>
    )
}

export default page
