// src/components/LoginPage.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../actions/authActions';
import {simulateApiLogin} from "../utils/authApi";

interface LoginPageProps {
}

const LoginPage: React.FC<LoginPageProps> = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        // Simulate fetching token from an API based on email and password
        // const fetchedToken = 'your-fetched-token';
        const fetchedToken = await simulateApiLogin(email, password);

        // Dispatch action to store token in Redux state
        dispatch(loginSuccess(fetchedToken));
        console.log(loginSuccess(fetchedToken))

    };

    return (

        <div className="wrapper fadeInDown">
            <div id="formContent">

            <h1>Login Page</h1>

            <form>
                <label>
                    Email:
                    <br/>

                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <br/>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />
                <button type="button" onClick={handleLogin} className="btn btn-primary">
                    <span className="spinner-border spinner-border-sm fadeIn fourth"></span>
                    Login
                </button>
            </form>
        </div>
        </div>

    );
};

export default LoginPage;
