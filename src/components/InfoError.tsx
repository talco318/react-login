import React from 'react';

export const InfoErrorComponent = () => {
    return (
        <div className='center-text'>
            <center>
            <h1 className='error-message'>Please login first!</h1>
                <div className='h4'> <a href={"/"}>login page</a></div>
            </center>
        </div>
    );
};
