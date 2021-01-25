import { all } from 'redux-saga/effects';
import {signInSaga} from './sagas';

export function* rootSaga() {
    yield all ([signInSaga()]);
}