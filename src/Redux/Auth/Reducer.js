import {
    GET_USER_REQUEST, GET_USER_SUCCESS,
    LOGIN_REQUEST,
    LOGIN_SUCCESS, LOGOUT,
    REGISTER_REQUEST,
    REGISTER_SUCCESS
} from "@/Redux/Auth/ActionType.js";

const initialState = {
    user: null,
    loading: false,
    error: null,
    jwt: null,
    projectSize: 0,
}

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:
            return {...state, loading: true, error: null}

        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {...state, jwt: action.payload.jwt, loading: false, error: null}

        case GET_USER_SUCCESS:
            return {...state, user: action.payload, loading: false, error: null}

        case LOGOUT:
            return initialState;
        default:
            return state;
    }
}
