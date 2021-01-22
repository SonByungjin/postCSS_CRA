import {combineReducers} from 'redux';
import {LOGINFETCH, LOGINSUCCESS, LOGINERROR, LOGINRELOAD} from './constants';
import {LOGINACTIONS} from './action';

const initialState : {
    loading : boolean,
    status: boolean,
    msg : string,
} = {
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
                msg : action.msg,
            } ;
        case LOGINERROR :
            return {
                ...state,
                loading: false,
                status : false,
                msg : action.msg,
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