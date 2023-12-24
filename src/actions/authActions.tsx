// src/actions/authActions.ts

import {PersonalDetails} from "../types/PersonalDetails";

type LoginDetail = {
    token: string,
    personalDetails: PersonalDetails
}
export const loginSuccess = (loginDetail: LoginDetail) => ({

    type: 'LOGIN_SUCCESS',
    payload: {loginDetail},
});

export const logout = () => ({
    type: 'LOGOUT',
});