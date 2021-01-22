import {LOGINFETCH, LOGINSUCCESS, LOGINERROR, LOGINRELOAD} from './constants';

export interface LoginFetch {
    type: typeof LOGINFETCH;
    email : string;
    password : string;
};

export interface LoginSuccess {
    type: typeof LOGINSUCCESS;
    msg: string;
};

export interface LoginError {
    type: typeof LOGINERROR;
    msg : string;
};

export interface LoginReload {
    type: typeof LOGINRELOAD;
}

export type LOGINACTIONS =
 LoginFetch | LoginSuccess | LoginError | LoginReload;

 export const loginFetch = (email:string, password:string) : LoginFetch => ({
     type: LOGINFETCH,
     email : email,
     password: password,
 });

 export const loginSuccess = (msg : string) : LoginSuccess =>({
     type: LOGINSUCCESS,
     msg : msg,
 });

 export const loginError = (msg : string) : LoginError => ({
     type: LOGINERROR,
     msg : msg,
});

export const loginReload = () : LoginReload => ({
    type : LOGINRELOAD,
})