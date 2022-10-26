import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthState } from "../../store/reducers/auth.types";
import { FriendList } from "./components/FriendList/FriendList";
import { Messenger } from "./components/Messenger/Messenger";
import { Navbar } from "./components/Navbar/Navbar";
import { useSocket } from "./hooks/useSocket";

export const Chat = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: AuthState) => state.user);

  useSocket(user, dispatch);

  useEffect(() => {
    //@ts-ignore
    dispatch(fetchChats())
      //@ts-ignore
      .then((res) => console.log(res))
      //@ts-ignore
      .catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <FriendList />
        <Messenger />
      </div>
    </div>
  );
};
