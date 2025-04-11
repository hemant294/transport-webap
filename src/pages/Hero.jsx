import React, { useState, useEffect } from 'react';
import oneImg from "../assets/1.jpg";
import { useSelector } from 'react-redux';
import TransportOptions from '../components/TransPortOptions';
import { FaTruck, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'; // You'll need to install react-icons

const Hero = () => {
    const user = useSelector((state) => state.auth.user);
    const [destination, setDestination] = useState('');
    const [pickup, setPickup] = useState('');
    const [date, setDate] = useState('');
    const [isAnimated, setIsAnimated] = useState(false);
    
    useEffect(() => {
        setIsAnimated(true);
    }, []);

    return (
        <>
            <section className="bg-gradient-to-b from-gray-100 to-white min-h-[90vh] flex items-center">
                <div className="container mx-auto px-4 md:px-6 py-6 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                    {/* Text Section - 5 Columns */}
                    <div className={`md:col-span-5 transition-all duration-700 ${isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <div className="bg-blue-600 text-white inline-block px-4 py-2 rounded-full mb-4 font-medium">
                            #DeliveryHoJayega
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                            Fast & Reliable Transport Solutions
                        </h1>
                        <p className="text-lg text-gray-600 mb-8">
                            Move anything, anywhere in the city. Book your delivery vehicle in just a few clicks.
                        </p>
                        
                        {/* Quick Booking Form */}
                        <div className="bg-white p-5 rounded-xl shadow-lg mb-6">
                            <h3 className="text-lg font-semibold mb-3 text-gray-800">Quick Booking</h3>
                            <div className="space-y-3">
                                <div className="flex items-center border rounded-lg p-2">
                                    <FaMapMarkerAlt className="text-blue-600 mr-2" />
                                    <input 
                                        type="text" 
                                        placeholder="Pickup Location" 
                                        className="w-full outline-none text-gray-700"
                                        value={pickup}
                                        onChange={(e) => setPickup(e.target.value)}
                                    />
                                </div>
                                <div className="flex items-center border rounded-lg p-2">
                                    <FaMapMarkerAlt className="text-red-500 mr-2" />
                                    <input 
                                        type="text" 
                                        placeholder="Delivery Location" 
                                        className="w-full outline-none text-gray-700"
                                        value={destination}
                                        onChange={(e) => setDestination(e.target.value)}
                                    />
                                </div>
                                <div className="flex items-center border rounded-lg p-2">
                                    <FaCalendarAlt className="text-blue-600 mr-2" />
                                    <input 
                                        type="date" 
                                        className="w-full outline-none text-gray-700"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                    />
                                </div>
                            </div>
                            <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 mt-4 flex items-center justify-center">
                                <FaTruck className="mr-2" />
                                Book Transport Now
                            </button>
                        </div>
                        
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center">
                                <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <span>4.9/5 Rating</span>
                            </div>
                            <div>5000+ Deliveries</div>
                            <div>City-wide Coverage</div>
                        </div>
                    </div>

                    {/* Image Section - 7 Columns */}
                    <div className={`md:col-span-7 transition-all duration-700 ${isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <div className="relative">
                            <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-400 rounded-full opacity-70 animate-pulse"></div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-400 rounded-full opacity-70 animate-pulse"></div>
                            <img
                                src={oneImg}
                                alt="Transport Services"
                                className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-lg relative z-10"
                            />
                            <div className="absolute top-6 right-6 bg-white rounded-lg shadow-lg p-3 z-20 transform rotate-6">
                                <div className="text-blue-600 font-bold">30% OFF</div>
                                <div className="text-xs text-gray-600">First Booking</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Features Section */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
                        Why Choose Our Transport Services?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                            <div className="text-blue-600 text-3xl mb-4">⏱️</div>
                            <h3 className="text-xl font-semibold mb-2">Express Delivery</h3>
                            <p className="text-gray-600">Guaranteed quick deliveries with real-time tracking for all your time-sensitive needs.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                            <div className="text-blue-600 text-3xl mb-4">💰</div>
                            <h3 className="text-xl font-semibold mb-2">Affordable Rates</h3>
                            <p className="text-gray-600">Competitive pricing with no hidden charges. Pay only for what you need.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                            <div className="text-blue-600 text-3xl mb-4">🛡️</div>
                            <h3 className="text-xl font-semibold mb-2">Safe Transport</h3>
                            <p className="text-gray-600">Trained drivers and secured vehicles ensure your goods are transported safely.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <TransportOptions />
        </>
    );
};

export default Hero;
