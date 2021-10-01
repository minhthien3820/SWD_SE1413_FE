import Axios from "axios";
import {
  CHANGE_DATE_DETAIL_PAGE,
  CHANGE_LOGO_DETAIL_PAGE,
  DETAIL_PAGE_FAILED,
  DETAIL_PAGE_REQUEST,
  DETAIL_PAGE_SUCCESS,
} from "./constant";

export const actDetailPageApi = (id) => {
  return (dispatch) => {
    dispatch(actDetailPageRequest());
    Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`,
      method: "GET",
    })
      .then((result) => {
        dispatch(actDetailPageSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actDetailPageFailed(err));
      });
  };
};

export const actDetailPageRequest = () => {
  return {
    type: DETAIL_PAGE_REQUEST,
  };
};

export const actDetailPageSuccess = (data) => {
  return {
    type: DETAIL_PAGE_SUCCESS,
    payload: data,
  };
};

export const actDetailPageFailed = (err) => {
  return {
    type: DETAIL_PAGE_FAILED,
    payload: err,
  };
};

export const actChangeLogoDetailPage = (index) => {
  return {
    type: CHANGE_LOGO_DETAIL_PAGE,
    payload: index,
  };
};

export const actChangeDateDetailPage = (data) => {
  return {
    type: CHANGE_DATE_DETAIL_PAGE,
    payload: data,
  };
};
