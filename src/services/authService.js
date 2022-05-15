import API from "./api";

export const AuthService = {
  login: (data) => {
    return API.post("/login", data)
      .then(({ data }) => {
        API.defaults.headers["Authorisation"] = `Baerer ${data.token}`;
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
        API.defaults.headers["Authorisation"] = `Baerer ${data.token}`;
        return data;
      })
      .catch((err) => {
        console.log("Auth service err", err);
        throw err;
      });
  },
  logout: () => {
    API.defaults.headers["Authorisation"] = '';
  },
};
