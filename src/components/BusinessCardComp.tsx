import React from 'react';
import { PersonalDetails } from '../types/PersonalDetails';
import '../BusinessCard.css';

/**
 * Function to format a date in YYYY-MM-DD format.
 * @param {Date} date - The date to format.
 * @returns {string} - Formatted date string.
 */
function formatDate(date: Date): string {
    const d = new Date(date);
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const day = d.getDate().toString().padStart(2, '0');
    const year = d.getFullYear();

    return [year, month, day].join('-');
}

/**
 * Business Card Component.
 * @param {PersonalDetails} props - Personal details for the business card.
 * @returns {JSX.Element} - JSX element representing the business card.
 */
export const BusinessCardComp: React.FC<PersonalDetails> = (props: PersonalDetails): JSX.Element => {
    return (
        <div className="business-card">
            <div className="card-header">
                <img
                    className="avatar"
                    src={props.avatar}
                    alt="Avatar"
                />
            </div>

            <div className="card-body">
                <h3>{props.name}</h3>

                <p>
                    <strong>Team: </strong>
                    <br/>
                    {props.Team}
                </p>

                <p>
                    <strong>Joined: </strong>
                    <br/>
                    {formatDate(props.joinedAt)}
                </p>
            </div>
        </div>
    );
};
