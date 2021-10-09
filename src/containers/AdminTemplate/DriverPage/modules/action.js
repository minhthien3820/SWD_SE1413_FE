import Axios from "axios";
import {
  CHANGE_DIALOG_DRIVER_ADMIN_STATUS,
  DRIVER_ADMIN_EDIT,
  DRIVER_ADMIN_FAILED,
  DRIVER_ADMIN_REQUEST,
  DRIVER_ADMIN_SUCCESS,
} from "./constant";

export const actDriverAdminApi = (keyword) => {
  const URL =
    keyword.length === 0
     ? ""
      : ``;
  return (dispatch) => {
    if (keyword.length === 0) {
      dispatch(actDriverAdminRequest());
    }
    Axios({
      url: URL,
      method: "GET",
    })
      .then((result) => {
        dispatch(actDriverAdminSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actDriverAdminFailed(err.response.data));
      });
  };
};

export const actAddDriverAdminApi = (film, frm, status) => {
  let accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
  const URL =
    status === "edit"
      ? ""
      : "";
  return (dispatch) => {
    dispatch(actDriverAdminRequest());
    Axios({
      url: URL,
      method: "POST",
      data: film,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((result) => {
        if (status === "edit") {
          alert("Đã cập nhật driver thành công");
        } else {
          alert("Đã thêm driver thành công");
        }
        dispatch(actUploadImageApi(frm, accessToken));
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };
};

export const actUploadImageApi = (frm, accessToken) => {
  return (dispatch) => {
    Axios({
      url:
        "",
      data: frm,
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((result) => {
        alert("upload ảnh thành công");
        dispatch(actDriverAdminApi(""));
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

export const actDeleteDriverAdminApi = (maDriver) => {
  let accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
  return (dispatch) => {
    dispatch(actDriverAdminRequest());
    Axios({
      url: ``,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((result) => {
        dispatch(actDriverAdminApi(""));
        alert("Xóa thành công");
      })
      .catch((err) => {
        dispatch(actDriverAdminApi(""));
        console.log(err);
      });
  };
};

export const actEditDriverAdmin = (driver) => {
  return {
    type: DRIVER_ADMIN_EDIT,
    payload: driver,
  };
};

export const actChangeDialogDriverAdminStatus = (status) => {
  return {
    type: CHANGE_DIALOG_DRIVER_ADMIN_STATUS,
    payload: status,
  };
};

export const actDriverAdminRequest = () => {
  return {
    type: DRIVER_ADMIN_REQUEST,
  };
};

export const actDriverAdminSuccess = (data) => {
  return {
    type: DRIVER_ADMIN_SUCCESS,
    payload: data,
  };
};

export const actDriverAdminFailed = (err) => {
  return {
    type: DRIVER_ADMIN_FAILED,
    payload: err,
  };
};
