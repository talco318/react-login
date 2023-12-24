// src/reducers/rootReducer.ts
import {combineReducers} from 'redux';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    loginDetails: authReducer,
});

export default rootReducer;
