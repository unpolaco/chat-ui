import { useSelector } from "react-redux";
import { Paper } from "@mui/material";
import React from "react";
import { messengerWrapper } from "./Messenger.styles";
import { ChatHeader } from "../ChatHeader/ChatHeader";
import { MessageBox } from "../MessageBox/MessageBox";
import { MessageInput } from "../MessageInput/MessageInput";

export const Messenger = () => {
  const chat = useSelector((state) => state.chatReducer.currentChat);
  const activeChat = () => Object.keys(chat).length > 0;

  return (
    <Paper className={messengerWrapper}>
      <div>Messenger view</div>

      {activeChat() ? (
        <div>
          <ChatHeader chat={chat} />
          <br/>
          <MessageBox chat={chat} />
          <MessageInput chat={chat} />
        </div>
      ) : (
        <p>No active chat</p>
      )}
    </Paper>
  );
};
