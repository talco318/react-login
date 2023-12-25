// src/components/LoginPage.tsx
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {loginSuccess} from '../actions/authActions';
import {apiLogin} from "../utils/authApi";
import {isValidValues, isValidEmail, checkPasswordValidity} from "./validataionFuncs";
import {useNavigate} from 'react-router-dom';
import {PersonalDetails} from "../types/PersonalDetails";
import {BusinessCardComp} from "./BusinessCardComp";
import {MOCK_LOGIN_DETAILS} from "../DemoVars";

interface LoginPageProps {
}

const LoginPage: React.FC<LoginPageProps> = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const[errorMessage, setErrorMessage] = useState('');
    function doLogin(token: string, personalDetails: PersonalDetails) {
        dispatch(loginSuccess({token, personalDetails}));
        navigate(`/info`);
    }

    useEffect(() => {
        const localStorageData = localStorage.getItem('user');
        if (localStorageData) {
            const encodedString = JSON.parse(localStorageData);
            doLogin(encodedString.token, encodedString.personalDetails);
        }
    }, [])
    const handleLogin = async () => {
        if(email===MOCK_LOGIN_DETAILS.email && password===MOCK_LOGIN_DETAILS.password) {
            setErrorMessage('');
            apiLogin(email, password).then(async (returnValue) => {
                const response = await returnValue.json();
                if (returnValue.status === 201) {
                    const {token, personalDetails} = response[0];
                    doLogin(token, personalDetails);
                    const userAsString = JSON.stringify({token, personalDetails})
                    localStorage.setItem("user", userAsString);
                }
            })
        }else{
            setErrorMessage('Login details incorrect!');
        }

    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = e.target.value;
        const isValid = isValidValues(newEmail, password);
        setIsEmailValid(isValidEmail(newEmail));
        setEmail(newEmail);
        setIsFormValid(isValid);
    };


    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value;
        setIsPasswordValid(checkPasswordValidity(newPassword))
        const isValid = isValidValues(email, newPassword);
        setPassword(newPassword);
        setIsFormValid(isValid);
    };

    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">
                <h1 className="h1-style">Login Page</h1>

                <form>
                    <label>
                        Email:
                        <br/>
                        {!isEmailValid && <p style={{color: 'red'}}>Email is invalid</p>}
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
                        {!isPasswordValid && <p style={{color: 'red'}}>Password is invalid</p>}
                        <input
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </label>
                    <br/><br/>

                    <button
                        type="button"
                        onClick={handleLogin}
                        className="btn btn-primary"
                        disabled={isFormValid}
                    >
                        <span className="spinner-border spinner-border-sm fadeIn fourth"></span>
                        Login
                    </button>
                   <div className='error'> {errorMessage}</div>
                </form>
            </div>
            <div className='bottom-component'>
                Developed by:
                <br/>
                <a href="https://www.linkedin.com/in/talco318/">
                    <BusinessCardComp
                        avatar='https://media.licdn.com/dms/image/D4D03AQEgTv4i4zdlrQ/profile-displayphoto-shrink_200_200/0/1686567516263?e=1709164800&v=beta&t=E9NLBqqKh6ucKS6MU8k8vvIxfTLByhWQe1xoKj9mntQ'
                        joinedAt={new Date()}
                        name='Tal Cohen'
                        Team='Full Stack'/>
                </a></div>

        </div>
    );
};

export default LoginPage;
