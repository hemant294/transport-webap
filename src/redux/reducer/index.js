import { combineReducers } from 'redux';
import authReducer from './authReducer';
import transportReducer from './transportReducer';
import driverBookingReducer from './driverBookingReducer';
import bookingReducer from './bookingReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  transport: transportReducer,
  driver: driverBookingReducer,
  booking: bookingReducer
});

export default rootReducer;
