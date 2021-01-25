import axios from 'axios';
import { put } from 'redux-saga/effects';
import { LoginFetch, loginSuccess, loginError } from '../action';

export function* loginSaga(action: LoginFetch){
    try{
        console.log(action.payload);
        const data = yield axios.post(
                'http://0.0.0.0:9002/api/v2/barong/identity/sessions',
                {
                    email : action.payload.email,
                    password : action.payload.password,
                    otp_code: ""
                }
            );
        // console.log(JSON.parse(data.data.data));
        yield put(loginSuccess(`${JSON.parse(data.data.data).nickname}님 환영합니다`));
    } catch(error){
        // switch(error.code){
        //     case 400:
        console.log(error);
        console.log(error.code);
        yield put(loginError('사용자 정보를 확인하세요'));
        // }
    };
};