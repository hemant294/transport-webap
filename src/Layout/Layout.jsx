// Layout.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-16 mb-auto">
                <div className="container mx-auto px-8 py-4 bg-[#e2e8f0]">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;