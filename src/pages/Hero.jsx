import React from 'react';
import heroImg from "../assets/ThanitJuly_42.jpg";
import TransportOptions from '../components/TransPortOptions';

const Hero = () => {
    return (
        <>
            <section className="bg-gray-100 min-h-[90vh] flex items-center">
                <div className="container mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

                    {/* Text Section - 5 Columns */}
                    <div className="md:col-span-5">
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
                            Fast & Easy Cab Booking
                        </h1>
                        <p className="text-lg text-gray-600 mb-6">
                            Book your ride with just a few clicks. Reliable, affordable, and always on time.
                        </p>
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300">
                            Book Now
                        </button>
                    </div>

                    {/* Image Section - 7 Columns */}
                    <div className="md:col-span-7">
                        <img
                            src={heroImg}
                            alt="Cab Booking"
                            className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </section>
            <TransportOptions />
        </>
    );
};

export default Hero;
