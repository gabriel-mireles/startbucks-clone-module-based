import loadable from "@loadable/component";
import routeTypes from "../shared/types/routeTypes";
const LoginPage = loadable(() => import("./pages/login-page/LoginPage"), {
  resolveComponent: (components) => components.LoginPage,
});

const SignUpPage = loadable(() => import("./pages/sign-up-page/SignUpPage"), {
  resolveComponent: (components) => components.SignUpPage,
});

const publicRoutes = [
  {
    path: "login",
    component: LoginPage
  },
  {
    path: "signup",
    component: SignUpPage
  },
];

publicRoutes.forEach((route) => {
  route.type = routeTypes.PUBLIC_ROUTE;
});

export default publicRoutes;
