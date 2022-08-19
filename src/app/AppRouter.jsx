import { Routes, Route, Navigate } from "react-router-dom";

import appRoutes from "./appRoutes";
import routeTypes from "./shared/types/routeTypes";
import { Header } from "./shared/components/header/Header";
import { Footer } from "./shared/components/footer/Footer";
import { PublicRoute } from "./public/components/PublicRoute";
import { PrivateRoute } from "./private/components/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { login, logout } from "./state/user/userSlice";
import { auth } from "./firebase/firebase";

export const AppRouter = () => {
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
          })
        );
      } else {
        dispatch(logout());
      }

      setLoading(false);
    });
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <Routes>
          {appRoutes.map(({ component: Component, path, type }) => (
            <Route
              key={path}
              path={path}
              element={
                <>
                  <AppRoute type={type} user={user}>
                    <Header
                      menuPage={path === "menu"}
                      hasLinks={!(type === routeTypes.PUBLIC_ROUTE)}
                    />
                    <Component />
                    <Footer mode={type} />
                  </AppRoute>
                </>
              }
            />
          ))}
          <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
      )}
    </>
  );
};

const AppRoute = ({ children, type, user }) => {
  if (type === routeTypes.PUBLIC_ROUTE)
    return <PublicRoute user={user}>{children}</PublicRoute>;

  if (type === routeTypes.PRIVATE_ROUTE)
    return <PrivateRoute user={user}>{children}</PrivateRoute>;

  return children;
};
