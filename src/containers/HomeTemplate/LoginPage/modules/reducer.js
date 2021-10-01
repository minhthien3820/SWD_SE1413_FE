import {
  USER_GUEST_FAILED,
  USER_GUEST_REQUEST,
  USER_GUEST_SUCCESS,
  CHANGE_LAYOUT_FORM,
} from "./constant";

const initialState = {
  loginFormStatus: true, //true đã có tài khoản --> form sign in
  loading: false,
  data: null,
  err: null,
  dialogStatus: false,
};

const userGuestReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LAYOUT_FORM:
      let { loginFormStatus } = state;
      state.loading = false;
      state.loginFormStatus = !loginFormStatus;
      return { ...state };
    case USER_GUEST_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case USER_GUEST_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };
    case USER_GUEST_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default userGuestReducer;
