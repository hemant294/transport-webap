import React, { useState, useEffect } from 'react';
import oneImg from "../assets/1.jpg";
import { useSelector, useDispatch } from 'react-redux';
import TransportOptions from '../components/TransPortOptions';
import { FaTruck, FaMapMarkerAlt, FaCalendarAlt, FaRoad, FaCar } from 'react-icons/fa';
import driverImg from "../assets/driverImg.webp"
import threeweehler from "../assets/threewheelhler.jpeg";
import bikeImg from "../assets/bikel.jpeg";
import miniTruck750 from "../assets/minitruck.jpeg";
import truck1250kg from "../assets/1250kg.jpeg";
import largeTruck from "../assets/largeTruck.jpeg";
import { setBooking, setDistances } from '../redux/action/bookingAction';
import { setDriverInfo } from '../redux/action/driverBookingAction';
import { useNavigate } from 'react-router-dom';
import { setVehicle } from '../redux/action/transportAction';

const Hero = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);
    const [destination, setDestination] = useState('');
    const [pickup, setPickup] = useState('');
    const [distance, setDistance] = useState('');
    const [isBooking, setIsBooking] = useState(false);
    const [vehicle, setVehicles] = useState('');
    const [isAnimated, setIsAnimated] = useState(false);
    const userInfo = useSelector((state) => state?.auth?.user);
    const token = useSelector((state) => state?.auth?.token);
    const [isRideBooked, setIsRideBooked] = useState(false);
    const [result, setResult] = useState([])
    const [riderInfo, setRiderInfo] = useState(null);

    useEffect(() => {
        setIsAnimated(true);
    }, []);

    const transportOption = [
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

    const handleBookRide = async () => {
        if (!pickup || !destination || !distance) return;

        setIsBooking(true);

        const payload = {
            fullName: `${userInfo.user.name}`,
            email: `${userInfo.user.email}`,
            mobileNumber: `${userInfo.user.phone}`,
            pickupLocation: pickup,
            dropLocation: destination,
            vehicleType: vehicle || "Three Wheeler",
            bookingDate: new Date().toISOString().split("T")[0], // today
        };

        try {
            const response = await fetch('http://localhost:5000/api/bookings/create', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();
            setResult(result)
            if (response.ok) {
                setRiderInfo({
                    name: 'Rajesh Kumar',
                    image: driverImg,
                    email: 'rajesh.kumar@example.com',
                    phone: '+91 9876543210',
                    rating: 4.8,
                    vehicleNumber: 'MP 09 AB 1234',
                    reviews: [
                        { id: 1, text: 'Great driver, arrived on time.' },
                        { id: 2, text: 'Smooth and comfortable ride.' },
                    ],
                });
                setIsRideBooked(true);
            } else {
                console.error('Booking failed:', result.message || result);
                alert('Booking failed!');
            }
        } catch (error) {
            console.error('Error booking:', error);
            alert('Something went wrong while booking.');
        } finally {
            setIsBooking(false);
        }
    };

    const selectedVehicle = transportOption.find((item) => item.title === vehicle);


    const handleClosePopup = () => {
        setIsRideBooked(false);
        dispatch(setDriverInfo(riderInfo))
        dispatch(setVehicle(selectedVehicle))
        dispatch(setBooking(result))
        dispatch(setDistances(Number(distance)))
        navigate('/driverinfo');
    };

    return (
        <>
            <section className="bg-gradient-to-b from-gray-100 to-white min-h-[90vh] flex items-center">
                <div className="container mx-auto px-4 md:px-6 py-6 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                    {/* Text Section */}
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

                        {/* Booking Form */}
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
                                    <FaRoad className="text-green-600 mr-2" />
                                    <input
                                        type="number"
                                        placeholder="Distance (km)"
                                        className="w-full outline-none text-gray-700"
                                        value={distance}
                                        onChange={(e) => setDistance(e.target.value)}
                                    />
                                </div>
                                <div className="flex items-center border rounded-lg p-2">
                                    <FaCar className="text-purple-600 mr-2" />
                                    <select
                                        className="w-full outline-none text-gray-700"
                                        value={vehicle}
                                        onChange={(e) => setVehicles(e.target.value)}
                                    >
                                        {transportOption.map((item) => (
                                            <option key={item.id} value={item.title}>{item.title}</option>
                                        ))}
                                        {/* <option value="mini">Mini Truck</option>
                                        <option value="tempo">Tempo</option>
                                        <option value="pickup">Pickup Van</option>
                                        <option value="bike">Bike</option> */}
                                    </select>
                                </div>
                            </div>
                            <button
                                onClick={handleBookRide}
                                disabled={isBooking || !pickup || !destination || !distance}
                                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 mt-4 flex items-center justify-center">
                                <FaTruck className="mr-2" />
                                Book Transport Now
                            </button>
                        </div>

                        {/* Badges */}
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

                    {/* Image Section */}
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

            {/* Ride Booked Popup */}
            {isRideBooked && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg shadow-2xl p-6 max-w-sm w-full text-center animate-fade-in">
                        <h2 className="text-2xl font-bold text-green-600 mb-3">Ride Booked!</h2>
                        <p className="text-gray-700 mb-6">We are connecting you with a nearby rider.</p>
                        <button
                            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-md"
                            onClick={handleClosePopup}
                        >
                            Continue
                        </button>
                    </div>
                </div>
            )}

            <TransportOptions />
        </>
    );
};

export default Hero;
