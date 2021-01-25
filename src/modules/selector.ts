import {RootState} from './reducer';

export const selectLoading = (state : RootState) : boolean => state.signInReducer.loading;

export const selectStatus = (state : RootState) : boolean => state.signInReducer.status;

export const selectMsg = (state : RootState) : string => state.signInReducer.msg;
