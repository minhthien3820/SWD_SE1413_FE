import { CHANGE_THEME_REQUEST } from "./constant";

export const actChangeTheme = (status) => ({
  type: CHANGE_THEME_REQUEST,
  payload: status,
});
