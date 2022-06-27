import React, { FC, ReactElement } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactElement<any, any> | null
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  //@ts-ignore
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
};
