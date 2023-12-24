// src/App.tsx
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import LoginPage from './components/LoginPage';
import InfoPage from "./components/InfoPage";

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path="/" element={<LoginPage/>}></Route>
                        <Route path="/info" element={<InfoPage/>}></Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>

    );
};

export default App;
