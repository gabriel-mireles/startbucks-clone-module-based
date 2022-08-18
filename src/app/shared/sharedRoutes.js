import loadable from "@loadable/component";
import routeTypes from "../shared/types/routeTypes";
const HomePage = loadable(() => import("./pages/home-page/HomePage"), {
  resolveComponent: (components) => components.HomePage,
});

const InComingPage = loadable(() => import("./pages/incoming-page/InComingPage"), {
  resolveComponent: (components) => components.InCommingPage,
});


const sharedRoutes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "home",
    component: HomePage,
  },
  {
    path: "incoming",
    component: InComingPage,
  },
];

sharedRoutes.forEach((route) => {
  route.type = routeTypes.TRANSVERSAL;
});

export default sharedRoutes;
