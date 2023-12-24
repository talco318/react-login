import React from 'react';
import {PersonalDetails} from "../types/PersonalDetails";
import '../BusinessCard.css';

function formatDate(date: Date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

export const BusinessCardComp = (props: PersonalDetails) => {
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
                    {props.Team}
                </p>

                <p>
                    <strong>Joined: </strong>
                    {formatDate(props.joinedAt)}
                </p>
            </div>
        </div>
    );
};
