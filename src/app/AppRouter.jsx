import { Routes, Route } from "react-router-dom";

import appRoutes from "./appRoutes";
import routeTypes from "./shared/types/routeTypes";
import { Header } from "./shared/components/header/Header";
import { Footer } from "./shared/components/footer/Footer";
import { PublicRoute } from "./public/components/PublicRoute";
import { PrivateRoute } from "./private/components/PrivateRoute";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        {appRoutes.map(({ component: Component, path, type }) => (
          <Route
            key={path}
            path={path}
            element={
              <>
                <Header hasLinks={!(type === routeTypes.PUBLIC_ROUTE)} />
                <AppRoute type={type}>
                  <Component />
                </AppRoute>
                <Footer mode={type} />
              </>
            }
          />
        ))}
        <Route path="testing" element={<div>testing</div>} />
      </Routes>
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
