// SignupForm.jsx
import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { MdLocalPhone } from "react-icons/md";
import axios from 'axios';
import { Link } from 'react-router-dom';

import { signUpPost } from '../api/PostApi/postApi';
const SignupForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: ''
    });
    const [isError, setIsError] = useState(false)
    const [isSuccessSignUp, setIsSuccessSignUp] = useState(false)

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = signUpPost(formData);
            setIsSuccessSignUp(true)
            console.log('Signup successful:', response.data);
            // You can redirect or show a success message here
        } catch (error) {
            setIsError(true)
            console.error('Signup error:', error.response?.data || error.message);
            // You can show an error message to the user here
        }
    };

    return (
        <div className="min-h-screen grid content-center">
            <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>
                <h4 className={`text-1xl font-bold text-center text-gray-800 mb-2 ${isError && "text-red-400"} ${isSuccessSignUp && "text-green-400"}`}>
          {isError ? "User allready exist" : isSuccessSignUp ? "SignUp successful" : ""}
        </h4>
                <form onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Full Name
                        </label>
                        <div className="relative">
                            <span className="absolute left-3 top-3 text-gray-400">
                                <FaUser />
                            </span>
                            <input
                                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                id="name"
                                name="name"
                                type="text"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Email Field */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email Address
                        </label>
                        <div className="relative">
                            <span className="absolute left-3 top-3 text-gray-400">
                                <FaEnvelope />
                            </span>
                            <input
                                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                id="email"
                                name="email"
                                type="email"
                                placeholder="johndoe@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Password Field */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <div className="relative">
                            <span className="absolute left-3 top-3 text-gray-400">
                                <FaLock />
                            </span>
                            <input
                                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                minLength="8"
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-3 text-gray-400"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Password must be at least 8 characters long</p>
                    </div>

                    {/* Confirm Password Field */}
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                            Phone Number
                        </label>
                        <div className="relative">
                            <span className="absolute left-3 top-3 text-gray-400">
                                <MdLocalPhone />
                            </span>
                            <input
                                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                id="phone"
                                name="phone"
                                type="number"
                                placeholder="Phone no..."
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
                    >
                        Sign Up
                    </button>
                </form>

                {/* Sign in link */}
                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link to="/signin" className="text-blue-500 hover:text-blue-700">Sign In</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;