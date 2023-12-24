import React from 'react';
import { PersonalDetails } from "../types/PersonalDetails";

export const PersonalDetailsComponent = (personalDetails: PersonalDetails) => {
    return (
        <>
            <br/>
            <img src={personalDetails.avatar} alt="Avatar" />

            <div>
                Name: {personalDetails.name}
            </div>
            {/*Name: {personalDetails.avatar}*/}
            <div>
                Team: {personalDetails.Team}
            </div>
            Join at: {personalDetails.joinedAt}
        </>
    );
};
