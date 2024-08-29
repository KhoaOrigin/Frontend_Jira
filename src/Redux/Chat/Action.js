import * as actionType from './ActionType';
import api from "@/config/api.js";


export const sendMessage = (messageData) => async (dispatch) => {
    dispatch({type: actionType.SEND_MESSAGE_REQUEST})
    try {
        const {data} = await api.post("/api/message/send", messageData)
        console.log("send message", data)
        dispatch({type: actionType.SEND_MESSAGE_SUCCESS, message: data.data})
    } catch(error) {
        console.log("error", error)
        dispatch({type: actionType.SEND_MESSAGE_FAILURE, error: error.message})
    }
}

// export const getChatByProject = (projectId) => async (dispatch) => {
//     dispatch({type: actionType.FETCH_CHAT_BY_PROJECT_REQUEST})
//     try {
//         const {data} = await api.get(`/api/project/${projectId}/chat`)
//         console.log("get chat by project", data)
//         dispatch({type: actionType.FETCH_CHAT_BY_PROJECT_SUCCESS, chat: data.data})
//     } catch(error) {
//         console.log("error", error)
//         dispatch({type: actionType.FETCH_CHAT_BY_PROJECT_FAILURE, error: error.message})
//     }
// }



export const getChatMessage = (chatId) => async (dispatch) => {
    dispatch({type: actionType.FETCH_CHAT_MESSAGES_REQUEST})
    try {
        const {data} = await api.get(`/api/message/chat/${chatId}`)
        console.log("get chat message", data)
        dispatch({type: actionType.FETCH_CHAT_MESSAGES_SUCCESS, chat: data.data})
    } catch(error) {
        console.log("error", error)
        dispatch({type: actionType.FETCH_CHAT_MESSAGES_FAILURE, error: error.message})
    }
}

export const getChatByProject = (projectId) => async (dispatch) => {
    dispatch({ type: actionType.FETCH_CHAT_BY_PROJECT_REQUEST });
    try {
        const { data } = await api.get(`/api/project/${projectId}/chat`);
        dispatch({ type: actionType.FETCH_CHAT_BY_PROJECT_SUCCESS, chat: data.data });
        // Optionally, you can dispatch getChatMessage here if you have the chat ID
        if (data.data.id) {
            dispatch(getChatMessage(data.data.id)); // Fetch messages immediately if you have the chat ID
        }
    } catch (error) {
        dispatch({ type: actionType.FETCH_CHAT_BY_PROJECT_FAILURE, error: error.message });
    }
};