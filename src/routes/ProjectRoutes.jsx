import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Layout from '../Layout/Layout';
import SignupForm from '../components/SignupForm';
import SigninForm from '../components/SigninForm';
import BookingPage from '../pages/BookingPage';
import Hero from '../pages/Hero';
import Driver from '../pages/Driver';
import PaymentPage from '../pages/PaymentPage';
import ContactUs from '../pages/ContactUs';
import NotFoundPage from '../pages/NotFoundPage';
import About from '../pages/About';
import User from '../admin/User';
import AdminBookings from '../admin/AdminBookings';
import AdminContact from '../admin/AdminContact';
import LayoutAdmin from '../Layout/LayoutAdmin';

const ProjectRoutes = () => {
    const user = useSelector((state) => state.auth.user);

    return (
        <Router>
            <Routes>
                {/* Public Routes */}
                <Route
                    path="/"
                    element={
                        user ? (
                            user?.user?.role === "user" ? (
                                <Navigate to="/hero" />
                            ) : user?.user?.role === "admin" ? (
                                <Navigate to="/allUsers" />
                            ) : (
                                <SigninForm />
                            )
                        ) : (
                            <SigninForm />
                        )
                    }
                />
                <Route path="/signup" element={<SignupForm />} />
                <Route path="/signin" element={<SigninForm />} />

                {/* Protected Routes (inside Layout) */}
                <Route path="/" element={<Layout />}>
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<ContactUs />} />
                    <Route path="hero" element={<Hero />} />
                    <Route path="booking/:title" element={<BookingPage />} />
                    <Route path="driverinfo" element={<Driver />} />
                    <Route path="payment" element={<PaymentPage />} />
                    <Route path="*" element={<NotFoundPage />} />

                </Route>

                <Route path="/" element={<LayoutAdmin />}>
                    <Route path="allUsers" element={<User />} />
                    <Route path="allBookings" element={<AdminBookings />} />
                    <Route path="allContact" element={<AdminContact />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default ProjectRoutes;
