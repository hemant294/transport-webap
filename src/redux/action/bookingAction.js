export const BOOKING = 'BOOKING';
export const DISTANCE = 'DISTANCE';
export const CANCEL_BOOKING = 'CANCEL_BOOKING';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';
export const BOOKING_COLOR = 'BOOKING_COLOR';

export const setBooking = (bookingInfo) => ({
  type: BOOKING,
  payload: { bookingInfo }
});


export const setDistances = (distance) => ({
    type: DISTANCE,
    payload: { distance }
  });
  

export const setCancelBooking = (cancelInfo) => ({
    type: CANCEL_BOOKING,
    payload: { cancelInfo }
  });

  export const setRemoveBooking = (removeInfo) => ({
    type: REMOVE_BOOKING,
    payload: { removeInfo }
  });
  
  export const setBookingColor = (iscancelBooking, isprocedPayment, isDefaultColor) => ({
    type: BOOKING_COLOR,
    payload: { iscancelBooking, isprocedPayment, isDefaultColor }
  });
  
  
  