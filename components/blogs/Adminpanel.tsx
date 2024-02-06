'use client'
import React, { useState, useEffect } from 'react';
import Admin from './Admin';
import Navigation from '../Navigation';
import Footer from '../Footer';

const AdminPanel = () => {
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
    }, []); // Fetch data on component mount


    return (
        <>
            <Navigation />
            <div className="container mx-auto p-6">
                <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
                <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th colSpan={4} className="py-2 px-4 border-b text-center">
                                Blog Information
                            </th>
                        </tr>
                        <tr>
                            <th className="py-2 px-4 border-b">Status</th>
                            {/* <th className="py-2 px-4 border-b">Email</th>
                        <th className="py-2 px-4 border-b">Blog Title</th>
                        <th className="py-2 px-4 border-b">Action</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {blogData.map((blog) => (
                            <Admin key={blog.id} blog={blog} />
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    );
};

export default AdminPanel;
