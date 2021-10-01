import { CHANGE_LAYOUT_FORM } from "./constant";
import {
  USER_GUEST_FAILED,
  USER_GUEST_REQUEST,
  USER_GUEST_SUCCESS,
} from "./constant";
import Axios from "axios";

export const actChangeLayoutForm = () => {
  return {
    type: CHANGE_LAYOUT_FORM,
  };
};
export const actLoginApi = (user, history) => {
  return (dispatch) => {
    dispatch(actUserGuestRequest());
    Axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: user,
    })
      .then((result) => {
        dispatch(actUserGuestSuccess(result.data));
        if (result.data.maLoaiNguoiDung === "KhachHang") {
          localStorage.setItem("UserGuest", JSON.stringify(result.data));
          history.goBack();
        } else {
          alert("Vui lòng đăng nhập ở trang admin");
        }
      })
      .catch((err) => {
        dispatch(actUserGuestFailed(err));
      });
  };
};

export const actSignupApi = (user, history) => {
  return (dispatch) => {
    dispatch(actUserGuestRequest());
    Axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      method: "POST",
      data: user,
    })
      .then((result) => {
        dispatch(actChangeLayoutForm());
        alert("Đăng ký thành công");
      })
      .catch((err) => {
        alert(err.response.data);
        dispatch(actUserGuestFailed(err.response.data));
      });
  };
};

export const actUserGuestApi = () => {
  let accessToken = JSON.parse(localStorage.getItem("UserGuest")).accessToken;
  let user = {
    taiKhoan: JSON.parse(localStorage.getItem("UserGuest")).taiKhoan,
  };
  return (dispatch) => {
    dispatch(actUserGuestRequest());
    Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
      data: user,
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((result) => {
        dispatch(actUserGuestSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actUserGuestFailed(err));
      });
  };
};

export const actChangeInfoApi = (user) => {
  let accessToken = JSON.parse(localStorage.getItem("UserGuest")).accessToken;
  return (dispatch) => {
    Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung", //không có https nên báo lỗi
      data: user,
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((result) => {
        alert("Thay đổi thông tin thành công");
        dispatch(actUserGuestSuccess(result.data));
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };
};

export const actUserGuestRequest = () => {
  return {
    type: USER_GUEST_REQUEST,
  };
};
export const actUserGuestSuccess = (data) => {
  return {
    type: USER_GUEST_SUCCESS,
    payload: data,
  };
};
export const actUserGuestFailed = (err) => {
  return {
    type: USER_GUEST_FAILED,
    payload: err,
  };
};
