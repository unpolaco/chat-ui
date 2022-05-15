import API from "./api";

export const AuthService = {
  login: (data) => {
    return API.post("/login", data)
      .then(({ data }) => {
        setHeadersAndStorage(data);
        return data;
      })
      .catch((err) => {
        console.log("Auth service err", err);
        throw err;
      });
  },
  register: (data) => {
    return API.post("/register", data)
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
    API.defaults.headers["Authorisation"] = "";
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  },
};

const setHeadersAndStorage = ({ user, token }) => {
  API.defaults.headers["Authorisation"] = `Baerer ${token}`;
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token);
};
