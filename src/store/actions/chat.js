import { ChatService } from "../../services/chatService";
import { FETCH_CHATS, SET_CURRENT_CHAT } from "../types/types";

export const fetchChats = () => (dispatch) => {
  return ChatService.fetchChats()
    .then((data) => {
      data.forEach((chat) => {
        chat.Users.forEach((user) => {
          user.status = "offline";
        });
        dispatch({ type: FETCH_CHATS, payload: data });
        return data;
      });
    })
    .catch((err) => {
      throw err;
    });
};

export const setCurrentChat = (chat) => dispatch =>  {
  dispatch({ type: SET_CURRENT_CHAT, payload: chat})
}
