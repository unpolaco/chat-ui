import { ChatService } from "../../services/chatService";
import { FETCH_CHATS, FRIENDS_ONLINE, FRIEND_OFFLINE, FRIEND_ONLINE, SET_CURRENT_CHAT } from "../types/types";

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

export const onlineFriends = (friends) => dispatch =>  {
  dispatch({ type: FRIENDS_ONLINE, payload: friends})
}

export const onlineFriend = (friend) => dispatch =>  {
  dispatch({ type: FRIEND_ONLINE, payload: friend})
}

export const offlineFriend = (friend) => dispatch =>  {
  dispatch({ type: FRIEND_OFFLINE, payload: friend})
}
