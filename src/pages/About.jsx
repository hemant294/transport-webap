import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">About Us</h1>
        <p className="text-gray-700 mb-4">
          Welcome to <span className="font-semibold">TransGo</span> – your trusted partner for safe, fast, and reliable transport services.
        </p>
        <p className="text-gray-700 mb-4">
          Whether you're commuting to work, heading to the airport, or exploring a new city, we provide a seamless transportation experience tailored to your needs. Our professional drivers, real-time tracking, and easy booking process make it simpler than ever to get to your destination.
        </p>
        <p className="text-gray-700 mb-4">
          At TransGo, we are committed to:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li>Ensuring your safety through background-checked drivers and well-maintained vehicles</li>
          <li>Offering transparent pricing with no hidden charges</li>
          <li>Providing 24/7 customer support for a smooth experience</li>
          <li>Using smart technology to optimize routes and reduce wait times</li>
        </ul>
        <p className="text-gray-700">
          Join thousands of satisfied users who rely on us every day. We’re more than a ride — we’re your transportation partner.
        </p>
      </div>
    </div>
  );
};

export default About;
