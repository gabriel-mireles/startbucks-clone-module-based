import loadable from "@loadable/component";
import routeTypes from "../shared/types/routeTypes";
const MenuPage = loadable(() => import("./pages/MenuPage"), {
  resolveComponent: (components) => components.MenuPage,
});

const privateRoutes = [
  {
    path: "menu",
    component: MenuPage,
  },
];

privateRoutes.forEach((route) => {
  route.type = routeTypes.PRIVATE_ROUTE;
});

export default privateRoutes;
