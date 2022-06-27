import API from './api'

export const ChatService = {
    fetchChats: () => {
        return API.get('/chats')
        .then(({data}) => {
            return data
        })
        .catch(err => {
            throw err
        })
    }
}