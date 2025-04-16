import React from 'react';
import transporthead from "../assets/transport.webp";
import whychoos from "../assets/trucks.png";
import howitwork from "../assets/howitwork.jpeg";
import join from "../assets/join.jpeg";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Header Image */}
        <img
          src={transporthead}
          alt="Transport fleet"
          className="w-full h-64 object-cover rounded-md mb-6"
        />

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

        {/* What We Offer with Image */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
          <img
            src={whychoos}
            alt="Ride booking"
            className="w-full md:w-1/2 rounded-lg"
          />
          <div>
            <h2 className="text-2xl font-semibold text-blue-500 mb-2">What We Offer</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>On-Demand Rides:</strong> Book a ride instantly from your location to anywhere in the city.</li>
              <li><strong>Outstation Travel:</strong> Plan and book intercity rides with flexible scheduling and secure service.</li>
              <li><strong>Freight & Logistics:</strong> Mini trucks and vans for small and medium businesses.</li>
              <li><strong>Corporate Travel:</strong> Solutions for companies and organizations.</li>
              <li><strong>Ride Scheduling:</strong> Schedule in advance and we’ll handle the rest.</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Our Core Values</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li><strong>Customer First:</strong> We go above and beyond to meet the needs of our users.</li>
          <li><strong>Integrity:</strong> Transparent services, honest pricing, and trustworthy drivers.</li>
          <li><strong>Innovation:</strong> Embracing technology to make travel smarter and simpler.</li>
          <li><strong>Reliability:</strong> Count on us—rain or shine, day or night.</li>
        </ul>

        <div className="flex flex-col md:flex-row-reverse items-center gap-6 mb-6">
          <img
            src={howitwork}
            alt="Driver with mobile app"
            className="w-full md:w-1/2 rounded-lg"
          />
          <div>
            <h2 className="text-2xl font-semibold text-blue-500 mb-2">How It Works</h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li><strong>Sign Up / Login:</strong> Create an account or log in to your profile.</li>
              <li><strong>Book Your Ride:</strong> Enter details, select vehicle, and schedule.</li>
              <li><strong>Track in Real-Time:</strong> Follow your driver's route live.</li>
              <li><strong>Rate Your Trip:</strong> Share your experience and feedback.</li>
            </ol>
          </div>
        </div>

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

        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Why Choose TransGo?</h2>
        <p className="text-gray-700 mb-4">
          With numerous transport options available, what sets us apart is our commitment to excellence and personalized service. Whether you're a solo traveler or managing corporate transportation for your entire team, we provide tailored solutions to match your expectations.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li><strong>24/7 Availability:</strong> Book a ride any time, day or night.</li>
          <li><strong>Transparent Pricing:</strong> No hidden fees, no surge charges.</li>
          <li><strong>Multiple Payment Options:</strong> From cards to wallets, choose what suits you.</li>
          <li><strong>Eco-Friendly Rides:</strong> Supporting sustainable travel through eco-conscious options.</li>
          <li><strong>Multi-language Support:</strong> Serving a diverse user base with multilingual capabilities.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Safety & Support</h2>
        <p className="text-gray-700 mb-4">
          Your safety is our top priority. Every driver undergoes thorough background checks, training, and vehicle inspection. We also offer in-ride safety features like SOS alerts, ride-sharing details with loved ones, and 24/7 support.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li><strong>Emergency Button:</strong> Instantly connect with emergency services during a ride.</li>
          <li><strong>Live Ride Sharing:</strong> Share your trip progress with friends or family in real-time.</li>
          <li><strong>Support Center:</strong> Our dedicated team is always ready to assist you via chat or call.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Our Network Expansion</h2>
        <p className="text-gray-700 mb-4">
          We started with a vision to connect people within cities. Today, we're proud to serve across multiple regions with plans to expand to every corner of the country. From metropolitan cities to tier-2 towns, we’re on a mission to make smart mobility universal.
        </p>
        <p className="text-gray-700 mb-6">
          New cities coming soon include: Jaipur, Chandigarh, Kochi, Bhopal, and many more!
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Meet the Team</h2>
        <p className="text-gray-700 mb-4">
          TransGo is powered by passionate individuals with backgrounds in technology, logistics, customer experience, and business strategy. Together, we work to ensure your journeys are smooth, safe, and satisfying.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li><strong>Tech Innovators:</strong> Building seamless booking systems and real-time tracking tools.</li>
          <li><strong>Customer Heroes:</strong> Available round-the-clock to resolve issues and enhance your experience.</li>
          <li><strong>Driver Community:</strong> Empowered through training, support, and fair earning opportunities.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Join the TransGo Movement</h2>
        <p className="text-gray-700 mb-4">
          Whether you’re a rider looking for dependable transportation, a business needing logistics support, or a driver wanting to join a trustworthy platform—we welcome you to be part of our journey.
        </p>
        <p className="text-gray-700 mb-6">
          Let’s move smarter. Let’s move together. Welcome aboard TransGo.
        </p>

        <img
          src={join}
          alt="Transport fleet"
          className="w-full h-64 object-cover rounded-md mb-6"
        />

        <div className="text-center">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
            Join TransGo Today
          </button>
        </div>

      </div>
    </div>
  );
};

export default About;
