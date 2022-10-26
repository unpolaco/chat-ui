import { ChatUser, UserStatus } from "./../../types/chat.types";
import { createSlice } from "@reduxjs/toolkit";
import { Gender } from "../../types/chat.types";
import { AuthState } from "./auth.types";

const defaultState: AuthState = {
  user: JSON.parse(localStorage.getItem("user") || "{}"),
  token: localStorage.getItem("token") || "",
  isLoggedIn: localStorage.getItem("user") ? true : false,
};

const slice = createSlice({
  name: "auth",
  initialState: defaultState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    register: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = {
        avatar: "",
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        gender: Gender.male,
        createdAt: "",
        updatedAt: "",
        chatUser: {
          chatId: "",
          userId: "",
          createdAt: "",
          updatedAt: "",
        },
        status: UserStatus.offline,
      };
      state.token = "";
      state.isLoggedIn = false;
    },
    updateProfile: (state, { payload }) => (state.user = payload),
  },
});

export const { login, register, logout, updateProfile } = slice.actions;

export const authReducer = slice.reducer;
