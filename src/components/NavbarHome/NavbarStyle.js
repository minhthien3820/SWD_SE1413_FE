import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    top: "-1px",
    left: 0,
    width: "100%",
    height: "60px",
    backgroundColor:
      theme.palette.background.default === "#0f1b35"
        ? "#222"
        : theme.palette.background.default,
    boxShadow: "0 0 15px rgba(0,0,0,.3)",
    zIndex: 9,
    transition: "all .2s",
  },
  logo: {
    width: 64,
    height: 64,
    cursor: "pointer",
  },
  maxHeightNavbarHome: {
    height: "60px",
  },
  menuButton: {
    marginRight: 0,
  },
  listNav: {
    position: "absolute",
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    textAlign: "center",
    color: "#9b9b9b",
  },
  navRight: {
    position: "absolute",
    right: 0,
    top: 0,
    height: "64px",
  },
  link: {
    margin: "0px 10px",
    color: theme.palette.text.primary,
    transition: "all 0.2s",
    display: "inline-block",
    "&:hover": {
      textDecoration: "none",
      color: "#fb4226",
    },
  },
  textLogin: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "13px",
    color: theme.palette.text.primary,
    margin: "0px 16px 0px 0px",
    // borderRight: "1px solid #e9e9e9",
    paddingRight: "11px",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "none",
      color: theme.palette.text.primary,
    },
  },
  iconColor: {
    color: theme.palette.text.primary,
  },
  userContainer: {
    position: "relative",
    "& ul": {
      right: "15px",
      position: "absolute",
      width: "120px",
      textAlign: "center",
      backgroundColor: "#959595",
      display: "none",
      borderRadius: "4px",
      color: "white",
      padding: "5px",
    },
    "&:hover": {
      "& ul": {
        display: "block",
      },
    },
  },
  info: {
    color: "inherit",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
      color: "inherit",
    },
  },
}));
