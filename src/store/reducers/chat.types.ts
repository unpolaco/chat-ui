import { Socket } from 'socket.io-client';
import { Chat } from '../../types/chat.types';

export interface ChatState {
    chats: Chat[];
    currentChat: Chat | {};
    socket: Socket | {};
    newMessage: NewMessage;
    scrollBottom: number;
  }
  
  export interface NewMessage {
    chatId: number | null;
    seen: boolean | null;
  }