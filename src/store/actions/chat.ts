import { Socket } from 'socket.io-client';
import { Chat, UserStatus, Message, User } from "./../../types/chat.types";
import { ChatService } from "../../services/chatService";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { ChatState } from "../reducers/chat.types";

export enum CHAT_ACTION {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  LOGOUT = "LOGOUT",
  UPDATE_PROFILE = "UPDATE_PROFILE",
  FETCH_CHATS = "FETCH_CHATS",
  SET_CURRENT_CHAT = "SET_CURRENT_CHAT",
  FRIENDS_ONLINE = "FRIENDS_ONLINE",
  FRIEND_ONLINE = "FRIEND_ONLINE",
  FRIEND_OFFLINE = "FRIEND_OFFLINE",
  SET_SOCKET = "SET_SOCKET",
  RECEIVED_MESSAGE = "RECEIVED_MESSAGE",
}

export interface FetchChats {
  type: CHAT_ACTION.FETCH_CHATS;
  payload: Chat[];
}
export interface SetCurrentChat {
  type: CHAT_ACTION.SET_CURRENT_CHAT;
  payload: Chat;
}
export interface OnlineFriends {
  type: CHAT_ACTION.FRIENDS_ONLINE;
  payload: string[];
}
export interface OnlineFriend {
  type: CHAT_ACTION.FRIEND_ONLINE;
  payload: User;
}
export interface OfflineFriend {
  type: CHAT_ACTION.FRIEND_OFFLINE;
  payload: User;
}
export interface SetSocket {
  type: CHAT_ACTION.SET_SOCKET;
  payload: Socket;
}
export interface ReceivedMessage {
  type: CHAT_ACTION.RECEIVED_MESSAGE;
  payload: {
    message: Message,
    userId: string
  };
}

export type ChatActions =
  | FetchChats
  | SetCurrentChat
  | OnlineFriends
  | OnlineFriend
  | OfflineFriend
  | SetSocket
  | ReceivedMessage


export const fetchChats =
  () => (dispatch: ThunkDispatch<ChatState, {}, FetchChats>) => {
    return ChatService.fetchChats()
      .then((data) => {
        data.forEach((chat) => {
          chat.Users.forEach((user) => {
            user.status = UserStatus.offline;
          });
          chat.Messages.reverse();
        });
        dispatch({ type: CHAT_ACTION.FETCH_CHATS, payload: data });
        return data;
      })
      .catch((err) => {
        throw err;
      });
  };

export const setCurrentChat =
  (chat: Chat): ((dispatch: ThunkDispatch<ChatState, {}, SetCurrentChat>) => void) =>
  (dispatch) => {
    dispatch({ type: CHAT_ACTION.SET_CURRENT_CHAT, payload: chat });
  };

export const onlineFriends =
  (
    friends: string[]
  ): ((dispatch: ThunkDispatch<ChatState, {}, OnlineFriends>) => void) =>
  (dispatch) => {
    dispatch({ type: CHAT_ACTION.FRIENDS_ONLINE, payload: friends });
  };

export const onlineFriend = (friend: User): ((dispatch: ThunkDispatch<ChatState, {}, OnlineFriend>) => void) => (dispatch) => {
  dispatch({ type: CHAT_ACTION.FRIEND_ONLINE, payload: friend });
};

export const offlineFriend = (friend: User): ((dispatch: ThunkDispatch<ChatState, {}, OfflineFriend>) => void) => (dispatch) => {
  dispatch({ type: CHAT_ACTION.FRIEND_OFFLINE, payload: friend });
};

export const setSocket = (socket: Socket): ((dispatch: ThunkDispatch<ChatState, {}, SetSocket>) => void) => (dispatch) => {
  dispatch({ type: CHAT_ACTION.SET_SOCKET, payload: socket });
};

export const receivedMessage = (message: Message, userId: string): ((dispatch: ThunkDispatch<ChatState, {}, ReceivedMessage>) => void) => (dispatch) => {
  dispatch({
    type: CHAT_ACTION.RECEIVED_MESSAGE,
    payload: { message, userId },
  });
};
