import { SET_USER, LOGOUT_USER } from '../action/authActions';
const savedUser = localStorage.getItem('user');
const savedToken = localStorage.getItem('token');
const initialState = {
  user: savedUser ? JSON.parse(savedUser) : null,
  token: savedToken || null,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true, 
      };

    case LOGOUT_USER:
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.removeItem('bookingInfo');
        localStorage.removeItem('distance');
        localStorage.removeItem('paymentAmount');
        localStorage.removeItem('riderInfo');
        return {
          ...state,
          user: null,
          token: null
        };
  

    default:
      return state;
  }
};

export default authReducer;
