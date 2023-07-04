import * as actionTypes from "../actionTypes";
import {AuthAction,AuthState} from "../typings/type";
import { Dispatch } from 'redux';




// export function simulateHttpRequest(action: ArticleAction) {
//   return (dispatch: DispatchType) => {
//     setTimeout(() => {
//       dispatch(action)
//     }, 500)
//   }
// }



import { simulateHttpRequest } from '../../services/simulateHttpRequest'

// Action creator to simulate a login request
export const login = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    dispatch({ type: actionTypes.LOGIN,payload:{

    } });

    try {
      // Simulating an asynchronous login request
    //   const response = await simulateHttpRequest(); // Replace with your actual login API call
      dispatch({ type: actionTypes.LOGIN,payload:{

      } });
    //   dispatch({
    //     type: AuthActionTypes.LOGIN_SUCCESS,
    //     payload: response.data,
    //   });
    } catch (error) {
        dispatch({ type: actionTypes.LOGIN,payload:{

        } });
    //   dispatch({
    //     type: AuthActionTypes.LOGIN_FAILURE,
    //     payload: error.message,
    //   });
    }
  };
};

// Action creator to simulate a logout request
export const logout = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    dispatch({ type: actionTypes.LOGOUT });

    // try {
    //   // Simulating an asynchronous logout request
    //   await simulateHttpRequest(); // Replace with your actual logout API call

    //   dispatch({ type: AuthActionTypes.LOGOUT_SUCCESS });
    // } catch (error) {
    //   dispatch({
    //     type: AuthActionTypes.LOGOUT_FAILURE,
    //     payload: error.message,
    //   });
    // }
  };
};
