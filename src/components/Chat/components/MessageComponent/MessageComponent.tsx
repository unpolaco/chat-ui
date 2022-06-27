import React, { FC } from "react";
import { Avatar, Typography } from "@mui/material";
import { messageOther, messageOwner } from "./MessageComponent.styles";
import { Chat, Message, User } from "../../../../types/chat.types";

interface MessageComponentProps {
  chat: Chat;
  user: User;
  message: Message;
  index: number
}

export const MessageComponent: FC<MessageComponentProps> = ({ user, chat, message, index }) => {

  return (
    <div
      className={message.fromUserId === user.id ? messageOwner : messageOther}
    >
      {message.fromUserId !== user.id && (
        <>
          <Typography variant="caption" display='block'>
            {message.User.firstName} {message.User.lastName}
          </Typography>
          <Avatar
            src={chat.Users[0].avatar}
            alt="User avatar"
            sx={{ width: "30px", height: "30px" }}
          />
        </>
      )}
      <div>
        {message.type === "text" ? (
          <p>{message.message}</p>
        ) : (
          <img src={message.message} alt="user upload" />
        )}
      </div>
    </div>
  );
};
