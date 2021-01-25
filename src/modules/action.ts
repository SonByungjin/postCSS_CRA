import {LOGINFETCH, LOGINSUCCESS, LOGINERROR, LOGINRELOAD} from './constants';

export interface LoginFetch {
    type: typeof LOGINFETCH;
    // email : string;
    // password : string;
    payload : {
        email : string,
        password : string,
    }
};

export interface LoginSuccess {
    type: typeof LOGINSUCCESS;
    // msg: string;
    payload : string;
};

export interface LoginError {
    type: typeof LOGINERROR;
    // msg : string;
    payload : string;
};

export interface LoginReload {
    type: typeof LOGINRELOAD;
}

export type LOGINACTIONS =
 LoginFetch | LoginSuccess | LoginError | LoginReload;

 export const loginFetch = (payload : LoginFetch['payload']) : LoginFetch => ({
     type: LOGINFETCH,
    //  email : email,
    //  password: password,
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