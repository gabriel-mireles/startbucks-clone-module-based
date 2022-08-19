import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children, user }) => {
  if (user?.user?.email) {
    return <Navigate to="/menu" />;
  }

  return children;
};
