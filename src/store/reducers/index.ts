import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { chatReducer } from "./chats";

export const reducer = combineReducers({
  auth: authReducer,
  chat: chatReducer,
});

export type RootState = ReturnType<typeof reducer>
