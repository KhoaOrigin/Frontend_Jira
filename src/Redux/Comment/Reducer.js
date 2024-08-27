import * as actionType from './ActionType';

const initialState = {
    comments: [],
    loading: false,
    error: null
}

export const commentReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionType.CREATE_COMMENT_REQUEST:
        case actionType.DELETE_COMMENT_REQUEST:
        case actionType.FETCH_COMMENTS_REQUEST:
            return {...state, loading: true, error: null}

        case actionType.CREATE_COMMENT_SUCCESS:
            return {...state, comments: [...state.comments, action.comment], loading: false, error: null}

        case actionType.FETCH_COMMENTS_SUCCESS:
            return {...state, comments: action.comment, loading: false, error: null}

        case actionType.DELETE_COMMENT_SUCCESS:
            return {...state, comments: state.comments.filter(comment => comment.id !== action.commentId), loading: false, error: null}

        case actionType.CREATE_COMMENT_FAILURE:
        case actionType.DELETE_COMMENT_FAILURE:
        case actionType.FETCH_COMMENTS_FAILURE:
            return {...state, loading: false, error: action.error}

        default:
            return state;
    }
}