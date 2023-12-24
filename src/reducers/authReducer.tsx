// src/reducers/authReducer.ts
interface AuthState {
    token: string | null;
}

const initialState: AuthState = {
    token: null,
};

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                token: action.payload.loginDetail.token,
                personalDetails: action.payload.loginDetail.personalDetails
            };
        case 'LOGOUT':
            return {
                ...state,
                token: null,
            };
        default:
            return state;
    }
};

export default authReducer;
