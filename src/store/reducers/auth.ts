import { AuthActions, AUTH_ACTION } from "../actions/auth";
import { AuthState } from "./auth.types";

const initialState: AuthState = {
  user: JSON.parse(localStorage.getItem("user") || '{}'),
  token: localStorage.getItem("token") || "",
  isLoggedIn: localStorage.getItem("user") ? true : false,
};


export const authReducer = (state: AuthState = initialState, action: AuthActions) => {
  //@ts-ignore
  const { type, payload } = action;

  switch (type) {
    case AUTH_ACTION.LOGIN:
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        isLoggedIn: true,
      };
    case AUTH_ACTION.REGISTER:
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        isLoggedIn: true,
      };
    case AUTH_ACTION.LOGOUT:
      return {
        ...state,
        user: {},
        token: "",
        isLoggedIn: false,
      };
    case AUTH_ACTION.UPDATE_PROFILE:
      return {
        ...state,
        user: payload,
      };
    default: {
      return state;
    }
  }
};
