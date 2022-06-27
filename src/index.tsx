import React from "react";
import "./index.css";
import { App } from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createRoot } from 'react-dom/client';

const theme = createTheme();

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
