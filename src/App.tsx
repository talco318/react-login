// src/App.tsx
import React from 'react';
import {BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import LoginPage from './components/LoginPage';
import WelcomePage from './components/WelcomePage';

const App: React.FC = () => {
    return (
        <Provider store={store}>
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<LoginPage/>}></Route>
                    <Route path="/" element={<WelcomePage/>}></Route>
                </Routes>
            </div>
        </BrowserRouter>
        </Provider>

    );
};

export default App;
