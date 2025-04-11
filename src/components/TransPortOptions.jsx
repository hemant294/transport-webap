import React, { useState, useEffect } from 'react';
import threeweehler from "../assets/threewheelhler.jpeg";
import bikeImg from "../assets/bikel.jpeg";
import miniTruck750 from "../assets/minitruck.jpeg";
import truck1250kg from "../assets/1250kg.jpeg";
import largeTruck from "../assets/largeTruck.jpeg";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setVehicle } from '../redux/action/transportAction';

const transportOptions = [
    {
        id: 1,
        title: "Two Wheeler",
        subtitle: "Quick Transport",
        capacity: "Up to 20kg",
        price: "From ₹49",
        image: bikeImg,
        features: ["Fastest delivery", "Economical", "Perfect for small items"],
        pr_KM_charge: 13
    },
    {
        id: 2,
        title: "Three Wheeler",
        subtitle: "Auto Transport",
        capacity: "Up to 250kg",
        price: "From ₹99",
        image: threeweehler,
        features: ["Balanced option", "City-wide access", "Cost-effective"],
        pr_KM_charge: 25
    },
    {
        id: 3,
        title: "Mini Truck",
        subtitle: "750kg Capacity",
        capacity: "Up to 750kg",
        price: "From ₹199",
        image: miniTruck750,
        features: ["Spacious loading", "Multiple items", "Short distances"],
        pr_KM_charge: 33
    },
    {
        id: 4,
        title: "Medium Truck",
        subtitle: "1250kg Capacity",
        capacity: "Up to 1250kg",
        price: "From ₹299",
        image: truck1250kg,
        features: ["Business deliveries", "Furniture transport", "Long distance"],
        pr_KM_charge: 50
    },
    {
        id: 5,
        title: "Heavy Truck",
        subtitle: "2550kg Capacity",
        capacity: "Up to 2550kg",
        price: "From ₹499",
        image: largeTruck,
        features: ["Heavy loads", "Commercial transport", "Full service"],
        pr_KM_charge: 72
    },
];

const TransportOptions = () => {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState(null);
    const [animateCards, setAnimateCards] = useState(false);
    const dispatch = useDispatch();
    
    useEffect(() => {
        setAnimateCards(true);
    }, []);

    const handleClick = (opt) => {
        dispatch(setVehicle(opt));
        navigate(`/booking/${opt.title}`);
    }

    return (
        <section className="bg-white py-16 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full opacity-70 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-100 rounded-full opacity-70 translate-x-1/3 translate-y-1/3"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">Our Fleet</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
                        Delivery hai? <span className="text-blue-600">#HoJayega!</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Choose the right vehicle for your transport needs. From small packages to heavy equipment, we've got you covered.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {transportOptions.map((option, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-500 ${animateCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                            onMouseEnter={() => setSelectedOption(option.id)}
                            onMouseLeave={() => setSelectedOption(null)}
                        >
                            <div className="relative">
                                <img
                                    src={option.image}
                                    alt={option.title}
                                    className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                                    {option.price}
                                </div>
                            </div>

                            <div className="p-5">
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800">{option.title}</h3>
                                        <p className="text-gray-600 text-sm">{option.subtitle}</p>
                                    </div>
                                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">
                                        {option.capacity}
                                    </span>
                                </div>

                                <div className="mb-5">
                                    <ul className="text-sm text-gray-600">
                                        {option.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center mb-1">
                                                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-4">
                                    <button
                                        onClick={() => handleClick(option)}
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-3 rounded-lg transition-colors duration-300 flex items-center justify-center"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                        Book This Vehicle
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 md:p-10 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Need a Custom Transport Solution?</h3>
                    <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                        For business logistics, events, or special requirements, we offer customized transport solutions.
                    </p>
                    <button className="bg-white text-blue-600 hover:bg-blue-50 font-medium px-6 py-3 rounded-lg transition-colors duration-300">
                        <Link to="/contact">
                            Contact Our Team
                        </Link>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TransportOptions;