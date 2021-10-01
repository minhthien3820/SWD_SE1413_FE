import { makeStyles } from "@material-ui/core";

export const WithCarouselStyle = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.default === "#fff" ? "#000" : "#fff",
    color: theme.palette.background.default === "#fff" ? "#fff" : "#000",
  },
}));
