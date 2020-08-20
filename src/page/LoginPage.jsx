import React, { useState } from 'react';


function LoginPage(props) {
    const {onClickLogIn} = props
    const [visible, setVisible] = useState(false);
    
    function showPassword() {
       setVisible(!visible)
    }

    return(
        <div className="container d-flex justify-content-center">
            <div className="card mt-5" style={{"width" : "300px"}} >
                <div className="card-body text-left bg-dark text-light rounded-lg">
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input className="form-control" type="text" id="username"/>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input className="form-control" type ={ visible ? "text" : "password" } id="password"/>
                        <input className="mt-2 mr-2" type="checkbox" checked={visible} onChange ={showPassword} />
                        show password
                    </div>
                    <div className="d-flex justify-content-end mt-2">
                        <button className="btn btn-primary" onClick ={onClickLogIn}>Log In</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage