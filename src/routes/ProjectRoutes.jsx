import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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
import ProtectedRoute from '../components/ProtectedRoute'; // <-- import

import { useSelector } from 'react-redux';

const ProjectRoutes = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layout />}>
                    {/* Redirect "/" based on auth */}
                    <Route index element={isAuthenticated ? <Navigate to="/hero" /> : <SigninForm />} />

                    <Route path='/signup' element={<SignupForm />} />
                    <Route path='/signin' element={<SigninForm />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<ContactUs />} />

                    {/* Protected Routes */}
                    <Route path='/hero' element={
                        <ProtectedRoute><Hero /></ProtectedRoute>
                    } />
                    <Route path='/booking/:title' element={
                        <ProtectedRoute><BookingPage /></ProtectedRoute>
                    } />
                    <Route path='/driverinfo' element={
                        <ProtectedRoute><Driver /></ProtectedRoute>
                    } />
                    <Route path='/payment' element={
                        <ProtectedRoute><PaymentPage /></ProtectedRoute>
                    } />

                    <Route path='*' element={<NotFoundPage />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default ProjectRoutes;
