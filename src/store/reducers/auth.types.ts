import { User } from "./../../types/chat.types";

export interface AuthState {
  user?: User;
  token: string;
  isLoggedIn: boolean;
}
