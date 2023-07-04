import { AuthAction ,AuthState} from '../typings/type';
import * as actionTypes from '../actionTypes'
const initialState :AuthState = {
    isAuthenticated: false,
    user: null
};

const authReducer = (state = initialState, action: AuthAction) => {
    switch (action.type) {
        case actionTypes.LOGIN:
          return {
            ...state,
            isAuthenticated: true,
            user: action.payload,
          };
        case actionTypes.LOGOUT:
          return {
            ...state,
            isAuthenticated: false,
            user: null,
          };
        default:
          return state;
      }
  
};

export default authReducer;