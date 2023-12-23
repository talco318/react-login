// src/components/LoginPage.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../actions/authActions';

interface LoginPageProps {
}

const LoginPage: React.FC<LoginPageProps> = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Simulate fetching token from an API based on email and password
        const fetchedToken = 'your-fetched-token';

        // Dispatch action to store token in Redux state
        dispatch(loginSuccess(fetchedToken));

        };

    return (
        <div>
            <h2>Login Page</h2>
            <form>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />
                <button type="button" onClick={handleLogin}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
