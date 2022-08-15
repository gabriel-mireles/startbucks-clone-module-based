import { Navigate } from "react-router-dom";
import { isLogged } from "../../isLogeed";

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = isLogged;
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};

