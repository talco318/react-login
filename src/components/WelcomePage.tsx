// src/components/WelcomePage.tsx
import React from 'react';
import { useSelector } from 'react-redux';

const WelcomePage: React.FC = () => {
    const token = useSelector((state: any) => state.auth.token);

    return (
        <div>
            <h2>Welcome Page</h2>
            <p>Token: {token}</p>
        </div>
    );
};

export default WelcomePage;
