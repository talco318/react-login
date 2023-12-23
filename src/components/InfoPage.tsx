// src/components/InfoPage.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import {PersonalDetailsComponent} from "./PersonalDetails";

const InfoPage: React.FC = () => {
    debugger;
    const token = useSelector((state: any) => state);


 //  TODO: if(!token) return go to login page )
    return (
        <div>

            <h1>Info Page</h1>
            {JSON.stringify(token)}

            {/*<PersonalDetailsComponent avatar={token.personalDetails.joinedAt} joinedAt={token.personalDetails.joinedAt} name={token.personalDetails.name}  Team={token.personalDetails.Team}/>*/}
            {/*<p>Token: {token}</p>*/}
        </div>
    );
};

export default InfoPage;
