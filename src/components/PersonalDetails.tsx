import React from 'react';
import { PersonalDetails } from "../types/PersonalDetails";

export const PersonalDetailsComponent = (personalDetails: PersonalDetails) => {
    return (
        <>
            <div>
                Name: {personalDetails.name}
            </div>
            {/*Name: {personalDetails.avatar}*/}
            {/*<img src={personalDetails.avatar} alt="Avatar" />*/}
            <div>
                Team: {personalDetails.Team}
            </div>
            Join at: {personalDetails.joinedAt}
        </>
    );
};
