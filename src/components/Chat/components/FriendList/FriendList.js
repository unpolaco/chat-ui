import React from "react";
import { useSelector } from "react-redux";
import { Friend } from "../Friend/Friend";

export const FriendList = () => {
  const chats = useSelector((state) => state.chatReducer.chats);
  return (
    <div>
      <div>
        <h3>Friends</h3>
        <button>ADD</button>
      </div>

      <div>
        {chats.length > 0 ? (
          chats.map((chat) => {
            return <Friend chat={chat} key={chat.id} />;
          })
        ) : (
          <p>No friends added</p>
        )}
      </div>
    </div>
  );
};
