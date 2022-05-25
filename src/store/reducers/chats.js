import { FETCH_CHATS } from "../types/types"

const initialState = {
    chats: [],
    currentChat: {}
}

export const chatReducer = (state = initialState, action) =>{
    const {type, payload} = action
    switch (type) {
        case FETCH_CHATS:
            return {
                ...state,
                chats: payload
            }
            default: {
                return state
            }
    }
}