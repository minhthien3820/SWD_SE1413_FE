import React from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
} from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import LocalTaxi  from "@material-ui/icons/LocalTaxi";
import SideBarItem from "./SideBarItem";
import InputIcon from "@material-ui/icons/Input";

const items = [
  {
    href: "/dashboard",
    icon: DashboardIcon,
    title: "Dashboard",
  },
  {
    href: "/user-admin",
    icon: PeopleIcon,
    title: "User Management",
  },
  {
    href: "/driver-admin",
    icon: LocalTaxi,
    title: "Driver Management",
  },
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256,
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: "calc(100% - 64px)",
  },
  avatar: {
    cursor: "pointer",
    width: 64,
    height: 64,
  },
}));

const SideBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);

  const user = {
    avatar: "/static/images/avatars/avatar_6.png",
    name: JSON.parse(localStorage.getItem("UserAdmin")).hoTen,
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("UserAdmin");
    history.push("/auth");
  };

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <Box alignItems="center" display="flex" flexDirection="column" p={2}>
        <Avatar
          className={classes.avatar}
          component={RouterLink}
          src={user.avatar}
          to="/account"
        />
        <Typography className={classes.name} color="textPrimary" variant="h5">
          {user.name}
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List>
          {items.map((item) => (
            <SideBarItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
          <SideBarItem
            href={"logout"}
            key={"logout"}
            title={"Logout"}
            icon={InputIcon}
            handleLogout={handleClickOpen}
          />
        </List>
      </Box>
      <Box flexGrow={1} />
    </Box>
  );

  return (
    <React.Fragment>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Bạn có muốn đăng xuất không?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Đóng
          </Button>
          <Button onClick={handleLogout} color="primary" autoFocus>
            Đăng xuất
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default SideBar;
