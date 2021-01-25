import React, { Component } from 'react';

export class Footer extends Component {
    render() {
        return (
            <div className="pg-footer">
                <div className="pg-footer_wrap">
                    <div id='footer' className="pg-footer_wrap_control"
                    onClick={()=>{
                        console.log(document.getElementById('footer'));
                        document.getElementById('footer')?.classList.toggle('hide');
                    }}
                    ></div>
                </div>
            </div>
        );
    }
}
