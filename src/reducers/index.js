import { combineReducers, createStore, applyMiddleware } from "redux"
import {composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";

import authReducer from "./authReduser";
import clientsReducer from "./clientsReducer";


const rootReducer = combineReducers({
    auth: authReducer,
    clients: clientsReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))