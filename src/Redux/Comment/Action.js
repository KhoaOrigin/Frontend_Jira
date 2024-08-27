import * as actionType from './ActionType';
import api from "@/config/api.js";

export const createComment = (commentData) => async (dispatch) => {
    dispatch({type: actionType.CREATE_COMMENT_REQUEST})
    try {
        const {data} = await api.post("/api/comment/create", commentData)
        console.log("create comment", data)
        dispatch({type: actionType.CREATE_COMMENT_SUCCESS, comment: data})
    } catch(error) {
        console.log("error", error)
        dispatch({type: actionType.CREATE_COMMENT_FAILURE, error: error.message})
    }
}

export const deleteComment = ({commentId}) => async (dispatch) => {
    dispatch({type: actionType.DELETE_COMMENT_REQUEST})
    try {
        const {data} = await api.delete(`/api/comment/${commentId}`)
        console.log("delete comment", data)
        dispatch({type: actionType.DELETE_COMMENT_SUCCESS, commentId})
    } catch(error) {
        console.log("error", error)
        dispatch({type: actionType.DELETE_COMMENT_FAILURE, error: error.message})
    }
}

export const getComment = ({issueId}) => async (dispatch) => {
    dispatch({type: actionType.FETCH_COMMENTS_REQUEST})
    try {
        const {data} = await api.get(`/api/comment/${issueId}`)
        console.log("get comment", data)
        dispatch({type: actionType.FETCH_COMMENTS_SUCCESS, comment: data})
    } catch(error) {
        console.log("error", error)
        dispatch({type: actionType.FETCH_COMMENTS_FAILURE, error: error.message})
    }
}