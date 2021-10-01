import { makeStyles } from "@material-ui/core";

export const UserAdminStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
  },
  fixedHeight: {
    height: "auto",
  },
  containerTable: {
    maxHeight: 440,
  },
  inputSearch: {
    margin: "20px 0px",
  },
}));
