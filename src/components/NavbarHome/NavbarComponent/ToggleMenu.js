import { Button, Drawer, Hidden, List, ListItem } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStyles } from "../NavbarStyle";
import SwitchMode from "./SwitchMode";
import UserIcon from "./UserIcon";

import { connect } from "react-redux";
import { actUserGuestSuccess } from "../../../containers/HomeTemplate/LoginPage/modules/action";

function ToggleMenu(props) {
  const classes = useStyles();
  const user = props.user || JSON.parse(localStorage.getItem("UserGuest"));

  useEffect(() => {
    if (!props.user) {
      props.handleDispatchLogin(user);
    }
  });
  const [state, setState] = useState({
    toggleStatus: false,
  });

  const logOut = () => {
    localStorage.removeItem("UserGuest");
    props.handleDispatchLogin(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ toggleStatus: open });
  };

  const userInfo = () => {
    if (user) {
      return (
        <Hidden mdUp>
          <ListItem button>
            <Link to="/thong-tin-nguoi-dung" className={classes.info}>
              Thông tin
            </Link>
          </ListItem>
          <ListItem button onClick={logOut}>
            Đăng xuất
          </ListItem>
        </Hidden>
      );
    } else {
      return <React.Fragment></React.Fragment>;
    }
  };

  const list = () => (
    <div
      style={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button>
          <SwitchMode />
        </ListItem>
        <ListItem button>
          <UserIcon />
        </ListItem>
        {userInfo()}
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon />
      </Button>
      <Drawer
        anchor="right"
        open={state.toggleStatus}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </React.Fragment>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleDispatchLogin: (data) => {
      dispatch(actUserGuestSuccess(data));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.userGuestReducer.data,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleMenu);
