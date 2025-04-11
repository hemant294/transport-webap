import React, { useState } from 'react';
import { FaStar, FaRegStar, FaCircle } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { IoMdRadioButtonOn } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import { setCancelBooking, setRemoveBooking, setBookingColor } from '../redux/action/bookingAction';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PaymentInfo = () => {
    const dispatch = useDispatch();
    const bookingInfo = useSelector((state) => state?.booking?.bookingInfo);
    const distance = useSelector((state) => state?.booking?.distance);
    const transportVehical = useSelector((state) => state?.transport?.transportDetail);
    const cancelInfo = useSelector((state) => state?.booking?.cancelInfo);
    const [response, setResponse] = useState()
    const [isCancelPopupOpen, setIsCancelPopupOpen] = useState(false);
    const [isPaymentPopupOpen, setIsPaymentPopupOpen] = useState(false);
    const navigate = useNavigate();
    const cancelStatus = cancelInfo?.data?.data?.status
    const panding = bookingInfo?.data?.status
    const count = transportVehical?.pr_KM_charge * distance;
    const handleCancelBooking = async () => {
        try {
            const bookingId = bookingInfo?.data?._id;
            if (!bookingId) {
                alert("Booking ID not found!");
                return;
            }

            const token = localStorage.getItem("token"); // or however you're storing it
            if (!token) {
                alert("User not authenticated!");
                return;
            }

            const response = await axios.put(
                `http://localhost:5000/api/bookings/${bookingId}/cancel`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setResponse(response)
            dispatch(setCancelBooking(response))

            if (response.status === 200) {
                dispatch(setBookingColor(true, false, false))
                setIsCancelPopupOpen(true)
                // alert("Booking canceled successfully!");
                // Optional: update UI or redirect
            } else {
                alert("Failed to cancel booking.");
            }
        } catch (error) {
            console.error("Cancel Booking Error:", error);
            alert("An error occurred while canceling the booking.");
        }
    };

    const handleProceedPayment = async () => {
        try {
            const bookingId = bookingInfo?.data?._id;
            const token = localStorage.getItem("token");
            const amount = count; // Already calculated above

            if (!bookingId || !token) {
                alert("Missing booking ID or token");
                return;
            }

            const response = await axios.post(
                "http://localhost:5000/api/payment/checkout",
                {
                    bookingId,
                    amount
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                }
            );

            if (response.status === 200) {
                dispatch(setBookingColor(false, true, false))
                setIsPaymentPopupOpen(true)
                // Optional: redirect to payment page or handle payment logic
            } else {
                alert("Failed to initiate payment.");
            }
        } catch (error) {
            console.error("Payment Error:", error);
            alert("An error occurred while processing payment.");
        }
    };

    const handleOkClick = () => {
        setIsCancelPopupOpen(false);
        dispatch(setRemoveBooking(null))
        navigate('/hero');
    };

    return (
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6 mt-10">
            <div>Payment is {bookingInfo?.data.paymentStatus}</div>
            <div className="flex justify-between items-center border-b pb-4">
                <div>
                    <p className="text-sm text-gray-500">31 Mar 2025, 11:29 AM </p>
                    <p className="text-xs text-gray-400">CRN1486190281</p>
                </div>
                <p className="text-lg font-semibold">₹ {count}</p>
            </div>

            <div className="py-4 border-b">
                <p className="text-md font-semibold mb-2">Rate your driver</p>
                <div className="flex gap-2">
                    {Array(5).fill(0).map((_, i) => (
                        <FaRegStar key={i} className="text-xl text-gray-400 hover:text-yellow-400 cursor-pointer" />
                    ))}
                </div>
            </div>

            <div className="py-4 border-b">
                <div className="flex items-start gap-2 mb-2">
                    <IoMdRadioButtonOn className="text-green-500 mt-1" />
                    <p className="text-sm text-gray-700">{bookingInfo?.data?.pickupLocation}</p>
                </div>
                <div className="flex items-start gap-2">
                    <IoMdRadioButtonOn className="text-red-500 mt-1" />
                    <p className="text-sm text-gray-700">{bookingInfo?.data?.dropLocation}</p>
                </div>
            </div>

            <div className="py-4 border-b">
                <p className="text-gray-400 font-semibold mb-2">Fare details</p>
                <div className="flex justify-between text-sm py-1">
                    <p>Trip Fare</p>
                    <p>₹ 376.19</p>
                </div>
                <div className="flex justify-between text-sm py-1">
                    <p className="text-green-600">Coupon discount</p>
                    <p className="text-green-600">₹ -0.0</p>
                </div>
                <div className="flex justify-between text-sm py-1">
                    <p>Fare Without Tax</p>
                    <p>₹ {count}</p>
                </div>
                <div className="flex justify-between text-sm py-1">
                    <p>CGST Tax</p>
                    <p>₹ 0.0</p>
                </div>
                <div className="flex justify-between text-sm py-1">
                    <p>SGST Tax</p>
                    <p>₹ 0.0</p>
                </div>
                <div className="flex justify-between text-sm py-1">
                    <p>Rounding</p>
                    <p>₹ -0.19</p>
                </div>
                <div className="flex justify-between text-sm font-semibold py-2 border-t">
                    <p>Total Order Fare</p>
                    <p>₹ {count}</p>
                </div>
            </div>

            <div className="py-4">
                <p className="text-gray-400 font-semibold mb-2">Payment details</p>
                <div className="flex justify-between text-sm">
                    <p>Cash</p>
                    <p>₹ {count}</p>
                </div>
            </div>


            <div className='py-4'>
                <div className="flex justify-between text-sm">
                    <button
                        onClick={handleCancelBooking}
                        disabled={bookingInfo?.data?.status !== 'pending'}
                        className="px-4 py-2 bg-red-500 text-white rounded"
                    >Cancel Booking</button>
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                        onClick={handleProceedPayment}
                    >Proceed to Payment</button>
                </div>
            </div>

            {/* Popup */}
            {isCancelPopupOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded shadow-xl text-center max-w-sm w-full">
                        <h2 className="text-lg font-semibold mb-4">Booking Cancelled</h2>
                        <p className="mb-6 text-gray-600">Your booking has been successfully canceled.</p>
                        <button
                            onClick={handleOkClick}
                            disabled={bookingInfo?.data?.status !== 'pending'}
                            className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}

            {isPaymentPopupOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded shadow-xl text-center max-w-sm w-full">
                        <h2 className="text-lg font-semibold mb-4">Payment Successful</h2>
                        <p className="mb-6 text-gray-600">Your payment has been completed successfully.</p>
                        <button
                            onClick={() => {
                                setIsPaymentPopupOpen(false);
                                navigate('/hero'); // Or to a confirmation page
                            }}
                            className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}


        </div>
    );
};

export default PaymentInfo;
