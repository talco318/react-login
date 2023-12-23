// src/actions/authActions.ts
export const loginSuccess = (token: string) => ({
    type: 'LOGIN_SUCCESS',
    payload: { token },
});

export const logout = () => ({
    type: 'LOGOUT',
});