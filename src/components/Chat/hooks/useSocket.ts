import { useEffect } from "react";
import socketIOClient from "socket.io-client";
import {
  fetchChats,
  offlineFriend,
  onlineFriend,
  onlineFriends,
  receivedMessage,
  setSocket,
} from "../../../store/actions/chat";

//@ts-ignore
export const useSocket = (user, dispatch) => {
  useEffect(() => {
    dispatch(fetchChats())
    //@ts-ignore
      .then((res) => {
        //@ts-ignore
        const socket = socketIOClient.connect("http://127.0.0.1:5000");
        dispatch(setSocket(socket))
        socket.emit("join", user);
        //@ts-ignore
        socket.on("typing", (user) => {
          console.log("Event", user);
        });
        //@ts-ignore
        socket.on("friends", (friends) => {
          console.log("Friends", friends);
          dispatch(onlineFriends(friends));
        });
        //@ts-ignore
        socket.on("online", (user) => {
          console.log("Online", user);
          dispatch(onlineFriend(user));
        });
        //@ts-ignore
        socket.on("offline", (user) => {
          console.log("Offline", user);
          dispatch(offlineFriend(user));
        });
        //@ts-ignore
        socket.on("received", (message) => {
          dispatch(receivedMessage(message, user.id))
        });
      })
      //@ts-ignore
      .catch((err) => console.log(err));
  }, [dispatch, user]);
};
