import {
    ACCEPT_INVITATION_REQUEST, ACCEPT_INVITATION_SUCCESS,
    CREATE_PROJECT_REQUEST,
    CREATE_PROJECT_SUCCESS,
    DELETE_PROJECT_REQUEST, DELETE_PROJECT_SUCCESS,
    FETCH_PROJECT_BY_ID_REQUEST,
    FETCH_PROJECT_BY_ID_SUCCESS,
    FETCH_PROJECTS_FAILURE,
    FETCH_PROJECTS_REQUEST,
    FETCH_PROJECTS_SUCCESS, INVITE_TO_PROJECT_REQUEST, INVITE_TO_PROJECT_SUCCESS,
    SEARCH_PROJECT_REQUEST,
    SEARCH_PROJECT_SUCCESS
} from "@/Redux/Project/ActionType.js";
import api from "@/config/api.js";

export const getProject = ({category, tag}) => async (dispatch) => {
    dispatch({type: FETCH_PROJECTS_REQUEST});
    try {
        const {data} = await api.get("/api/project", {params: {category, tag}});
        console.log("all projects", data);
        dispatch({type: FETCH_PROJECTS_SUCCESS, project: data});
    } catch (error) {
         console.log("error", error)
        // dispatch({type: FETCH_PROJECTS_FAILURE, project: error});
    }
}

export const searchProject = ({keyword}) => async (dispatch) => {
    dispatch({type: SEARCH_PROJECT_REQUEST});
    try {
        const {data} = await api.get("/api/project/search?keyword="+keyword);
        console.log("search project", data);
        dispatch({type: SEARCH_PROJECT_SUCCESS, project: data});
    } catch (error) {
        console.log("error", error)
    }
}

export const createProject = ({projectData}) => async (dispatch) => {
    dispatch({type: CREATE_PROJECT_REQUEST});
    try {
        const {data} = await api.post("/api/project/create", projectData);
        console.log("create project", data);
        dispatch({type: CREATE_PROJECT_SUCCESS, project: data});
    } catch (error) {
        console.log("error", error)
    }
}

export const getProjectById = ({id}) => async (dispatch) => {
    dispatch({type: FETCH_PROJECT_BY_ID_REQUEST});
    try {
        const {data} = await api.get("/api/project"+id);
        console.log("project", data);
        dispatch({type: FETCH_PROJECT_BY_ID_SUCCESS, project: data});
    } catch (error) {
        console.log("error", error)
    }
}

export const deleteProject = ({projectId}) => async (dispatch) => {
    dispatch({type: DELETE_PROJECT_REQUEST});
    try {
        const {data} = await api.delete("/api/project"+projectId);
        console.log("delete project", data);
        dispatch({type: DELETE_PROJECT_SUCCESS, projectId});
    } catch (error) {
        console.log("error", error)
    }
}

export const inviteToProject = ({email, projectId}) => async (dispatch) => {
    dispatch({type: INVITE_TO_PROJECT_REQUEST});
    try {
        const {data} = await api.post("/api/project/invite", {email, projectId});
        console.log("invite project", data);
        dispatch({type: INVITE_TO_PROJECT_SUCCESS, project:data});
    } catch (error) {
        console.log("error", error)
    }
}

export const acceptInvitation = ({invitationToken, navigate}) => async (dispatch) => {
    dispatch({type: ACCEPT_INVITATION_REQUEST});
    try {
        const {data} = await api.get("/api/project/accept_invitation", {params: {invitationToken}});
        navigate("/project/"+data.projectId);
        console.log("accept invitation", data);
        dispatch({type: ACCEPT_INVITATION_SUCCESS, project:data});
    } catch (error) {
        console.log("error", error)
    }
}