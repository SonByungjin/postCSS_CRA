import { takeEvery } from  'redux-saga/effects';
import { LOGINFETCH } from '../constants';
import { loginSaga } from './loginSaga';

export function* signInSaga(){
    yield takeEvery(LOGINFETCH, loginSaga);
};