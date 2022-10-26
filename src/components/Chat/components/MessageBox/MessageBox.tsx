import React, { FC } from "react";
import { useSelector } from "react-redux";
import { AuthState } from "../../../../store/reducers/auth.types";
import { Chat } from "../../../../types/chat.types";
import { MessageComponent } from "../MessageComponent/MessageComponent";

interface MessageBoxProps {
  chat: Chat;
}

export const MessageBox: FC<MessageBoxProps> = ({ chat }) => {
  const user = useSelector((state: AuthState) => state.user);

  return (
    <div>
      {chat.messages.map((message, index) => {
        return (
          <MessageComponent
            user={user}
            chat={chat}
            message={message}
            index={index}
            key={message.id}
          />
        );
      })}
    </div>
  );
};
