import {LOGINFETCH, LOGINSUCCESS, LOGINERROR, LOGINRELOAD} from './constants';

export interface LoginFetch {
    type: typeof LOGINFETCH;
    payload : {
        email : string,
        password : string,
    }
};

export interface LoginSuccess {
    type: typeof LOGINSUCCESS;
    payload : string;
};

export interface LoginError {
    type: typeof LOGINERROR;
    payload : string;
};

export interface LoginReload {
    type: typeof LOGINRELOAD;
};

export type LOGINACTIONS =
 LoginFetch | LoginSuccess | LoginError | LoginReload;

 export const loginFetch = (payload : LoginFetch['payload']) : LoginFetch => ({
     type: LOGINFETCH,
    payload
 });

 export const loginSuccess = (payload : LoginSuccess['payload']) : LoginSuccess =>({
     type: LOGINSUCCESS,
     payload,
 });

 export const loginError = (payload : LoginError['payload']) : LoginError => ({
     type: LOGINERROR,
     payload,
});

export const loginReload = () : LoginReload => ({
    type : LOGINRELOAD,
})