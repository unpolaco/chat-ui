import { ChatType } from "../../types/chat.types";
import { createSlice } from "@reduxjs/toolkit";
import { Chat, User, UserStatus } from "../../types/chat.types";
import { ChatState } from "./chat.types";

const defaultState: ChatState = {
  chats: [],
  currentChat: {
    messages: [],
    id: "",
    type: ChatType.dual,
    createdAt: "",
    updatedAt: "",
    chatUser: {
      chatId: "",
      userId: "",
      createdAt: "",
      updatedAt: "",
    },
    users: [],
  },
  //TODO: What should be a default socket?
  // socket: {},
  newMessage: { chatId: null, seen: null },
  scrollBottom: 0,
  senderTyping: { typing: false },
};

const slice = createSlice({
  name: "chat",
  initialState: defaultState,
  reducers: {
    fetchChats: (state, { payload }) => (state.chats = payload),
    setCurrentChat: (state, { payload }) => (state.currentChat = payload),
    friendsOnline: (state, { payload }) => {
      state.chats.map((chat) => {
        chat.users.map((user) => {
          if (payload.includes(user.id)) {
            user.status = UserStatus.online;
          }
          return user;
        });
        return chat;
      });
    },
    friendOnline: (state, { payload }) => {
      const currentChatCopy = { ...state.currentChat };
      const chatsCopy = state.chats.map((chat) => {
        const users: User[] = chat.users.map((user) => {
          if (user.id === payload.id) {
            user.status = UserStatus.online;
          }
          return user;
        });

        if (chat.id === currentChatCopy.id) {
          currentChatCopy.users = users;
        }
        chat.users = users;
        return chat;
      });

      state.chats = chatsCopy;
      state.currentChat = currentChatCopy;
      return state;
    },

    friendOffline: (state, { payload }) => {
      const currentChatCopy = { ...state.currentChat };
      const chatsCopy: Chat[] = state.chats.map((chat) => {
        const users: User[] = chat.users.map((user) => {
          if (user.id === payload.id) {
            user.status = UserStatus.offline;
          }
          return user;
        });

        if (chat.id === currentChatCopy.id) {
          currentChatCopy.users = users;
        }
        chat.users = users;
        return chat;
      });

      state.chats = chatsCopy;
      state.currentChat = currentChatCopy;
    },

    setSocket: (state, { payload }) => (state.socket = payload),
    receivedMessage: (state, { payload }) => {
      const { userId, message } = payload;
      let scrollBottom = state.scrollBottom;

      const chatsCopy: Chat[] = state.chats.map((chat) => {
        if (message.chatId === chat.id) {
          if (message.fromUserId === userId) {
            state.scrollBottom++;
          } else {
            state.newMessage = {
              chatId: chat.id,
              seen: false,
            };
          }
          if (message.chatId === state.currentChat.id) {
            state.currentChat.messages.push(message);
          }
          chat.messages.push(message);
        }
        return chat;
      });

      if (scrollBottom === state.scrollBottom) {
        state.chats = chatsCopy;
        state.senderTyping.typing = false;
      }

      state.chats = chatsCopy;
      state.scrollBottom = scrollBottom;
      state.senderTyping.typing = false;
    },
  },
});

export const {
  fetchChats,
  setCurrentChat,
  friendsOnline,
  friendOnline,
  setSocket,
  receivedMessage,
} = slice.actions;

export const chatReducer = slice.reducer;
