import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Layout from '../Layout/Layout';
import LayoutAdmin from '../Layout/LayoutAdmin';
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
import Service from '../pages/Service';

const PrivateRoute = ({ allowedRoles }) => {
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated || !user) {
    return <Navigate to="/signin" replace />;
  }

  if (allowedRoles.includes(user?.user?.role)) {
    return <Outlet />;
  }

  // If role doesn't match, redirect appropriately
  return user.user.role === 'admin' ? (
    <Navigate to="/allUsers" />
  ) : (
    <Navigate to="/hero" />
  );
};

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
              user?.user?.role === 'user' ? (
                <Navigate to="/hero" />
              ) : (
                <Navigate to="/allUsers" />
              )
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/signin" element={<SigninForm />} />

        {/* User Protected Routes */}
        <Route element={<PrivateRoute allowedRoles={['user']} />}>
          <Route element={<Layout />}>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/hero" element={<Hero />} />
            <Route path="/booking/:title" element={<BookingPage />} />
            <Route path="/driverinfo" element={<Driver />} />
            <Route path="/service" element={<Service />} />
            <Route path="/payment" element={<PaymentPage />} />
          </Route>
        </Route>

        {/* Admin Protected Routes */}
        <Route element={<PrivateRoute allowedRoles={['admin']} />}>
          <Route element={<LayoutAdmin />}>
            <Route path="/allUsers" element={<User />} />
            <Route path="/allBookings" element={<AdminBookings />} />
            <Route path="/allContact" element={<AdminContact />} />
          </Route>
        </Route>

        {/* Fallback for unmatched routes */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
