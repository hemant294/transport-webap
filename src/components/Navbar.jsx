import React, { useState, useEffect, useRef } from 'react';
import {
    MdClose,
    MdMenu,
    MdOutlineEmail,
    MdOutlineHome,
    MdPermDeviceInformation,
    MdOutlineAccountCircle
} from "react-icons/md";
import { FaServicestack } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../redux/action/authActions';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef();

    const dispatch = useDispatch();
    const loggedInUser = useSelector((state) => state.auth.user);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const success = loggedInUser?.success
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate('/');
    };

    return (
        <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-[#e2e8f0]'}`}>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center">
                        <a href="#" className="text-xl font-bold text-gray-800">Transport</a>
                    </div>

                    <nav className="hidden md:flex items-center space-x-6">
                        {loggedInUser?.user?.role !== 'admin' ?
                            <>
                                <Link to={success ? '/hero' : '/'} className="flex items-center text-gray-600 hover:text-gray-900">
                                    <MdOutlineHome size={16} className="mr-1" /> Home
                                </Link>
                                <Link to="/about" className="flex items-center text-gray-600 hover:text-gray-900">
                                    <MdPermDeviceInformation size={16} className="mr-1" /> About
                                </Link>
                                <Link to='/contact' className="flex items-center text-gray-600 hover:text-gray-900">
                                    <MdOutlineEmail size={16} className="mr-1" /> Contact Us
                                </Link>
                                <Link to='/service' className="flex items-center text-gray-600 hover:text-gray-900">
                                    <FaServicestack size={16} className="mr-1" /> Services
                                </Link>
                            </>
                            :
                            <>
                                <Link to={success ? '/allUsers' : '/'} className="flex items-center text-gray-600 hover:text-gray-900">
                                    <MdOutlineHome size={16} className="mr-1" />All Users
                                </Link>
                                <Link to="/allBookings" className="flex items-center text-gray-600 hover:text-gray-900">
                                    <MdPermDeviceInformation size={16} className="mr-1" /> All Bookings
                                </Link>
                                <Link to='/allContact' className="flex items-center text-gray-600 hover:text-gray-900">
                                    <MdOutlineEmail size={16} className="mr-1" /> All contact Info
                                </Link>
                            </>
                        }
                        {success && (
                            <div className="relative ml-6" ref={dropdownRef}>
                                <button
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    className="flex items-center bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 focus:outline-none"
                                >
                                    <MdOutlineAccountCircle size={18} className="mr-2" />
                                    {loggedInUser.user.name}
                                </button>

                                {dropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md z-10">
                                        <div className="px-4 py-2 border-b">
                                            <p className="font-medium">{loggedInUser?.user?.name}</p>
                                            <p className="text-sm text-gray-500">{loggedInUser?.user?.email}</p>
                                            <p className="text-sm text-gray-400 capitalize">({loggedInUser?.user?.phone})</p>
                                        </div>
                                        <button
                                            onClick={handleLogout}
                                            className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </nav>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-gray-900 focus:outline-none"
                        >
                            {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <div className="container mx-auto px-4 py-2">
                        <nav className="flex flex-col space-y-4 py-4">
                            {loggedInUser?.user?.role !== 'admin' ?
                                <>
                                    <Link to={success ? '/hero' : '/'} className="flex items-center text-gray-600 hover:text-gray-900 px-2 py-2 rounded hover:bg-gray-100">
                                        <MdOutlineHome size={16} className="mr-2" /> Home
                                    </Link>
                                    <Link to="/about" className="flex items-center text-gray-600 hover:text-gray-900 px-2 py-2 rounded hover:bg-gray-100">
                                        <MdPermDeviceInformation size={16} className="mr-2" /> About
                                    </Link>
                                    <Link to='/contact' className="flex items-center text-gray-600 hover:text-gray-900 px-2 py-2 rounded hover:bg-gray-100">
                                        <MdOutlineEmail size={16} className="mr-2" /> Contact Us
                                    </Link>
                                </> :
                                <>
                                    <Link to={success ? '/allUsers' : '/'} className="flex items-center text-gray-600 hover:text-gray-900 px-2 py-2 rounded hover:bg-gray-100">
                                        <MdOutlineHome size={16} className="mr-2" /> All Users
                                    </Link>
                                    <Link to="/allBookings" className="flex items-center text-gray-600 hover:text-gray-900 px-2 py-2 rounded hover:bg-gray-100">
                                        <MdPermDeviceInformation size={16} className="mr-2" /> All Bookings
                                    </Link>
                                    <Link to='/allContact' className="flex items-center text-gray-600 hover:text-gray-900 px-2 py-2 rounded hover:bg-gray-100">
                                        <MdOutlineEmail size={16} className="mr-2" /> All contact Info
                                    </Link>
                                </>
                            }

                            {success && (
                                <div className="border-t pt-4">
                                    <p className="text-sm text-gray-800 font-medium">{loggedInUser?.user?.name}</p>
                                    <p className="text-xs text-gray-500 mb-2">{loggedInUser?.user?.email}</p>
                                    <p className="text-xs text-gray-500 mb-2">{loggedInUser?.user?.phone}</p>
                                    <button
                                        onClick={handleLogout}
                                        className="text-left text-red-600 hover:underline"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
