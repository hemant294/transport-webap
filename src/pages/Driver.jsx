import React from 'react'
import { useSelector } from 'react-redux';
import PaymentInfo from './PaymentInfo';

const Driver = () => {
    const riderInfo = useSelector((state) => state?.driver?.driverInfo);
    const cancelInfo = useSelector((state) => state?.booking?.cancelInfo);
    const { iscancelBooking, isprocedPayment, isDefaultColor } = useSelector((state) => state.booking);
    return (
        <div className="relative py-3 w-full bg-gray-300 mt-8 min-h-screen">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto mt-8 ">

            <div className={`absolute inset-0 
    ${iscancelBooking ? 'bg-red-400' 
    : isprocedPayment ? 'bg-green-400' 
    : 'bg-gradient-to-r from-sky-300 to-sky-600'} 
    shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl`}>
</div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h2 className="text-xl font-semibold text-gray-700 mb-4">Driver Information</h2>
                            <div className="flex items-center mb-4">
                                <img src={riderInfo?.image} alt="Rider" className="w-16 h-16 rounded-full mr-4" />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">{riderInfo?.name}</h3>
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 text-yellow-500 mr-1 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.176-6.545L.587 7.645l6.545-.952L10 1l2.868 5.693 6.545.952-4.764 4.095 1.176 6.545z" /></svg>
                                        <span className="text-gray-600">{riderInfo?.rating}</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-2">Email: {riderInfo?.email}</p>
                            <p className="text-gray-600 mb-2">Phone: {riderInfo?.phone}</p>
                            <p className="text-gray-600 mb-2">Vehicle No: {riderInfo?.vehicleNumber}</p>

                            {riderInfo?.reviews && riderInfo?.reviews.length > 0 && (
                                <div className="mt-4">
                                    <h4 className="text-md font-semibold text-gray-700 mb-2">Reviews</h4>
                                    <ul>
                                        {riderInfo?.reviews.map((review) => (
                                            <li key={review?.id} className="text-gray-600 mb-1">- {review?.text}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                <PaymentInfo />
                </div>
            </div>
        </div>
    )
}

export default Driver