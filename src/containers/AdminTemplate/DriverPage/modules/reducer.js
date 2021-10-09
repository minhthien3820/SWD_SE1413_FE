import {
  CHANGE_DIALOG_DRIVER_ADMIN_STATUS,
  DRIVER_ADMIN_EDIT,
  DRIVER_ADMIN_FAILED,
  DRIVER_ADMIN_REQUEST,
  DRIVER_ADMIN_SUCCESS,
} from "./constant";

let initialState = {
  loading: false,
  data: null,
  err: null,
  dialogStatus: false,
  driverEdit: null,
};

const driverAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case DRIVER_ADMIN_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case DRIVER_ADMIN_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };
    case DRIVER_ADMIN_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };
    case CHANGE_DIALOG_DRIVER_ADMIN_STATUS:
      state.dialogStatus = action.payload;
      state.driverEdit = null;
      return { ...state };
    case DRIVER_ADMIN_EDIT:
      state.driverEdit = action.payload;
      state.dialogStatus = true;
      return { ...state };

    default:
      return { ...state };
  }
};

export default driverAdminReducer;
