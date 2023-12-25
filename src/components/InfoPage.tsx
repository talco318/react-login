// src/components/InfoPage.tsx
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {BusinessCardComp} from "./BusinessCardComp";
import {InfoErrorComponent} from "./InfoError";
import ProjectsTable from "./ProjectsTable";
import {useNavigate} from 'react-router-dom';
import {logout} from "../actions/authActions";

const InfoPage: React.FC = () => {
    const responseDetails = useSelector((state: any) => state);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    if (responseDetails.loginDetails.token === null) {
        return (
            //the user should login to see the details.
            <InfoErrorComponent></InfoErrorComponent>
        );
    }

    const handleLogout = () => {
        // Remove user information from localStorage
        localStorage.removeItem('user');
        dispatch(logout());
        // Navigate to the '/' page
        navigate('/');
    };


    return (
        <div className="site-style">
            <div>
                <h1 className="h1-style">Projects Page</h1>

                    <button className="logout-button" onClick={handleLogout}>
                        Logout
                    </button>
                    <br/>
                    <br/>
                <center>

                    <div>
                        <BusinessCardComp avatar={responseDetails.loginDetails.personalDetails.avatar}
                                          joinedAt={responseDetails.loginDetails.personalDetails.joinedAt}
                                          name={responseDetails.loginDetails.personalDetails.name}
                                          Team={responseDetails.loginDetails.personalDetails.Team}/>
                    </div>
                </center>

            </div>
            <div>
                <ProjectsTable></ProjectsTable>

            </div>
        </div>

    );
};

export default InfoPage;
