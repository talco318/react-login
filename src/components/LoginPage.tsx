// src/components/LoginPage.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../actions/authActions';
import { simulateApiLogin } from "../utils/authApi";
import { isValidValues } from "./validataionFuncs";

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(true);

    const handleLogin = async () => {
        const fetchedToken = await simulateApiLogin(email, password);
        dispatch(loginSuccess(fetchedToken));
        console.log(loginSuccess(fetchedToken));
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = e.target.value;
        const isValid = isValidValues(newEmail, password);

        setEmail(newEmail);
        setIsFormValid(isValid);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value;
        const isValid = isValidValues(email, newPassword);
        setPassword(newPassword);
        setIsFormValid(isValid);
    };

    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">
                <h1>Login Page</h1>

                <form>
                    <label>
                        Email:
                        <br />
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </label>
                    <br />
                    <label>
                        Password:
                        <br />
                        <input
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </label>
                    <br />
                    <button
                        type="button"
                        onClick={handleLogin}
                        className="btn btn-primary"
                        disabled={isFormValid}
                    >
                        <span className="spinner-border spinner-border-sm fadeIn fourth"></span>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
