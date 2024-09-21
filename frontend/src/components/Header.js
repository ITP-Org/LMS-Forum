
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaUserPlus, FaSignInAlt, FaSignOutAlt, FaBook, FaEnvelope, FaInfoCircle, FaSearch } from 'react-icons/fa';
import logo from '../assets/logo-ss.png';  // Import the logo image

function Header() {
    const [searchQuery, setSearchQuery] = useState('');
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

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
        }
    };

    return (
        <header className="p-4 bg-white">
            <div className="container flex items-center justify-between mx-auto">
                {/* <div className="text-xl font-bold">
                    <Link to="/" className="flex items-center text-gray-800">
                        <FaHome className="mr-2" />
                        Forum Logo
                    </Link>
                </div> */}
                {/* Logo Section */}
                <div className="text-xl font-bold">
                    <Link to="/" className="flex items-center text-gray-800">
                        {/* Replace Text with Logo */}
                        <img src={logo} alt="Forum Logo" className="h-16 mr-2" /> {/* Adjust the height as needed */}
                    </Link>
                </div>
                <nav className="flex items-center space-x-8">
                    <Link to="/" className="text-gray-700 hover:text-blue-500">
                        {/* <FaBook className="mr-1" /> */}
                        Course Content
                    </Link>
                    {/* <Link to="/about" className="text-gray-700 hover:text-blue-500">
                        <FaInfoCircle className="mr-1" /> 
                        About Us
                    </Link> */}
                    <Link to="/" className="text-gray-700 hover:text-blue-500">
                        {/* <FaBook className="mr-1" /> */}
                        Forum
                    </Link>
                    <Link to="/" className="text-gray-700 hover:text-blue-500">
                        {/* <FaEnvelope className="mr-1" /> */}
                        Cart
                    </Link>
                </nav>
                <form onSubmit={handleSearch} className="flex items-center">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search..."
                        className="p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button type="submit" className="p-2 text-white hover:bg-[#8e9afa] bg-[#8b7ae6]  rounded-r-md  focus:outline-none">
                        <FaSearch />
                    </button>
                </form>
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
