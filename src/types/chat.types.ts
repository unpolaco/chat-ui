export interface Chat {
  id: string;
  type: keyof typeof ChatType;
  createdAt: string;
  updatedAt: string;
  ChatUser: ChatUser;
  Users: User[];
  Messages: Message[];
}

export interface ChatUser {
  chatId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  avatar: string;
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender: keyof typeof Gender;
  createdAt: string;
  updatedAt: string;
  ChatUser: ChatUser;
  status: keyof typeof UserStatus;
}

export interface Message {
  message: string;
  id: string;
  type: keyof typeof MessageType;
  chatId: string;
  fromUserId: string;
  createdAt: string;
  updatedAt: string;
  User: User;
}

export enum ChatType {
  dual = "dual",
  group = "group",
}

export enum Gender {
  male = "male",
  female = "female",
}

export enum MessageType {
  text = "text",
  image = "image",
}

export enum UserStatus {
  online = "online",
  offline = "offline",
}
