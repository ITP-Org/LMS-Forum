import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaUserPlus, FaSignInAlt, FaSignOutAlt, FaBook, FaEnvelope, FaInfoCircle, FaSearch } from 'react-icons/fa';
import logo from '../assets/logo-ss.png';  // Import the logo image

function Header() {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    const role = localStorage.getItem('role');  // Get the user role from localStorage
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('role');
        navigate('/login');
    };

    return (
        <header className="p-4 bg-white">
            <div className="container flex items-center justify-between mx-auto">
                {/* Logo Section */}
                <div className="text-xl font-bold">
                    <Link to="/" className="flex items-center text-gray-800">
                        <img src={logo} alt="Forum Logo" className="h-16 mr-2" />
                    </Link>
                </div>
                <nav className="flex items-center space-x-8">
                    <Link to="/" className="text-gray-700 hover:text-blue-500">
                        Course Content
                    </Link>
                    <Link to="/blog" className="text-gray-700 hover:text-blue-500">
                        Forum
                    </Link>
                    <Link to="/contact" className="text-gray-700 hover:text-blue-500">
                        Cart
                    </Link>
                </nav>
                <nav className="flex items-center space-x-4">
                    {username && (
                        <span className="mr-4 text-gray-700">
                            Welcome, {username}
                            {role === 'Admin' && (
                                <>
                                    {" | "}
                                    <Link to="/report" className="text-blue-500 hover:underline">Report</Link>  {/* Add Report link for Admin */}
                                </>
                            )}
                        </span>
                    )}
                    {!token ? (
                        <div className="flex items-center space-x-4">
                            <Link to="/login" className="flex items-center text-gray-700 hover:text-blue-500">
                                <FaSignInAlt className="mr-1" />
                                Login
                            </Link>
                            <Link to="/register" className="flex items-center text-gray-700 hover:text-blue-500">
                                <FaUserPlus className="mr-1" />
                                Register
                            </Link>
                        </div>
                    ) : (
                        <button
                            onClick={handleLogout}
                            className="flex items-center text-red-500 hover:text-red-700 focus:outline-none"
                        >
                            <FaSignOutAlt className="mr-1" />
                            Logout
                        </button>
                    )}
                </nav>
            </div>
        </header>
    );
}

export default Header;
