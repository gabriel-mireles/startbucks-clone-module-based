import loadable from "@loadable/component";
import routeTypes from "../shared/types/routeTypes";
const LoginPage = loadable(() => import("./pages/LoginPage"), {
  resolveComponent: (components) => components.LoginPage,
});

const publicRoutes = [
  {
    path: "login",
    component: LoginPage
  },
];

publicRoutes.forEach((route) => {
  route.type = routeTypes.PUBLIC_ROUTE;
});

export default publicRoutes;
