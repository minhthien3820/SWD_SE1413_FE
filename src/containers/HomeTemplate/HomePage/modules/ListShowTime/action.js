import Axios from "axios";
import {
  CHANGE_SHOWTIME_LIST,
  LIST_SHOWTIME_FAILED,
  LIST_SHOWTIME_REQUEST,
  LIST_SHOWTIME_SUCCESS,
  CHANGE_DRIVER_LIST,
} from "./constant";

export const actChangeShowTimeList = (showTimeIndex) => {
  return {
    type: CHANGE_SHOWTIME_LIST,
    payload: showTimeIndex,
  };
};

export const actChangeDriverList = (driverIndex) => {
  return {
    type: CHANGE_DRIVER_LIST,
    payload: driverIndex,
  };
};

export const actListShowTimeApi = () => {
  return (dispatch) => {
    actListShowTimeRequest();
    Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP09`,
      method: "GET",
    })
      .then((result) => {
        dispatch(actListShowTimeSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actListShowTimeFailed(err));
      });
  };
};

export const actListShowTimeRequest = () => {
  return {
    type: LIST_SHOWTIME_REQUEST,
  };
};

export const actListShowTimeSuccess = (data) => {
  return {
    type: LIST_SHOWTIME_SUCCESS,
    payload: data,
  };
};

export const actListShowTimeFailed = (err) => {
  return {
    type: LIST_SHOWTIME_FAILED,
    payload: err,
  };
};
