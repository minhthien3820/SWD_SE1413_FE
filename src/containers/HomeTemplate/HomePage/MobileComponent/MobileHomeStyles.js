import { makeStyles } from "@material-ui/core";

export const MobileHomeStyles = makeStyles((theme) => ({
  appBarHome: {
    top: "auto",
    bottom: 0,
    backgroundColor: theme.palette.background.paper,
    opacity: 0.95,
  },
  appBarDiscovery: {
    bottom: "auto",
    top: 0,
    backgroundColor: theme.palette.background.paper,
    padding: 0,
    opacity: 0.95,
  },
  titleTabs: {
    color: theme.palette.text.primary,
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(3),
    fontSize: "30px",
    backgroundColor: theme.palette.background.paper,
  },
  tabPanel: {
    padding: 0,
  },
  indicatorTop: {
    backgroundColor: theme.palette.action.selected,
  },
  indicatorBottom: {
    backgroundColor: theme.palette.action.selected,
    bottom: "unset",
    top: 0,
  },
  tabBottom: {
    backgroundColor: theme.palette.background.paper,
    fontSize: "8px",
    color: theme.palette.text.primary,
    textTransform: "capitalize",
    "&:focus": {
      outline: "none",
    },
  },
  tabTop: {
    fontSize: "12px",
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    textTransform: "capitalize",
    "&:focus": {
      outline: "none",
    },
  },
  maxHeightApp: {
    height: "72px",
  },
  homeTitle: {
    fontSize: "16px",
    margin: theme.spacing(2),
  },
  paperContainer: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    borderRadius: theme.status.borderPaper,
  },
  paperTitle: {
    fontSize: "16px",
  },
}));

export const DriverTabStyles = makeStyles((theme) => ({
  cinemaLayout: {
    width: "100%",
  },
  bgAccor: {
    background: "transparent",
    borderBottom: "1px solid rgba(255, 255, 255, 0.54)",
  },
  avatar: {
    fontSize: theme.typography.pxToRem(15),
    flexShrink: 0,
    marginRight: "15px",
  },
  nameCinemaSystem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.primary,
    textTransform: "capitalize",
  },
  nameCinema: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.primary,
  },
  address: {
    fontSize: theme.typography.pxToRem(13),
    color: theme.palette.text.secondary,
  },
  expandIcon: {
    color: "rgba(255, 255, 255, 0.54)",
    transform: "rotate(0deg)",
  },
  cinemaItem: {
    margin: "0px",
    padding: "10px 20px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.54)",
  },
}));
