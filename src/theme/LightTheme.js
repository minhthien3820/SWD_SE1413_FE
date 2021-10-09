import { createMuiTheme } from "@material-ui/core";
import { overrides } from "./DarkTheme";

const LightTheme = createMuiTheme({
  overrides,
  palette: {
    primary: {
      main: "#FB4226",
      contrastText: "#fff",
    },
    text: {
      primary: "#000",
      secondary: "#4a4a4a",
      disabled: "rgba(255, 255, 255, 0.5)",
    },
    showTimeGreen: {
      main: "rgba(246,246,246,.5)",
      contrastText: "#108f3e",
    },
    background: {
      // paper: "#fff",
      // default: "#fff",
      paper: "#fdfdfb",
      default: "#f3f3f3",
    },
    action: {
      selected: "#fb4226",
    },
  },
  status: {
    commentBackground: "#3a3b3c",
    borderPaper: "20px",
    red: "#fb4226",
    showTimeLight: "#9b9b9b",
    borderColor: "#e4e4e4",
    bgDetailFilm: "#f3f3f3",
  },
  spacing: [0, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55],
});
export default LightTheme;
