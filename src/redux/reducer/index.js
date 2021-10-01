import { combineReducers } from "redux";
import userGuestReducer from "./../../containers/HomeTemplate/LoginPage/modules/reducer";
import changeThemeReducer from "./../../components/NavbarHome/modules/reducer";
import listDriverReducer from "./../../containers/HomeTemplate/HomePage/modules/ListDriver/reducer";
import listShowTimeReducer from "./../../containers/HomeTemplate/HomePage/modules/ListShowTime/reducer";
import detailPageReducer from "./../../containers/HomeTemplate/DetailDriverPage/modules/reducer";
import checkoutReducer from "./../../containers/HomeTemplate/CheckoutPage/modules/reducer";
import dialogReducer from "../../components/DialogDriver/modules/reducer";
import authReducer from "./../../containers/AdminTemplate/AuthPage/modules/reducer";
import userAdminReducer from "./../../containers/AdminTemplate/UserPage/modules/reducer";
import driverAdminReducer from "./../../containers/AdminTemplate/DriverPage/modules/reducer";

const rootReducer = combineReducers({
  changeThemeReducer,
  listDriverReducer,
  listShowTimeReducer,
  detailPageReducer,
  dialogReducer,
  authReducer,
  userGuestReducer,
  userAdminReducer,
  driverAdminReducer,
  checkoutReducer,
});

export default rootReducer;
