import {combineReducers} from 'redux';
import {LOGINFETCH, LOGINSUCCESS, LOGINERROR, LOGINRELOAD} from './constants';
import {LOGINACTIONS} from './action';

export interface AuthState {
    loading : boolean;
    status: boolean;
    msg : string;
};

const initialState : AuthState = {
    loading: true,
    status: false,
    msg: '',
};

function loginReducer (state=initialState, action:LOGINACTIONS){
    switch(action.type){
        case LOGINFETCH :
            return state;
        case LOGINSUCCESS :
            return {
                ...state,
                loading: false,
                status : true,
                msg : action.payload,
            };
        case LOGINERROR :
            return {
                ...state,
                loading: false,
                status : false,
                msg : action.payload,
            };
        case LOGINRELOAD :
            return {
                ...state,
                loading : true,
            }
        default :
            return state;
    };
};

export const rootReducer = combineReducers({
    signInReducer: loginReducer,
});

export type RootState = ReturnType<typeof rootReducer>;