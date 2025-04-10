import { SET_USER, LOGOUT_USER } from '../action/authActions';
const savedUser = localStorage.getItem('user');
const savedToken = localStorage.getItem('token');
console.log(savedUser, savedToken)
const initialState = {
  user: savedUser ? JSON.parse(savedUser) : null,
  token: savedToken || null
};

const authReducer = (state = initialState, action) => {
    console.log(action.payload)
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token
      };

    case LOGOUT_USER:
        localStorage.removeItem('user');
        localStorage.removeItem('token');
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
