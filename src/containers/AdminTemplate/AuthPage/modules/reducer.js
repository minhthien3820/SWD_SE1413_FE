import { AUTH_FAILED, AUTH_REQUEST, AUTH_SUCCESS } from "./constant";

const initialState = {
  loading: false,
  data: null,
  err: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case AUTH_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };
    case AUTH_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default authReducer;
