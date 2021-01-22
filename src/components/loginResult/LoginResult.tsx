import React, { Component } from 'react';
import {loginReload} from '../../modules/action';

interface OwnProps {
    loginReload : typeof loginReload;
    loginStatus : boolean;
    msg : string;
}

export class LoginResult extends Component<OwnProps> {
    render() {
        const {loginReload, loginStatus, msg} = this.props;
        return (
            <div className='cr-loginResult'>
                <div className='cr-loginResult-box'>
                    <span
                    className={loginStatus?
                    'cr-loginResult-box-comment_success':
                    'cr-loginResult-box-comment_failure'}>
                        로그인 {loginStatus?'성공':'실패'}
                    </span>
                </div>
                <div className='cr-loginResult-box'>
                    <span className='cr-loginResult-box_msg'>
                        {msg}
                    </span>
                </div>
                <div className='cr-loginResult-box'>
                    <span
                    onClick={()=>{
                        loginReload();
                    }}
                    className='cr-loginResult-box_retry'
                    >
                        재로그인
                    </span>
                </div>
            </div>
        );
    }
}
