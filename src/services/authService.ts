import API from "./api";

export const AuthService = {
  //@ts-ignore
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
    //@ts-ignore
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
      //@ts-ignore
    API.defaults.headers["Authorization"] = "";
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  },
    //@ts-ignore
  updateProfile: (data) => {
    const headers = {
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }
    return API.post("/users/update", data, headers)
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
  //@ts-ignore
const setHeadersAndStorage = ({ user, token }) => {
    //@ts-ignore
  API.defaults.headers["Authorization"] = `Bearer ${token}`;
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token);
};
