import { Socket } from 'socket.io-client';
import { Chat } from '../../types/chat.types';

export interface ChatState {
    chats: Chat[];
    currentChat: Chat;
    socket?: Socket;
    newMessage: NewMessage;
    scrollBottom: number;
    senderTyping: {typing: boolean}
  }
  
  export interface NewMessage {
    chatId: string | null;
    seen: boolean | null;
  }