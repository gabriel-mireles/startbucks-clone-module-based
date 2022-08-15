import loadable from "@loadable/component";
import routeTypes from "../shared/types/routeTypes";
const PrivateTest = loadable(() => import("./pages/PrivateTest"), {
  resolveComponent: (components) => components.PrivateTest,
});

const privateRoutes = [
  {
    path: "testprivate",
    component: PrivateTest,
  },
];

privateRoutes.forEach((route) => {
  route.type = routeTypes.PRIVATE_ROUTE;
});

export default privateRoutes;
