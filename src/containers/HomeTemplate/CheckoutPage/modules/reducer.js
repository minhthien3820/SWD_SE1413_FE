import {
  CHECKOUT_PAGE_FAILED,
  CHECKOUT_PAGE_REQUEST,
  CHECKOUT_PAGE_SUCCESS,
} from "./constant";

let initialState = {
  loading: false,
  data: null,
  err: null,
};

const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_PAGE_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case CHECKOUT_PAGE_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };
    case CHECKOUT_PAGE_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default checkoutReducer;
