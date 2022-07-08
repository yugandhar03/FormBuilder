import * as actionType from '../constants/actionTypes';

const UserReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case actionType.AUTH:
            return { ...state, authData: action.data, loading: false, errors: action.data.message };
        // case actionType.RESETPASS:
        //     return { authData: action.data, loading: false, errors:null };
        case actionType.LOGOUT:
            localStorage.clear();

            return { ...state, authData: null, loading: false, errors: null };
        default:
            return state;
    }
};

export default UserReducer;