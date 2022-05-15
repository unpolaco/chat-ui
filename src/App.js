import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/Auth/Login";
import { Register } from "./components/Auth/Register";
import { Chat } from "./components/Chat/Chat";
import { ProtectedRoute } from "./components/Router/ProtectedRoute";

export const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Chat />
              </ProtectedRoute>
            }
          />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
};
