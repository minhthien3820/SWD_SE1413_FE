import Axios from "axios";
import {
  CHECKOUT_PAGE_FAILED,
  CHECKOUT_PAGE_REQUEST,
  CHECKOUT_PAGE_SUCCESS,
} from "./constant";

export const actCheckOutApi = (maDriver) => {
  return (dispatch) => {
    dispatch(actCheckOutRequest());
    Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maDriver}`,
      type: "GET",
    })
      .then((result) => {
        dispatch(actCheckOutSuccess(result.data));
      })
      .catch((err) => {
        dispatch(err);
      });
  };
};

export const actCheckOutRequest = () => {
  return {
    type: CHECKOUT_PAGE_REQUEST,
  };
};

export const actCheckOutSuccess = (data) => {
  return {
    type: CHECKOUT_PAGE_SUCCESS,
    payload: data,
  };
};

export const actCheckOutFailed = (err) => {
  return {
    type: CHECKOUT_PAGE_FAILED,
    payload: err,
  };
};
