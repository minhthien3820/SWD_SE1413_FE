import { CHANGE_DIALOG_STATUS } from "./constant";

export const actChangeDialogStatus = (data) => {
  return {
    type: CHANGE_DIALOG_STATUS,
    payload: data,
  };
};
