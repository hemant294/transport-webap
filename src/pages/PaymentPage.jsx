import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you are using React Router for navigation

function PaymentPage({ transportationDetails, driverDetails }) {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
    const [isPaying, setIsPaying] = useState(false);
    const navigate = useNavigate(); // Hook for programmatic navigation

    const handlePaymentMethodChange = (event) => {
        setSelectedPaymentMethod(event.target.value);
    };

    const handlePayNow = () => {
        if (!selectedPaymentMethod) {
            alert('Please select a payment method.');
            return;
        }

        setIsPaying(true);

        // Simulate payment processing (replace with actual API call)
        setTimeout(() => {
            setIsPaying(false);
            alert('Payment Successful!');
            // Redirect to the hero page after successful payment
            navigate('/'); // Replace '/' with your actual hero page route
        }, 3000); // Simulate payment processing time (3 seconds)
    };

    // Dummy data if not passed as props
    const defaultTransportationDetails = transportationDetails || {
        fare: 125.50,
        distance: '5.7 km',
        estimatedTime: '15-20 mins',
    };

    const defaultDriverDetails = driverDetails || {
        name: 'Rajesh Kumar',
        image: 'https://via.placeholder.com/80', // Replace with actual image URL
        paymentMethods: ['UPI', 'Credit Card', 'Debit Card', 'Wallet'],
    };

    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-300 to-purple-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-2xl font-semibold text-gray-700 mb-6">Payment Details</h1>
                        </div>

                        {/* Transportation Details */}
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold text-gray-700 mb-3">Transportation Summary</h2>
                            <div className="bg-gray-50 rounded-md p-4">
                                <p className="text-gray-600 mb-2">Fare: ₹{defaultTransportationDetails.fare.toFixed(2)}</p>
                                <p className="text-gray-600 mb-2">Distance: {defaultTransportationDetails.distance}</p>
                                <p className="text-gray-600">Estimated Time: {defaultTransportationDetails.estimatedTime}</p>
                            </div>
                        </div>

                        {/* Driver Information */}
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold text-gray-700 mb-3">Driver Information</h2>
                            <div className="flex items-center bg-gray-50 rounded-md p-4">
                                <img src={defaultDriverDetails.image} alt="Driver" className="w-12 h-12 rounded-full mr-4" />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">{defaultDriverDetails.name}</h3>
                                </div>
                            </div>
                        </div>

                        {/* Payment Methods */}
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold text-gray-700 mb-3">Select Payment Method</h2>
                            <div className="bg-gray-50 rounded-md p-4">
                                {defaultDriverDetails.paymentMethods.map((method) => (
                                    <div key={method} className="mb-2">
                                        <input
                                            type="radio"
                                            id={method}
                                            name="paymentMethod"
                                            value={method}
                                            className="mr-2 focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                                            onChange={handlePaymentMethodChange}
                                        />
                                        <label htmlFor={method} className="text-gray-700">{method}</label>
                                    </div>
                                ))}
                            </div>
                            {selectedPaymentMethod && (
                                <p className="mt-2 text-sm text-gray-500">You have selected: {selectedPaymentMethod}</p>
                            )}
                        </div>

                        {/* Pay Now Button */}
                        <div className="flex items-center justify-center">
                            <button
                                className={`bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline ${isPaying || !selectedPaymentMethod ? 'cursor-not-allowed opacity-50' : ''
                                    }`}
                                type="button"
                                onClick={handlePayNow}
                                disabled={isPaying || !selectedPaymentMethod}
                            >
                                {isPaying ? 'Processing Payment...' : 'Pay Now'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentPage;