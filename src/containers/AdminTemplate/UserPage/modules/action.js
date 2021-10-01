import Axios from "axios";
import {
  CHANGE_DIALOG_ADMIN_STATUS,
  USER_ADMIN_EDIT,
  USER_ADMIN_FAILED,
  USER_ADMIN_REQUEST,
  USER_ADMIN_SUCCESS,
} from "./constant";

export const actUserAdminApi = (keyword) => {
  const URL =
    keyword.length === 0
      ? ""
      : ``;
  return (dispatch) => {
    if (keyword.length === 0) {
      dispatch(actUserAdminRequest());
    }
    Axios({
      url: URL,
      method: "GET",
    })
      .then((result) => {
        dispatch(actUserAdminSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actUserAdminFailed(err.response.data));
      });
  };
};

export const actAddUserAdminApi = (user) => {
  let accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
  return (dispatch) => {
    dispatch(actUserAdminRequest());
    Axios({
      url:
        "",
      method: "POST",
      data: user,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((result) => {
        alert("Đã tạo thành công");
        dispatch(actUserAdminApi(""));
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };
};

export const actUpdateUserAdminApi = (user) => {
  let accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
  return (dispatch) => {
    dispatch(actUserAdminRequest());
    Axios({
      url:
        "", //không có https nên báo lỗi
      data: user,
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((result) => {
        alert("Đã cập nhật thành công");
        dispatch(actUserAdminApi(""));
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };
};

export const actDeleteUserAdminApi = (taiKhoan) => {
  let accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
  return (dispatch) => {
    dispatch(actUserAdminRequest());
    Axios({
      url: ``,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((result) => {
        dispatch(actUserAdminApi(""));
        alert("Xóa thành công");
      })
      .catch((err) => {
        dispatch(actUserAdminApi(""));
      });
  };
};

export const actEditUserAdmin = (user) => {
  return {
    type: USER_ADMIN_EDIT,
    payload: user,
  };
};

export const actChangeDialogUserAdminStatus = (status) => {
  return {
    type: CHANGE_DIALOG_ADMIN_STATUS,
    payload: status,
  };
};

export const actUserAdminRequest = () => {
  return {
    type: USER_ADMIN_REQUEST,
  };
};

export const actUserAdminSuccess = (data) => {
  return {
    type: USER_ADMIN_SUCCESS,
    payload: data,
  };
};

export const actUserAdminFailed = (err) => {
  return {
    type: USER_ADMIN_FAILED,
    payload: err,
  };
};
