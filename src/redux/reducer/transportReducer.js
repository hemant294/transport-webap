import { VEHICLE_TYPE } from '../action/transportAction';

const initialState = {
    vehicleId: null,
    transportDetail: null,
};

const transportReducer = (state = initialState, action) => {
    switch (action.type) {
        case VEHICLE_TYPE:
            return {
                ...state,
                vehicleId: action.payload.id,
                transportDetail: action.payload.transportDetail
            };

        default:
            return state;
    }
};

export default transportReducer;
