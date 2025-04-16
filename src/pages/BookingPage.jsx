import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgImg from '../assets/ThanitJuly_42.jpg'; // Make sure this path is correct
import { useSelector, useDispatch } from 'react-redux';
import { setDriverInfo } from '../redux/action/driverBookingAction';
import driverImg from "../assets/driverImg.webp"
import { setBooking, setDistances } from '../redux/action/bookingAction';
import { bookingPost } from '../api/PostApi/postApi';
import driver2 from "../assets/driver2.jpeg";
import driver3 from "../assets/driver3.jpeg";
import driver4 from "../assets/driver4.jpeg";

const BookingPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [distance, setDistance] = useState('');
  const [isBooking, setIsBooking] = useState(false);
  const [isRideBooked, setIsRideBooked] = useState(false);
  const [riderInfo, setRiderInfo] = useState(null);
  const [result, setResult] = useState([])
  const distances = useSelector((state) => state?.booking?.distance);
  const vehicleDetails = useSelector((state) => state?.transport?.transportDetail);
  const userInfo = useSelector((state) => state?.auth?.user);
  const token = useSelector((state) => state?.auth?.token);
  const count = vehicleDetails?.pr_KM_charge * distances;

  const handleBookRide = async () => {
    if (!pickupLocation || !dropoffLocation || !distance) return;

    setIsBooking(true);

        const ridersInfo = [
            {
                name: 'Rajesh Kumar',
                image: driverImg,
                email: 'rajesh.kumar@gmail.com',
                phone: '+91 9876543210',
                rating: 4.5,
                vehicleNumber: 'MP 09 AB 1234',
                reviews: [
                    { id: 1, text: 'Great driver, arrived on time.' },
                    { id: 2, text: 'Smooth and comfortable ride.' },
                ],
            },
            {
                name: 'Mahesh Singh',
                image: driver3,
                email: 'mahehSingh21@gmail.com',
                phone: '+91 7876465340',
                rating: 4.0,
                vehicleNumber: 'MP 09 AB 7434',
                reviews: [
                    { id: 1, text: 'Great driver, arrived on time.' },
                    { id: 2, text: 'Smooth and comfortable ride.' },
                ],
            },
            {
                name: 'vijesh Parmar',
                image: driver4,
                email: 'vijesh.parmar@gmail.com',
                phone: '+91 80876543210',
                rating: 3.6,
                vehicleNumber: 'MP 09 AB 2238',
                reviews: [
                    { id: 1, text: 'Great driver, arrived on time.' },
                    { id: 2, text: 'Smooth and comfortable ride.' },
                ],
            },
            {
              name: 'vishal Makvana',
              image: driver2,
              email: 'vishal123@gmail.com',
              phone: '+91 8887543210',
              rating: 4.0,
              vehicleNumber: 'MP 09 MB 2838',
              reviews: [
                  { id: 1, text: 'Great driver, arrived on time.' },
                  { id: 2, text: 'Smooth and comfortable ride.' },
              ],
          }
        ]

    const payload = {
      fullName: `${userInfo.user.name}`,
      email: `${userInfo.user.email}`,
      mobileNumber: `${userInfo.user.phone}`,
      pickupLocation: pickupLocation,
      dropLocation: dropoffLocation,
      vehicleType: vehicleDetails?.title || "Three Wheeler",
      bookingDate: new Date().toISOString().split("T")[0], // today
      bookingPayment: count || 0,
    };

    try {
      const response = await bookingPost(token, payload)

      const result = await response.json();
      setResult(result)
      if (response.ok) {
        const randomIndex = Math.floor(Math.random() * ridersInfo.length);
        const randomRider = ridersInfo[randomIndex];
        setRiderInfo(randomRider);
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

  const handleClosePopup = () => {
    setIsRideBooked(false);
    dispatch(setDriverInfo(riderInfo))
    dispatch(setBooking(result))
    dispatch(setDistances(Number(distance)))
    navigate('/driverinfo');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white shadow-2xl rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* Left Form Section */}
        <div className="p-10 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-blue-700 mb-2">Book {vehicleDetails?.title} Ride</h1>
          <p className="text-1xl font-bold text-blue-700 mb-6">Capacity of vehicle is {vehicleDetails?.capacity}</p>
          <label className="text-sm font-semibold text-gray-700 mb-1" htmlFor="pickup">Pickup Location<span className="text-red-500"> *</span></label>
          <input
            id="pickup"
            type="text"
            required
            className="mb-4 border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter pickup location"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
          />

          <label className="text-sm font-semibold text-gray-700 mb-1" htmlFor="dropoff">Drop-off Location<span className="text-red-500"> *</span></label>
          <input
            id="dropoff"
            type="text"
            required
            className="mb-4 border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter drop-off location"
            value={dropoffLocation}
            onChange={(e) => setDropoffLocation(e.target.value)}
          />

          <label className="text-sm font-semibold text-gray-700 mb-1" htmlFor="distance">Distance (in km)<span className="text-red-500"> *</span></label>
          <input
            id="distance"
            type="number"
            required
            className="mb-6 border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. 10"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            min={1}
          />

          <button
            onClick={handleBookRide}
            disabled={isBooking || !pickupLocation || !dropoffLocation || !distance}
            className={`w-full py-3 text-white font-semibold rounded-md transition-all duration-300 ${isBooking || !pickupLocation || !dropoffLocation || !distance
              ? 'bg-blue-300 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
              }`}
          >
            {isBooking ? 'Booking...' : 'Book Now'}
          </button>
        </div>

        {/* Right Visual Section */}
        <div className="relative bg-cover bg-center hidden md:block" style={{ backgroundImage: `url(${bgImg})` }}>
          <div className="bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center text-white text-center p-8">
            <h2 className="text-3xl font-bold mb-4">Fast. Reliable. Affordable.</h2>
            <p className="text-lg">Transport your goods across the city with just a few clicks.</p>
          </div>
        </div>
      </div>

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
    </div>
  );
}

export default BookingPage;
