import { BOOKING, DISTANCE, CANCEL_BOOKING, REMOVE_BOOKING, BOOKING_COLOR } from '../action/bookingAction';

const initialState = {
    bookingInfo: JSON.parse(localStorage.getItem("bookingInfo")) || null,
    distance: JSON.parse(localStorage.getItem("distance")) || 0,
    cancelBooking: null,
    iscancelBooking: false,
    isprocedPayment: false,
    isDefaultColor: true

};

const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case BOOKING:
            return {
                ...state,
                bookingInfo: action.payload.bookingInfo,
                iscancelBooking: false,
        isprocedPayment: false,
        isDefaultColor: true

            };

        case DISTANCE:
            return {
                ...state,
                distance: action.payload.distance,
            };

        case CANCEL_BOOKING:
            return {
                ...state,
                cancelInfo: action.payload.cancelInfo,
            };

        case REMOVE_BOOKING:
            return {
                ...state,
                cancelBooking: action.payload.removeInfo,
            };

        case BOOKING_COLOR:
            return {
                ...state,
                iscancelBooking: action.payload.iscancelBooking,
                isprocedPayment: action.payload.isprocedPayment,
                isDefaultColor: action.payload.isDefaultColor
            };

        default:
            return state;
    }
};

export default bookingReducer;
