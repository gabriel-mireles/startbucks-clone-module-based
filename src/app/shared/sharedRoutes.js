import loadable from "@loadable/component";
import routeTypes from "../shared/types/routeTypes";
const HomePage = loadable(() => import("./pages/home-page/HomePage"), {
  resolveComponent: (components) => components.HomePage,
});

const sharedRoutes = [
  {
    path: "home",
    component: HomePage,
  },
];

sharedRoutes.forEach((route) => {
  route.type = routeTypes.TRANSVERSAL;
});

export default sharedRoutes;
