import axios from 'axios';
import {put, takeEvery, all} from 'redux-saga/effects';
import {LOGINFETCH} from './constants';
import {LoginFetch} from './action';// 액션 타입
import {loginSuccess, loginError} from './action';// 액션 함수


function* loginSaga(action: LoginFetch){
    try{
        console.log(action.payload);
        // const data = yield axios.post(
        //         'http://0.0.0.0:9002/api/v2/barong/identity/sessions',
        //         {
        //             email : action.payload.email,
        //             password : action.payload.password,
        //             otp_code: ""
        //         }
        //     );
        // console.log(JSON.parse(data.data.data));
        // yield put(loginSuccess(`${JSON.parse(data.data.data).nickname}님 환영합니다`));
    } catch(error){
        // switch(error.code){
        //     case 400:
        console.log(error);
        console.log(error.code);
        yield put(loginError('사용자 정보를 확인하세요'));
        // }
    };
};

function* signInSaga(){
    yield takeEvery(LOGINFETCH, loginSaga);
};

export function* rootSaga(){
    yield all ([signInSaga()]);
};
