import { Avatar, Paper, Typography } from "@mui/material";
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
    <Paper sx={{margin: '5px'}}>
      <div style={{display: 'flex', alignItems: 'center', padding: '5px'}}>
        <Avatar src={chat.Users[0].avatar} alt="User avatar" sx={{width: '30px', height: '30px'}}/>
          <Typography component='subtitle2' sx={{margin: '10px'}}>
            {chat.Users[0].firstName} {chat.Users[0].lastName}
          </Typography>
        <div>
          <h5>{lastMessage()}</h5>
        </div>
      </div>
    </Paper>
  );
};
