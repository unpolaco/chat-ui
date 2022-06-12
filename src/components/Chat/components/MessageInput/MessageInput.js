import React, { useState } from "react";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import { useSelector } from "react-redux";
import { Chat } from "@mui/icons-material";

export const MessageInput = ({ chat }) => {
  const user = useSelector((state) => state.authReducer.user);
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");

  const handleMessage = (e) => {
    const value = e.target.value;
    setMessage(value);
  };
  const handleKeyDown = (e, imageUpload) => {
    if (e.key === "Enter") sendMessage(imageUpload);
  };

  const sendMessage = (imageUpload) => {
    if (message.length < 1 && !imageUpload) return;
    const msg = {
      type: imageUpload ? "image" : "text",
      fromUserId: user.id,
      toUserId: Chat.Users.map((user) => user.id),
      chatId: chat.id,
      message: imageUpload ? image : message,
    };
    setMessage("");
    setImage("");
  };

  return (
    <div>
      <OutlinedInput
        value={message}
        onChange={(e) => handleMessage(e)}
        onKeyDown={(e) => handleKeyDown(e)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={() => {}} onMouseDown={() => {}} edge="end">
              <SentimentSatisfiedAltIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </div>
  );
};
