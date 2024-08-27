import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {thunk} from "redux-thunk";
import {authReducer} from "@/Redux/Auth/Reducer.js";
import {projectReducer} from "@/Redux/demoReducer.js";
import {chatReducer} from "@/Redux/Chat/Reducer.js";
import {commentReducer} from "@/Redux/Comment/Reducer.js";
import {issueReducer} from "@/Redux/Issue/Reducer.js";
import {subscriptionReducer} from "@/Redux/Subscription/Reducer.js";

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    chat: chatReducer,
    store: commentReducer,
    issue: issueReducer,
    subscription: subscriptionReducer,

})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));