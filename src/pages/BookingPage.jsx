import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BookingPage() {
  const navigate = useNavigate();
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [isBooking, setIsBooking] = useState(false);
  const [isRideBooked, setIsRideBooked] = useState(false);
  const [riderInfo, setRiderInfo] = useState(null);

  const handleBookRide = () => {
    setIsBooking(true);

    // Simulate fetching nearby riders and booking a ride (replace with actual API call)
    setTimeout(() => {
      setIsBooking(false);
      setIsRideBooked(true);
      setRiderInfo({
        name: 'Rajesh Kumar',
        image: 'https://via.placeholder.com/150', // Replace with actual image URL
        email: 'rajesh.kumar@example.com',
        phone: '+91 9876543210',
        rating: 4.8,
        vehicleNumber: 'MP 09 AB 1234',
        reviews: [
          { id: 1, text: 'Great driver, arrived on time.' },
          { id: 2, text: 'Smooth and comfortable ride.' },
        ],
      });
    }, 2000); // Simulate booking process (2 seconds)
  };

  const handleClosePopup = () => {
    setIsRideBooked(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold text-gray-700">Transport your luggage</h1>
            </div>
            <div className="mt-6">
              <div className="mb-4">
                <label htmlFor="pickup" className="block text-gray-700 text-sm font-bold mb-2">
                  Pickup Location
                </label>
                <input
                  type="text"
                  id="pickup"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter pickup location"
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="dropoff" className="block text-gray-700 text-sm font-bold mb-2">
                  Drop-off Location
                </label>
                <input
                  type="text"
                  id="dropoff"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter drop-off location"
                  value={dropoffLocation}
                  onChange={(e) => setDropoffLocation(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                    isBooking ? 'cursor-not-allowed opacity-50' : ''
                  }`}
                  type="button"
                  onClick={handleBookRide}
                  disabled={isBooking || !pickupLocation || !dropoffLocation}
                >
                  {isBooking ? 'Booking...' : 'Book Now'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dummy Nearby Rider Booked Popup */}
      {isRideBooked && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-xl p-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Ride Booked!</h2>
            <p className="text-gray-600 mb-4">We are finding a nearby rider for you.</p>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleClosePopup}
            >
              Okay
            </button>
          </div>
        </div>
      )}

      {/* Rider Information Section */}
      {riderInfo && (
          navigate(`/driverinfo`)
      )}
    </div>
  );
}

export default BookingPage;