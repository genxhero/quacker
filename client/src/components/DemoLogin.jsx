import React, {useEffect} from 'react';
import {useMutation} from '@apollo/react-hooks';
import LOGIN_USER from '../mutations/loginUser';
import currentUser from '../queries/currentUser';

const DemoLogin = () => {

    const updateCache = (cache, {data}) => {
        // debugger;
        const user = data.loginUser.user;
        cache.writeQuery({
            query: currentUser,
            data: {
                currentUser: user
            }
        }
        )

    }

    const [loginUser, { data }] = useMutation(LOGIN_USER, {update: updateCache});

    

    const login = (e) => {
        e.preventDefault();
        loginUser({variables: {email: "fiery@swagger.com", password: "demodemo"}, refetchQueries: ["currentUser"]}).then(res => {
            //Might not need the line before, we shall see!
            //I might also only need the redirect (props.history) and the catch (errors)
            // const user = res.data.loginUser.user;
            // console.log(user)
            // debugger;
        })
    }


    return <div className="login-btn-container">
        <button className="login-btn"onClick={login} value="login">Demo Login</button>
    </div>
}

export default DemoLogin;