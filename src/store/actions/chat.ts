import { Chat, UserStatus } from './../../types/chat.types';
import { ChatService } from "../../services/chatService";

export enum CHAT_ACTION {
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
  LOGOUT = 'LOGOUT',
  UPDATE_PROFILE = 'UPDATE_PROFILE',
  FETCH_CHATS = 'FETCH_CHATS',
  SET_CURRENT_CHAT = 'SET_CURRENT_CHAT',
  FRIENDS_ONLINE = 'FRIENDS_ONLINE',
  FRIEND_ONLINE = 'FRIEND_ONLINE',
  FRIEND_OFFLINE = 'FRIEND_OFFLINE',
  SET_SOCKET = 'SET_SOCKET',
  RECEIVED_MESSAGE = 'RECEIVED_MESSAGE'
}

//@ts-ignore
export const fetchChats = () => dispatch => {
  return ChatService.fetchChats()
      .then(data => {
          data.forEach((chat: Chat) => {
              chat.Users.forEach(user => {
                  user.status = UserStatus.offline
              })
              chat.Messages.reverse()
          })

          dispatch({ type: CHAT_ACTION.FETCH_CHATS, payload: data })
          return data
      })
      .catch(err => {
          throw err
      })
}
//@ts-ignore
export const setCurrentChat = (chat: Chat) => (dispatch) => {
  dispatch({ type: CHAT_ACTION.SET_CURRENT_CHAT, payload: chat });
};
//@ts-ignore
export const onlineFriends = (friends) => (dispatch) => {
  dispatch({ type: CHAT_ACTION.FRIENDS_ONLINE, payload: friends });
};
//@ts-ignore
export const onlineFriend = (friend) => (dispatch) => {
  dispatch({ type: CHAT_ACTION.FRIEND_ONLINE, payload: friend });
};
//@ts-ignore
export const offlineFriend = (friend) => (dispatch) => {
  dispatch({ type: CHAT_ACTION.FRIEND_OFFLINE, payload: friend });
};
//@ts-ignore
export const setSocket = (socket) => (dispatch) => {
  dispatch({ type: CHAT_ACTION.SET_SOCKET, payload: socket });
};
//@ts-ignore
export const receivedMessage = (message, userId) => (dispatch) => {
  dispatch({ type: CHAT_ACTION.RECEIVED_MESSAGE, payload: { message, userId } });
};
