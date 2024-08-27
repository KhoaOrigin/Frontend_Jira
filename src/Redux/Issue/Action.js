import * as actionType from './ActionType';
import api from "@/config/api.js";

export const getIssueByProjectId = ({projectId}) => async (dispatch) => {
    dispatch({type: actionType.FETCH_ISSUES_BY_PROJECT_ID_REQUEST})
    try {
        const {data} = await api.get(`/api/issue/project/${projectId}`)
        console.log("get issue by projectId", data)
        dispatch({type: actionType.FETCH_ISSUES_BY_PROJECT_ID_SUCCESS, issue: data})
    } catch(error) {
        console.log("error", error)
        dispatch({type: actionType.FETCH_ISSUES_BY_PROJECT_ID_FAILURE, error: error.message})
    }
}

export const getIssueById = ({issueId}) => async (dispatch) => {
    dispatch({type: actionType.FETCH_ISSUE_BY_ID_REQUEST})
    try {
        const {data} = await api.get(`/api/issue/${issueId}`)
        console.log("get issueId", data)
        dispatch({type: actionType.FETCH_ISSUE_BY_ID_SUCCESS, issue: data})
    } catch(error) {
        console.log("error", error)
        dispatch({type: actionType.FETCH_ISSUE_BY_ID_FAILURE, error: error.message})
    }
}

export const updateIssueStatus = ({issueId, status}) => async (dispatch) => {
    dispatch({type: actionType.UPDATE_ISSUE_STATUS_REQUEST})
    try {
        const {data} = await api.put(`/api/issue/${issueId}/status/${status}`)
        console.log("update issue status", data)
        dispatch({type: actionType.UPDATE_ISSUE_STATUS_SUCCESS, issue: data})
    } catch(error) {
        console.log("error", error)
        dispatch({type: actionType.UPDATE_ISSUE_STATUS_FAILURE, error: error.message})
    }
}

export const assignedIssueToUser = ({issueId, userId}) => async (dispatch) => {
    dispatch({type: actionType.ASSIGNED_ISSUE_TO_USER_REQUEST})
    try {
        const {data} = await api.put(`/api/issue/${issueId}/assignee/${userId}`)
        console.log("assigned issue to user", data)
        dispatch({type: actionType.ASSIGNED_ISSUE_TO_USER_SUCCESS, issue: data})
    } catch(error) {
        console.log("error", error)
        dispatch({type: actionType.ASSIGNED_ISSUE_TO_USER_FAILURE, error: error.message})
    }
}

export const createIssue = (issueData) => async (dispatch) => {
    dispatch({type: actionType.CREATE_ISSUE_REQUEST})
    try {
        const {data} = await api.post("/api/issue/create", issueData)
        console.log("create issue", data)
        dispatch({type: actionType.CREATE_ISSUE_SUCCESS, issue: data})
    } catch(error) {
        console.log("error", error)
        dispatch({type: actionType.CREATE_ISSUE_FAILURE, error: error.message})
    }
}

export const deleteIssue = ({issueId}) => async (dispatch) => {
    dispatch({type: actionType.DELETE_ISSUE_REQUEST})
    try {
        const {data} = await api.delete(`/api/issue/${issueId}`)
        console.log("delete issue", data)
        dispatch({type: actionType.DELETE_ISSUE_SUCCESS, issueId})
    } catch(error) {
        console.log("error", error)
        dispatch({type: actionType.DELETE_ISSUE_FAILURE, error: error.message})
    }
}

