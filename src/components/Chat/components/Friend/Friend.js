import React from "react";
import { useSelector } from "react-redux";

export const Friend = ({ chat }) => {
  const currentChat = useSelector((state) => state.chatReducer.currentChat);
  const isChatOpened = () => {
    return currentChat.id === chat.id ? "opened" : "";
  };

  const lastMessage = () => {
    if (chat.Messages.length === 0) return "";
    const message = chat.Messages[chat.Messages.length - 1];
    return message.type === "image" ? "image uploaded" : message.message;
  };

  return (
    <div>
      <div>
        <img src={chat.Users[0].avatar} alt="User avatar" />
        <div>
          <h4>
            {chat.Users[0].firstName} {chat.Users[0].lastName}
          </h4>
          <h5>{lastMessage()}</h5>
        </div>
      </div>
    </div>
  );
};
