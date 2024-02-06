'use client'
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import useAuth from '@/hooks/useAuth';


const Navigation = () => {
    const router = useRouter()
    const { logout } = useAuth();

    const handleLogout = () => {
        // Simulate a logout action
        logout();
        router.push('signin')
    };
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Blog Application</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a className='flex items-center px-4 py-3 font-medium transition duration-150 ease-in-out hover:text-gray-900 dark:hover:text-white text-xl'>Pages</a></li>
                    <li>
                        <details>
                            <summary className='flex items-center px-4 py-3 font-medium transition duration-150 ease-in-out hover:text-gray-900 dark:hover:text-white text-xl'>Services</summary>
                            <ul className="p-2">
                                <li><a className='flex items-center px-4 py-3 font-medium transition duration-150 ease-in-out hover:text-gray-900 dark:hover:text-white text-xl'>About Us</a></li>
                                <li><a className='flex items-center px-4 py-3 font-medium transition duration-150 ease-in-out hover:text-gray-900 dark:hover:text-white text-xl'>Contact Us</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a className='flex items-center px-4 py-3 font-medium transition duration-150 ease-in-out hover:text-gray-900 dark:hover:text-white text-xl' onClick={() => router.push('/blogs')}>Blogs</a></li>
                    <li><a className='flex items-center px-4 py-3 font-medium transition duration-150 ease-in-out hover:text-gray-900 dark:hover:text-white text-xl' onClick={() => router.push('/create-blogs')}>Write Blog</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn" onClick={handleLogout} >Logout</a>
            </div>
        </div>

    )
}

export default Navigation
