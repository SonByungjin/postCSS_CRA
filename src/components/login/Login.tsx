import React, { Component } from 'react';
import {loginFetch} from '../../modules/action';

interface OwnProps {
    loginFetch : typeof loginFetch;
}

interface OwnState {
    email: string;
    password:string;
}

export class Login extends Component<OwnProps,OwnState> {
    constructor(props : OwnProps){
        super(props);
        this.state = {
            email:'',
            password:'',
        }
    }

    // handleLoginFetch = () => {
    //     const {email, password} = this.state;
    //     if(email&&password){
    //         this.props.loginFetch(email, password);
    //     } else {
    //         alert('정보를 모두 입력주세요')
    //     }
    // }

    render() {
        const {email, password} = this.state;
        const {loginFetch} = this.props;
        return (
            <>
            <div className='cr-login'>
                <div className='cr-login-box'>
                    <input
                    className='cr-login-box_email'
                    placeholder='email'
                    onChange={(e)=>{
                        this.setState({
                            email :
                            (e.target as HTMLInputElement).value
                        })
                    }}
                    onKeyUp={(e)=>{
                        if(e.key === 'Enter'){
                            loginFetch({email, password});
                            // this.handleLoginFetch();
                        }
                    }}
                    ></input>
                </div>
                <div className='cr-login-box'>
                    <input
                    className='cr-login-box-password'
                    type='password'
                    placeholder='password'
                    onChange={
                        (e)=>{
                        this.setState({
                            password : 
                            (e.target as HTMLInputElement).value
                        });
                    }}
                    onKeyUp={(e)=>{
                        if(e.key === 'Enter'){
                            loginFetch({email, password});
                            // this.handleLoginFetch();
                        }
                    }}
                    ></input>
                </div>
                <div className='cr-login-box'>
                    <button
                    onClick={()=>{
                        loginFetch({email, password});
                        // this.handleLoginFetch();
                    }}
                    className='cr-login-box_btn'
                    >로그인</button>
                </div>
            </div>
            </>
        );
    }
}
