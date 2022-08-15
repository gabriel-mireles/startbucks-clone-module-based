import { Routes, Route } from "react-router-dom";

import appRoutes from "./appRoutes";
import routeTypes from "./shared/types/routeTypes";
import { Header } from "./shared/components/Header";
import { Footer } from "./shared/components/Footer";
import { PublicRoute } from "./public/components/PublicRoute";
import { PrivateRoute } from "./private/components/PrivateRoute";

export const AppRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        {appRoutes.map(({ component: Component, path, type }) => (
          <Route
            key={path}
            path={path}
            element={
              <AppRoute type={type}>
                <Component />
              </AppRoute>
            }
          />
        ))}
        <Route path="testing" element={<div>testing</div>} />
      </Routes>
      <Footer />
    </>
  );
};

const AppRoute = ({ children, type }) => {
  if (type === routeTypes.PUBLIC_ROUTE)
    return <PublicRoute>{children}</PublicRoute>;

  if (type === routeTypes.PRIVATE_ROUTE)
    return <PrivateRoute>{children}</PrivateRoute>;

  return children;
};
