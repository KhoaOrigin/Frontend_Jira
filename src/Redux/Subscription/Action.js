import * as actionType from './ActionType';
import api from "@/config/api.js";

export const getUserSubscription = ({jwt}) => async (dispatch) => {
    dispatch({type: actionType.GET_USER_SUBSCRIPTION_REQUEST})
    try {
        const {data} = await api.get("/api/subscription/user", {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        console.log("get user subscription", data)
        dispatch({type: actionType.GET_USER_SUBSCRIPTION_SUCCESS, subscription: data})
    } catch (error) {
        dispatch({type: actionType.GET_USER_SUBSCRIPTION_FAILURE, error: error.message})
    }
}

export const upgradeSubscription = ({planType}) => async (dispatch) => {
    dispatch({type: actionType.UPGRADE_SUBSCRIPTION_REQUEST})
    try {
        const {data} = await api.patch("/api/subscription/upgrade", null, {
            params: {
                planType: planType
            }
        })
        console.log("upgrade subscription", data)
        dispatch({type: actionType.UPGRADE_SUBSCRIPTION_SUCCESS, subscription: data})
    } catch (error) {
        dispatch({type: actionType.UPGRADE_SUBSCRIPTION_FAILURE, error: error.message})
    }
}