import { ChatActions } from './../actions/chat';
import { CHAT_ACTION } from '../actions/chat';
import { UserStatus } from './../../types/chat.types';
import { ChatState } from './chat.types';

const initialState: ChatState = {
  chats: [],
  currentChat: {},
  socket: {},
  newMessage: { chatId: null, seen: null },
  scrollBottom: 0,
};

export const chatReducer = (state: ChatState = initialState, action: ChatActions ) => {
  const { type, payload } = action;
  switch (type) {
    case CHAT_ACTION.FETCH_CHATS:
      return {
        ...state,
        chats: payload,
      };
    case CHAT_ACTION.SET_CURRENT_CHAT:
      return {
        ...state,
        currentChat: payload,
      };
    case CHAT_ACTION.FRIENDS_ONLINE:
      const chatsCopy = state.chats.map((chat) => {
        return {
          ...chat,
          Users: chat.Users.map((user) => {
            if (payload.includes(user.id)) {
              return {
                ...user,
                status: UserStatus.online,
              };
            }
            return user;
          }),
        };
      });
      return {
        ...state,
        chats: chatsCopy,
      };
    case CHAT_ACTION.FRIEND_ONLINE: {
      let currentChatCopy = { ...state.currentChat };
      const chatsCopy = state.chats.map((chat) => {
        const Users = chat.Users.map((user) => {
          if (user.id === payload.id) {
            return {
              ...user,
              status: UserStatus.online,
            };
          }
          return user;
        });
        if (chat.id === currentChatCopy.id) {
          currentChatCopy = {
            ...currentChatCopy,
            Users,
          };
        }
        return {
          ...chat,
          Users,
        };
      });
      return {
        ...state,
        chats: chatsCopy,
        currentChat: currentChatCopy,
      };
    }
    case CHAT_ACTION.FRIEND_OFFLINE: {
      let currentChatCopy = { ...state.currentChat };
      const chatsCopy = state.chats.map((chat) => {
        const Users = chat.Users.map((user) => {
          if (user.id === payload.id) {
            return {
              ...user,
              status: UserStatus.offline,
            };
          }
          return user;
        });
        if (chat.id === currentChatCopy.id) {
          currentChatCopy = {
            ...currentChatCopy,
            Users,
          };
        }
        return {
          ...chat,
          Users,
        };
      });
      return {
        ...state,
        chats: chatsCopy,
        currentChat: currentChatCopy,
      };
    }
    case CHAT_ACTION.SET_SOCKET: {
      return {
        ...state,
        socket: payload,
      };
    }
    case CHAT_ACTION.RECEIVED_MESSAGE: {
      const { userId, message } = payload;
      let currentChatCopy = { ...state.currentChat };
      let newMessage = { ...state.newMessage };
      let scrollBottom = state.scrollBottom;

      const chatsCopy = state.chats.map((chat) => {
        if (message.chatId === chat.id) {
          if (message.fromUserId === userId) {
            scrollBottom++;
          } else {
            newMessage = {
              chatId: chat.id,
              seen: false,
            };
          }
          if (message.chatId === currentChatCopy.id) {
            currentChatCopy = {
              ...currentChatCopy,
              //@ts-ignore
              Messages: [...currentChatCopy.Messages, ...[message]],
            };
          }
          return {
            ...chat,
            Messages: [...chat.Messages, ...[message]],
          };
        }
        return chat;
      });

      if (scrollBottom === state.scrollBottom) {
        return {
          ...state,
          chats: chatsCopy,
          currentChat: currentChatCopy,
          newMessage,
          senderTyping: { typing: false },
        };
      }

      return {
        ...state,
        chats: chatsCopy,
        currentChat: currentChatCopy,
        newMessage,
        scrollBottom,
        senderTyping: { typing: false },
      };
    }

    
    default: {
      return state;
    }
  }
};
