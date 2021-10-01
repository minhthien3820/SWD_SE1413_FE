import { makeStyles } from "@material-ui/core";
import React from "react";
import TopBar from "./TopBar";
import SideBar from "./SideBar";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: "flex",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  wrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    paddingTop: 64,
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 256,
    },
  },
  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  content: {
    flex: "1 1 auto",
    height: "100%",
    overflow: "auto",
  },
}));

export default function NavbarAdmin(props) {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <SideBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>{/* <Outlet /> */}</div>
        </div>
      </div>
    </React.Fragment>
  );
}
