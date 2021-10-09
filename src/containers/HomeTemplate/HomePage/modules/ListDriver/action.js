import Axios from "axios";
import {
  LIST_DRIVER_FAILED,
  LIST_DRIVER_REQUEST,
  LIST_DRIVER_SUCCESS,
} from "./constant";

export const actListDriverApi = (driverType) => {
  let url =
    driverType === "now"
      ? "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP09&soTrang=2&soPhanTuTrenTrang=10"
      : "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP09&soTrang=3&soPhanTuTrenTrang=10";

  return (dispatch) => {
    actListDriverRequest();
    Axios({
      url,
      method: "GET",
    })
      .then((result) => {
        dispatch(actListDriverSuccess(result.data.items, driverType));
      })
      .catch((err) => {
        dispatch(actListDriverFailed(err));
      });
  };
};

export const actListDriverRequest = () => {
  return {
    type: LIST_DRIVER_REQUEST,
  };
};

export const actListDriverSuccess = (data, driverType) => {
  return {
    type: LIST_DRIVER_SUCCESS,
    payload: data,
    driverType,
  };
};

export const actListDriverFailed = (err) => {
  return {
    type: LIST_DRIVER_FAILED,
    payload: err,
  };
};
