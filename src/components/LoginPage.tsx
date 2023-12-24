// src/components/LoginPage.tsx
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {loginSuccess} from '../actions/authActions';
import {apiLogin} from "../utils/authApi";
import {isValidValues} from "./validataionFuncs";
import {useNavigate} from 'react-router-dom';

interface LoginPageProps {
}

const LoginPage: React.FC<LoginPageProps> = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(true);

    const handleLogin = async () => {
        apiLogin(email, password).then(async (returnValue) => {
            const response = await returnValue.json();
            if (returnValue.status === 201) {
                const {token, personalDetails} = response[0];
                dispatch(loginSuccess({token, personalDetails}));
                navigate(`/info`);
            }
        })
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
                        <br/>
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </label>
                    <br/>
                    <label>
                        Password:
                        <br/>
                        <input
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </label>
                    <br/>
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
