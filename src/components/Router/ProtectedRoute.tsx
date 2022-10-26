import React, { FC, ReactElement } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { AuthState } from "../../store/reducers/auth.types";

interface ProtectedRouteProps {
  children: ReactElement<any, any> | null;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const isLoggedIn = useSelector((state: AuthState) => state.isLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
};
