import * as actionType from './ActionType';

const initialState = {
    messages: [],
    loading: false,
    error: null,
    chat: null
}

export const chatReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionType.FETCH_MESSAGES_REQUEST:
        case actionType.SEND_MESSAGE_REQUEST:
        case actionType.FETCH_CHAT_BY_PROJECT_REQUEST:
        case actionType.FETCH_CHAT_MESSAGES_REQUEST:
            return {...state, loading: true, error: null}

        case actionType.SEND_MESSAGE_SUCCESS:
            return {...state, messages: [...state.messages, action.message], loading: false, error: null}


        case actionType.FETCH_CHAT_MESSAGES_SUCCESS:
            return {...state, chat: action.chat, loading: false, error: null}

        case actionType.FETCH_CHAT_BY_PROJECT_SUCCESS:
            return {...state, chat: action.chat, loading: false, error: null}

        case actionType.FETCH_MESSAGES_SUCCESS:
            return {...state, messages: action.message, loading: false, error: null}

        case actionType.FETCH_MESSAGES_FAILURE:
        case actionType.SEND_MESSAGE_FAILURE:
        case actionType.FETCH_CHAT_BY_PROJECT_FAILURE:
        case actionType.FETCH_CHAT_MESSAGES_FAILURE:
            return {...state, loading: false, error: action.error}

        default:
            return state;
    }
}

