import privateRoutes from "./private/privateRoutes";
import publicRoutes from "./public/publicRoutes";
import sharedRoutes from './shared/sharedRoutes'

const appRoutes = [...privateRoutes, ...publicRoutes, ...sharedRoutes];
export default appRoutes;
