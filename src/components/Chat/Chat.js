import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChats } from "../../store/actions/chat";
import { FriendList } from "./components/FriendList/FriendList";
import { Messenger } from "./components/Messenger/Messenger";
import { Navbar } from "./components/Navbar/Navbar";

export const Chat = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
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
