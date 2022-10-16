import API from './api'
import { Chat } from './../types/chat.types';

export const ChatService = {
    fetchChats: () => {
        return API.get<Chat[]>('/chats')
        .then(({data}) => {
            return data
        })
        .catch(err => {
            throw err
        })
    }
}