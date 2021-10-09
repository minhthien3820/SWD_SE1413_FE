import { CHANGE_THEME_REQUEST } from "./constant";

let initialState = {
  themeStatus: false,
};

const changeThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME_REQUEST:
      state.themeStatus = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default changeThemeReducer;
