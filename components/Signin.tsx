"use client"
import React, { useState } from 'react'
import Navigation from './Navigation';
import Footer from './Footer';

function SignIn() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
    const handleSignin = async (e: any) => {
        e.preventDefault();

        try {
            const forms = {
                username: formData.username,
                password: formData.password,
            };

            const response = await fetch(
                "http://localhost:3001/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(forms),
                }
            );

            if (!response.ok) {
                const errorData = await response.json();
                console.error("Signup Failed:", errorData);
                return;
            }

            const responseData = await response.json();
            console.log("Signup Successful:", responseData);
        } catch (error: any) {
            console.error("Signup Failed:", error.message);
        }
    };
    return (
        <>
            <Navigation />
            <div>
                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">Sign in to your account</h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST" onSubmit={handleSignin}>
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Username</label>
                                <div className="mt-2">
                                    <input id="username" name="username" type="username" autoComplete="username" required className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2" onChange={handleInputChange} />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white ">Password</label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2" onChange={handleInputChange} />
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            Not a member? {" "}
                            <a href="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">SignUp</a>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SignIn
