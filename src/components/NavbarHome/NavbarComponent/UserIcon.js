import React, { useEffect } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";
import { useStyles } from "../NavbarStyle";
import { Hidden, List, ListItem } from "@material-ui/core";
import { connect } from "react-redux";
import { actUserGuestSuccess } from "../../../containers/HomeTemplate/LoginPage/modules/action";

function UserIcon(props) {
  const classes = useStyles();
  const user = props.user || JSON.parse(localStorage.getItem("UserGuest"));

  useEffect(() => {
    if (!props.user) {
      props.handleDispatchLogin(user);
    }
  });

  const logOut = () => {
    localStorage.removeItem("UserGuest");
    props.handleDispatchLogin(null);
  };

  const loginForm = () => {
    return (
      <Link to="/dang-nhap" className={classes.textLogin}>
        <AccountCircleIcon color="action" className={classes.iconColor} />
        <span style={{ marginLeft: "8px" }}>Đăng nhập</span>
      </Link>
    );
  };

  const userInfo = () => {
    return (
      <div className={classes.userContainer}>
        <div className={classes.textLogin}>
          <AccountCircleIcon color="action" className={classes.iconColor} />
          <span style={{ marginLeft: "8px" }}>{user.hoTen}</span>
        </div>
        <Hidden smDown>
          <List>
            <ListItem button>
              <Link to="/thong-tin-nguoi-dung" className={classes.info}>
                Thông tin
              </Link>
            </ListItem>
            <ListItem button onClick={logOut}>
              Đăng xuất
            </ListItem>
          </List>
        </Hidden>
      </div>
    );
  };
  return <React.Fragment>{user ? userInfo() : loginForm()}</React.Fragment>;
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

export default connect(mapStateToProps, mapDispatchToProps)(UserIcon);
