// src/components/InfoPage.tsx
import React from 'react';
import {useSelector} from 'react-redux';
import {PersonalDetailsComponent} from "./PersonalDetails";
import {InfoErrorComponent} from "./InfoError";
import ProjectsTable from "./ProjectsTable";

const InfoPage: React.FC = () => {
    const responseDetails = useSelector((state: any) => state);


    if (responseDetails.loginDetails.token === null) {
        return (
            //the user should login to see the details.
            <InfoErrorComponent></InfoErrorComponent>
        );
    }


    return (
        <div>
            <div>
                <h1>Info Page</h1>
                {/*{JSON.stringify(responseDetails)}*/}

                <PersonalDetailsComponent avatar={responseDetails.loginDetails.personalDetails.avatar}
                                          joinedAt={responseDetails.loginDetails.personalDetails.joinedAt}
                                          name={responseDetails.loginDetails.personalDetails.name}
                                          Team={responseDetails.loginDetails.personalDetails.Team}/>
            </div>
            <div>
                <ProjectsTable></ProjectsTable>
            </div>
        </div>

    );
};

export default InfoPage;
