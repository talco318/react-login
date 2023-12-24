// src/components/InfoPage.tsx
import React from 'react';
import {useSelector} from 'react-redux';
import {PersonalDetailsComponent} from "./PersonalDetails";
import {useNavigate} from 'react-router-dom';

const InfoPage: React.FC = () => {
    const token = useSelector((state: any) => state);
    const navigate = useNavigate();


    if (!token) {
        navigate(`/`);
    }

    return (
        <div>

            <h1>Info Page</h1>
            {JSON.stringify(token)}

            <PersonalDetailsComponent avatar={token.loginDetails.personalDetails.avatar}
                                      joinedAt={token.loginDetails.personalDetails.joinedAt}
                                      name={token.loginDetails.personalDetails.name}
                                      Team={token.loginDetails.personalDetails.Team}/>
        </div>
    );
};

export default InfoPage;
