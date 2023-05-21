import { combineReducers } from "redux";
import { qrReducer } from "./qrReducers";
import { type } from "@testing-library/user-event/dist/type";


export const rootReducer = combineReducers({
    text: qrReducer,
});

export type rootState = ReturnType<typeof rootReducer>;