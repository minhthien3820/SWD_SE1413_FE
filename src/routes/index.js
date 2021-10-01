import DashboardPage from "../containers/AdminTemplate/DashboardPage";
import DriverPage from "../containers/AdminTemplate/DriverPage";
import UserPage from "../containers/AdminTemplate/UserPage";
import DetailDriverPage from "../containers/HomeTemplate/DetailDriverPage";
import HomePage from "../containers/HomeTemplate/HomePage";
import UserGuestPage from "../containers/HomeTemplate/UserGuestPage";

const routesHome = [
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
  {
    exact: false,
    path: "/driver/:id",
    component: DetailDriverPage,
  },
  {
    exact: false,
    path: "/thong-tin-nguoi-dung",
    component: UserGuestPage,
  },
];

const routesAdmin = [
  {
    exact: false,
    path: "/dashboard",
    component: DashboardPage,
  },
  {
    exact: false,
    path: "/user-admin",
    component: UserPage,
  },
  {
    exact: false,
    path: "/driver-admin",
    component: DriverPage,
  },
];

export { routesAdmin, routesHome };
