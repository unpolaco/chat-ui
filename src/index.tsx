import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { createTheme, ThemeProvider } from "@mui/material/styles";
  //@ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = createTheme();

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);


