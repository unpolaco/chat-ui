import { Avatar, Paper, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { userStatus } from "../../../../utils/helpers";
import { StyledBadge } from "./Friend.styles";

export const Friend = ({ chat, click }) => {
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
    <Paper onClick={() => click(chat)} sx={{ margin: "5px" }}>
      <div style={{ display: "flex", alignItems: "center", padding: "5px" }}>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
          userStatus={userStatus(chat.Users[0])}
        >
          <Avatar
            src={chat.Users[0].avatar}
            alt="User avatar"
            sx={{ width: "30px", height: "30px" }}
          />
        </StyledBadge>

        <Typography component="subtitle2" sx={{ margin: "10px" }}>
          {chat.Users[0].firstName} {chat.Users[0].lastName}
        </Typography>
        <h5>{lastMessage()}</h5>
        <div>
          <span></span>
        </div>
      </div>
    </Paper>
  );
};
