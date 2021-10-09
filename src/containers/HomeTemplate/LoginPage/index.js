import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import LoginForm from "./Login";
import SignUpForm from "./SignUp";
import "./login.css";
import { Redirect } from "react-router-dom";

function LoginPage(props) {
  const [loginStatus, setLoginStatus] = useState(true);
  const { loginFormStatus } = props;
  useEffect(() => {
    setLoginStatus(loginFormStatus);
  }, [loginFormStatus]);

  if (JSON.parse(localStorage.getItem("UserGuest"))) {
    return <Redirect to="/" />;
  }
  return (
    <div
      className={`loginPage__container ${loginStatus ? "" : "sign-up-mode"} `}
    >
      {loginStatus ? (
        <LoginForm history={props.history} />
      ) : (
        <SignUpForm history={props.history} />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loginFormStatus: state.userGuestReducer.loginFormStatus,
  };
};

export default connect(mapStateToProps)(LoginPage);
