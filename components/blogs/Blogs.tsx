'use client'
import { useEffect, useState } from 'react';
import Footer from '../Footer';
import Navigation from '../Navigation';
import BlogCards from './BlogCards';

const Blogs = () => {
    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3002/blogs');
                if (!response.ok) {
                    throw new Error('Failed to fetch blog data');
                }
                const data = await response.json();
                setBlogData(data);
            } catch (error: any) {
                console.error(error.message);
            }
        };

        fetchData();
    }, []);



    return (
        <div>
            <Navigation />
            <div className='grid sm:grid-cols-3 grid-cols-1 gap-4'>
                {blogData.map((blog) => (
                    <BlogCards key={blog.id} blog={blog} />
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default Blogs
