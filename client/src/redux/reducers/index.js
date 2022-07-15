import { combineReducers } from 'redux';

import UserReducer from './UserReducer';
import ForgotReducer from './ForgotPass';

export const reducers = combineReducers({ UserReducer,ForgotReducer});