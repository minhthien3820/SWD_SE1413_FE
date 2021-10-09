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
  return async (dispatch) => {
    dispatch(actUserGuestRequest());
    // console.log(user);
    // const data = await Axios.post("​http://3.138.105.45/api​/v1​/logins", user);
    // const response = await fetch('https://192.2.3.2/logins', {
    //   method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //   body: JSON.stringify(user) // body data type must match "Content-Type" header
    // });

    // return response.json(); // parses JSON response into native JavaScript objects
    // console.log(data);
    Axios({
      // url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      // url: "​http://3.138.105.45/api​/v1​/logins",
      url: "http://3.138.105.45/api/v1/logins/loginweb",
      method: "POST",
      data: user,
      // headers: {
      //   "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuaGxuQGdtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiIsIm5iZiI6MTYzMzQzMDc5MCwiZXhwIjoxNjMzNDMyNTkwLCJpYXQiOjE2MzM0MzA3OTB9.dBq7SAwT40kRk9NlHK8gGVCNM5UnAkoBngH4NAcDHG0",
      //  "Access-Control-Allow-Origin": '*',
      //   "Access-Control-Allow-Headers": 'Origin, X-Requested-With, Content-Type, Accept ',
      //    "Access-Control-Allow-Methods": "POST, GET, PUT, OPTIONS, DELETE" ,
      //    "Access-Control-Max-Age": 3600 // cache
      // }
    })
      .then((result) => {
        dispatch(actUserGuestSuccess(result.data));
        if (result.data.role === "new") {
          localStorage.setItem("UserGuest", JSON.stringify(result.data));
          history.goBack();
        } else {
          alert("Vui lòng đăng nhập ở trang admin");
        }
        // console.log(result);
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
      // url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      // url: "https://google.com",
      // url: "​http://3.138.105.45/api/v1/accounts",
      url: "http://3.138.105.45/api/v1/accounts",
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
    taiKhoan: JSON.parse(localStorage.getItem("UserGuest")).email,
  };
  return (dispatch) => {
    dispatch(actUserGuestRequest());
    Axios({
      url:
        // "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
        // "http://3.138.105.45/api/v1/accounts",
         "http://3.138.105.45/api/accounts",
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
    Axios.get("")
    // Axios({
    //   url:
    //     // "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
    //     "http://3.138.105.45​/api​/v1​/accounts",
    //   data: user,
    //   method: "PUT",
    //   headers: {
    //     Authorization: `Bearer ${accessToken}`,
    //   },
    // })
    //   .then((result) => {
    //     alert("Thay đổi thông tin thành công");
    //     dispatch(actUserGuestSuccess(result.data));
    //   })
    //   .catch((err) => {
    //     alert(err.response.data);
    //   });
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
