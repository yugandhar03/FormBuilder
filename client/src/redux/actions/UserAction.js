import { AUTH,RESETPASS } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, router) => async (dispatch) => {
  
    try {
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data });

        router('/home');
    } catch (error) {
        console.log(error);
    }
};

export const signup = (formData, router) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data });

        router('/');
    } catch (error) {
        console.log(error);
    }   
};

export const forgotpassword = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.forgotpassword(formData);
        dispatch({ type: AUTH, data });
    } catch (error) {
        const {data} = error.response
        dispatch({ type: AUTH, data });
    }
};

// export const verifylink = (formData, navigate) => async (dispatch) => {
//      try {
//         const { data } = await api.verifylink(formData);
//         console.log('action',data)
//         dispatch({ type: RESETPASS, data });
//     } catch (error) {
//         //  console.log(error)
//         const {data} = error.response
//         dispatch({ type: RESETPASS, data });
//     }
// };