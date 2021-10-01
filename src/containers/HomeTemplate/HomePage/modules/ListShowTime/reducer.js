import {
  LIST_SHOWTIME_REQUEST,
  LIST_SHOWTIME_FAILED,
  LIST_SHOWTIME_SUCCESS,
  CHANGE_SHOWTIME_LIST,
  CHANGE_DRIVER_LIST,
} from "./constant";

let initialState = {
  loading: false,
  data: null,
  err: null,
  listLogo: null,
  listDriver: null,
  listShowTime: null,
  currentShowTime: 0,
  currentDriver: 0,
  currentLogo: 0,
};

const listShowTimeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_SHOWTIME_REQUEST:
      state.loading = true;
      state.listDriver = null;
      state.err = null;
      return { ...state };
    case LIST_SHOWTIME_SUCCESS:
      state.loading = false;
      state.err = null;
      let data = action.payload;
      state.data = data;
      //render logoDriver Component
      //listLogo is not change during visiting
      state.listLogo = data.map((item) => {
        return {
          tenGroup: item.tenGroup,
          logo: item.logo,
        };
      });

      //render DriverList component with active at the first listItem
      //when client click another listItem in logoDriver --> change listDriver follow driverIndex
      state.listDriver = data[0].lstGroup;

      //render ShowTimeList component with active at the first listItem
      state.listShowTime = data[0].lstGroup[0].danhSachDriver;
      state.currentShowTime = 0;
      return { ...state };

    case LIST_SHOWTIME_FAILED:
      state.loading = false;
      state.listDriver = null;
      state.err = action.payload;
      return { ...state };

    //update when client click another listItem in logoDriver --> change listDriver follow driverIndex
    case CHANGE_DRIVER_LIST:
      const driverIndex = action.payload;
      state.listDriver = state.data[driverIndex].lstOwner;
      state.listShowTime = state.data[driverIndex].lstOwner[0].danhSachDriver;
      state.currentShowTime = 0;
      state.currentLogo = driverIndex;
      return { ...state };

    //update when client click another listItem in driverList --> change listShowTime follow showTimeIndex
    case CHANGE_SHOWTIME_LIST:
      const showTimeIndex = action.payload;
      state.listShowTime = state.listDriver[showTimeIndex].danhSachDriver;
      state.currentShowTime = showTimeIndex;
      return { ...state };
    default:
      return {
        ...state,
      };
  }
};

export default listShowTimeReducer;
