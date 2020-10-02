import React from 'react';
import {useMutation} from '@apollo/react-hooks';
import LOGIN_USER from '../mutations/loginUser';

const DemoLogin = () => {
    const [loginUser, { data }] = useMutation(LOGIN_USER);
    const login = (e) => {
        e.preventDefault();
        loginUser({variables: {email: "fiery@swagger.com", password: "demodemo"}}).then(res => {
            debugger;
        })
    }

    return <div className="login-btn-container">
        <button className="login-btn"onClick={login} value="login">Demo Login</button>
    </div>
}

export default DemoLogin;