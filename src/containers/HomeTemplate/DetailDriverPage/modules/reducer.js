import {
  CHANGE_DATE_DETAIL_PAGE,
  CHANGE_LOGO_DETAIL_PAGE,
  DETAIL_PAGE_FAILED,
  DETAIL_PAGE_REQUEST,
  DETAIL_PAGE_SUCCESS,
} from "./constant";

let initialState = {
  loading: false,
  err: null,
  data: null,
  listLogo: null,
  currentLogo: 0,
  currentDate: 1,
  currentDateIndex: 0,
  listShowTime: [],
};

const handleListShowTime = (data, currentLogo, currentDate) => {
  let listShowTime = data.heThongRapChieu[currentLogo].cumRapChieu.map(
    (item) => {
      const listDriver = item.lichChieuPhim.filter((driver) => {
        let driverDate = new Date(driver.ngayChieuGioChieu).getDate();
        return driverDate === currentDate;
      });
      return { tenCumRap: item.tenCumRap, lichChieuPhim: listDriver };
    }
  );
  return listShowTime;
};

const detailPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case DETAIL_PAGE_REQUEST:
      state.loading = true;
      state.err = null;
      state.data = null;
      return { ...state };
    case DETAIL_PAGE_SUCCESS:
      state.loading = false;
      state.err = null;
      state.data = action.payload;
      state.listLogo = action.payload.heThongRapChieu.map((item) => {
        return {
          tenHeThongRap: item.tenHeThongRap,
          logo: item.logo,
        };
      });
      state.currentDate = new Date().getDate();
      state.listShowTime = handleListShowTime(
        state.data,
        state.currentLogo,
        state.currentDate
      );
      return { ...state };
    case DETAIL_PAGE_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };
    case CHANGE_LOGO_DETAIL_PAGE:
      state.currentLogo = action.payload;
      state.currentDateIndex = 0;
      state.currentDate = new Date().getDate();
      state.listShowTime = handleListShowTime(
        state.data,
        action.payload,
        state.currentDate
      );
      return { ...state };
    case CHANGE_DATE_DETAIL_PAGE:
      state.currentDateIndex = action.payload.index;
      state.currentDate = action.payload.day;
      state.listShowTime = handleListShowTime(
        state.data,
        state.currentLogo,
        state.currentDate
      );
      return { ...state };
    default:
      return { ...state };
  }
};

export default detailPageReducer;
