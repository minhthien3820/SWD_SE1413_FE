import {
  LIST_DRIVER_FAILED,
  LIST_DRIVER_REQUEST,
  LIST_DRIVER_SUCCESS,
} from "./constant";

let initialState = {
  loading: false,
  listDriverNow: null,
  listDriverComing: null,
  err: null,
};

const listDriverReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_DRIVER_REQUEST:
      state.loading = true;
      state.listDriver = null;
      state.err = null;
      return { ...state };
    case LIST_DRIVER_SUCCESS:
      state.loading = false;
      if (action.driverType === "now") {
        state.listDriverNow = action.payload;
      } else {
        state.listDriverComing = action.payload;
      }
      state.err = null;
      return { ...state };
    case LIST_DRIVER_FAILED:
      state.loading = false;
      state.listDriver = null;
      state.err = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default listDriverReducer;
