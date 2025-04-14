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

        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Our Mission</h2>
        <p className="text-gray-700 mb-4">
          Our mission is to redefine urban and intercity travel by making it more accessible, affordable, and efficient. We aim to build a connected transport ecosystem that bridges the gap between cities, businesses, and individuals.
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-2">What We Offer</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li><strong>On-Demand Rides:</strong> Book a ride instantly from your location to anywhere in the city.</li>
          <li><strong>Outstation Travel:</strong> Plan and book intercity rides with flexible scheduling and secure service.</li>
          <li><strong>Freight & Logistics:</strong> Need to move goods? Our mini trucks and transport vans are perfect for small and medium businesses.</li>
          <li><strong>Corporate Travel:</strong> Customized transportation solutions for companies and organizations.</li>
          <li><strong>Ride Scheduling:</strong> Schedule a ride in advance and we’ll make sure it’s ready when you are.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Our Core Values</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li><strong>Customer First:</strong> We go above and beyond to meet the needs of our users.</li>
          <li><strong>Integrity:</strong> Transparent services, honest pricing, and trustworthy drivers.</li>
          <li><strong>Innovation:</strong> Embracing technology to make travel smarter and simpler.</li>
          <li><strong>Reliability:</strong> Count on us—rain or shine, day or night.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-500 mb-2">How It Works</h2>
        <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">
          <li><strong>Sign Up / Login:</strong> Create an account or log in to your TransGo profile.</li>
          <li><strong>Book Your Ride:</strong> Enter pickup & drop locations, choose vehicle type, and schedule time.</li>
          <li><strong>Track in Real-Time:</strong> Follow your driver’s route on the map from start to finish.</li>
          <li><strong>Rate Your Trip:</strong> Share your experience and help us improve continuously.</li>
        </ol>

        <h2 className="text-2xl font-semibold text-blue-500 mb-2">What Our Customers Say</h2>
        <p className="text-gray-700 mb-4 italic">
          “TransGo is a game-changer. The booking was smooth and the driver arrived exactly on time!” – <strong>Ravi S.</strong>
        </p>
        <p className="text-gray-700 mb-4 italic">
          “I use TransGo for my daily office commute. It's reliable, affordable, and very convenient.” – <strong>Pooja M.</strong>
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Ready to Ride?</h2>
        <p className="text-gray-700 mb-6">
          Download our app or book your ride online and experience the future of transportation today.
        </p>

        <div className="text-center">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
            Book a Ride Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
