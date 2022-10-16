import { User } from "../types/chat.types";
import API from "./api";

interface LoginProps {
  email: string;
  password: string;
}

export const AuthService = {
  login: (data: LoginProps) => {
    return API.post<{ user: User; token: string }>("/login", data)
      .then(({ data }) => {
        setHeadersAndStorage(data);
        return data;
      })
      .catch((err) => {
        console.log("Auth service err", err);
        throw err;
      });
  },

  register: (data: User) => {
    return API.post<{ user: User; token: string }>("/register", data)
      .then(({ data }) => {
        setHeadersAndStorage(data);
        return data;
      })
      .catch((err) => {
        console.log("Auth service err", err);
        throw err;
      });
  },
  logout: () => {
    API.defaults.headers.common["Authorization"] = "";
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  },

  updateProfile: (data: User) => {
    const headers = {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    };
    return API.post<User>("/users/update", data, headers)
      .then(({ data }) => {
        localStorage.setItem("user", JSON.stringify(data));
        return data;
      })
      .catch((err) => {
        console.log("Auth service err", err);
        throw err;
      });
  },
};

const setHeadersAndStorage = ({
  user,
  token,
}: {
  user: User;
  token: string;
}) => {
  API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token);
};
