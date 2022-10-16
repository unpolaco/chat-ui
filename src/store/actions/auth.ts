import { ThunkDispatch } from "redux-thunk";
import { AuthService } from "../../services/authService";
import { User } from "../../types/chat.types";
import { AuthState } from "../reducers/auth.types";

export enum AUTH_ACTION {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  LOGOUT = "LOGOUT",
  UPDATE_PROFILE = "UPDATE_PROFILE",
}

export type AuthActions = Login | Register | Logout | UpdateProfile;

export interface Login {
  type: AUTH_ACTION.LOGIN;
  payload: { user: User; token: string };
}
export interface Register {
  type: AUTH_ACTION.REGISTER;
  payload: { user: User; token: string };
}
export interface Logout {
  type: AUTH_ACTION.LOGOUT;
}
export interface UpdateProfile {
  type: AUTH_ACTION.UPDATE_PROFILE;
  payload: User;
}

export const login =
  (
    params: User,
    navigate: (param: string) => void
  ): ((dispatch: ThunkDispatch<AuthState, {}, Login>) => void) =>
  (dispatch) => {
    return AuthService.login(params)
      .then((data) => {
        dispatch({ type: AUTH_ACTION.LOGIN, payload: data });
        navigate("/");
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

export const register = (params: User, navigate: (param: string) => void): ((dispatch: ThunkDispatch<AuthState, {}, Register>) => void) => (dispatch) => {
  return AuthService.register(params)
    .then((data) => {
      dispatch({ type: AUTH_ACTION.REGISTER, payload: data });
      navigate("/");
    })
    .catch((err) => {
      console.log("Error", err);
    });
};

export const logout =
  (): ((dispatch: ThunkDispatch<AuthState, {}, Logout>) => void) =>
  (dispatch) => {
    AuthService.logout();
    dispatch({ type: AUTH_ACTION.LOGOUT });
  };

export const updateProfile =
  (
    params: User
  ): ((dispatch: ThunkDispatch<AuthState, {}, UpdateProfile>) => void) =>
  (dispatch) => {
    return AuthService.updateProfile(params)
      .then((data) => {
        dispatch({ type: AUTH_ACTION.UPDATE_PROFILE, payload: data });
      })
      .catch((err) => {
        throw err;
      });
  };
