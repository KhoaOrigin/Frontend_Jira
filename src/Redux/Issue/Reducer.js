import * as actionType from './ActionType';

const initialState = {
    issues: [],
    issueDetail: null,
    loading: false,
    error: null

}

export const issueReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionType.FETCH_ISSUES_BY_PROJECT_ID_REQUEST:
        case actionType.FETCH_ISSUE_BY_ID_REQUEST:
        case actionType.CREATE_ISSUE_REQUEST:
        case actionType.DELETE_ISSUE_REQUEST:
        case actionType.ASSIGNED_ISSUE_TO_USER_REQUEST:
        case actionType.UPDATE_ISSUE_STATUS_REQUEST:
            return {...state, loading: true, error: null}

        case actionType.FETCH_ISSUES_BY_PROJECT_ID_SUCCESS:
            return {...state, issues: action.issue, loading: false, error: null}

        case actionType.FETCH_ISSUE_BY_ID_SUCCESS:
        case actionType.UPDATE_ISSUE_STATUS_SUCCESS:
            return {...state, issueDetail: action.issue, loading: false, error: null}

        case actionType.CREATE_ISSUE_SUCCESS:
            return {...state, issues: [...state.issues, action.issue], loading: false, error: null}

        case actionType.ASSIGNED_ISSUE_TO_USER_SUCCESS:
            return {...state, issues: state.issues.map(issue => issue.id === action.issue.id ? action.issue : issue ), loading: false, error: null}

        case actionType.DELETE_ISSUE_SUCCESS:
            return {...state, issues: state.issues.filter(issue => issue.id !== action.issueId), loading: false, error: null}

        case actionType.FETCH_ISSUES_BY_PROJECT_ID_FAILURE:
        case actionType.FETCH_ISSUES_BY_PROJECT_ID_FAILURE:
        case actionType.ASSIGNED_ISSUE_TO_USER_FAILURE:
        case actionType.CREATE_ISSUE_FAILURE:
        case actionType.DELETE_ISSUE_FAILURE:
            return {...state, loading: false, error: action.error}

        default:
            return state;
    }
}