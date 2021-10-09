import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
  Avatar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";
import Logo from "./../../assets/img/logo.png";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    width: 60,
    height: 60,
  },
}));

const TopBar = ({ className, onMobileNavOpen, ...rest }) => {
  const classes = useStyles();
  const [notifications] = useState([]);

  return (
    <React.Fragment>
      <AppBar className={clsx(classes.root, className)} elevation={0} {...rest}>
        <Toolbar>
          <RouterLink to="/dashboard">
            <Avatar alt="Logo" src={Logo} />
          </RouterLink>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.titlePage}
          >
            Chào mừng đến với trang quản trị
          </Typography>
          <Box flexGrow={1} />
          <Hidden smDown>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <Badge
                badgeContent={notifications.length}
                color="primary"
                variant="dot"
              >
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Hidden>
          <Hidden lgUp>
            <IconButton color="inherit" onClick={onMobileNavOpen}>
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default TopBar;
