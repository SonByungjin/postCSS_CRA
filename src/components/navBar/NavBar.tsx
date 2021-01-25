import React, { Component } from 'react';

interface OwnState {
    menu : string[];
    auth : string[];
}

export class NavBar extends Component<{}, OwnState> {
    constructor(props : {}){
        super(props);
        this.state = {
            menu : [
                '거래소', '자산관리', '계정', '고객센터'
            ],
            auth : ['로그인', '회원가입']
        }
    }
    render() {
        const {menu, auth} = this.state;
        return (
            <div className="pg-header">
                <div className="pg-header_wrap">
                    <div className="pg-header_wrap-box">
                        <span className="pg-header_wrap-box_logo">로고</span>
                        {menu.map((e)=>
                            <span className="pg-header_wrap-box_menu">
                                {e}
                            </span>
                        )}
                    </div>
                    <div className="pg-header_wrap-box">
                        {auth.map((e)=>
                            <span className="pg-header_wrap-box_auth">
                                {e}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
