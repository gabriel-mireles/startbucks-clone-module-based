import { Navigate } from "react-router-dom";
import { isLogged } from "../../isLogeed";

export const PublicRoute = ({ children }) => {
  const isLoggedIn = isLogged;

  if (isLoggedIn) {
    return <Navigate to="/home" />;
  }

  return children;
};

