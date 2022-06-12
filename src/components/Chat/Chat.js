import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChats } from "../../store/actions/chat";
import { FriendList } from "./components/FriendList/FriendList";
import { Messenger } from "./components/Messenger/Messenger";
import { Navbar } from "./components/Navbar/Navbar";
import { useSocket } from "./hooks/useSocket";

export const Chat = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);

  useSocket(user, dispatch)

  useEffect(() => {
    dispatch(fetchChats())
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div style={{display: 'flex'}}>
        <FriendList />
        <Messenger />
      </div>
    </div>
  );
};
