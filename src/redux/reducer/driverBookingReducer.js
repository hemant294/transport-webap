import { DRIVER_INFO } from '../action/driverBookingAction';

const initialState = {
    driverInfo: JSON.parse(localStorage.getItem("riderInfo")) || null,
};

const driverBookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case DRIVER_INFO:
            return {
                ...state,
                driverInfo: action.payload.riderInfo,
            };

        default:
            return state;
    }
};

export default driverBookingReducer;
