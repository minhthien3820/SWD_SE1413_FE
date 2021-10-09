import {
  CHANGE_DIALOG_ADMIN_STATUS,
  USER_ADMIN_EDIT,
  USER_ADMIN_FAILED,
  USER_ADMIN_REQUEST,
  USER_ADMIN_SUCCESS,
} from "./constant";

let initialState = {
  loading: false,
  data: null,
  err: null,
  dialogStatus: false,
  userEdit: null,
};

const userAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ADMIN_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case USER_ADMIN_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };
    case USER_ADMIN_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };
    case CHANGE_DIALOG_ADMIN_STATUS:
      state.dialogStatus = action.payload;
      state.userEdit = null;
      return { ...state };
    case USER_ADMIN_EDIT:
      state.userEdit = action.payload;
      state.dialogStatus = true;
      return { ...state };

    default:
      return { ...state };
  }
};

export default userAdminReducer;
