import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children, user }) => {
  if (!user?.user?.email) {
    return <Navigate to="/login" />;
  }

  return children;
};
