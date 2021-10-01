import React, { Component } from "react";
import { connect } from "react-redux";
// import Loader from "../../../components/Loader";
import { actAuthApi } from "./modules/action";
import "./style.css";

class AuthPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taiKhoan: "",
      matKhau: "",
    };
  }

  handelOnchange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleLogin(this.state, this.props.history);
  };

  renderNoti = () => {
    const { err } = this.props;
    if (err) {
      return (
        <div className="alert alert-danger">
          Tài khoản hoặc mật khẩu không đúng
        </div>
      );
    }
  };

  render() {
    // const { loading } = this.props;
    // if (loading) {
    //   return <Loader />;
    // }
    return (
      <div className="admin__login">
        <div className="login__box">
          <h1>Login</h1>

          <form onSubmit={this.handleSubmit}>
            <div className="form-group textbox">
              {/* <label>Username</label> */}
              <i className="fas fa-user" />
              <input
                type="text"
                className="form-control"
                name="taiKhoan"
                placeholder="User"
                value={this.state.taiKhoan}
                onChange={this.handelOnchange}
              />
            </div>
            <div className="form-group textbox">
              {/* <label>Password</label> */}
              <i className="fas fa-lock" />
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="matKhau"
                value={this.state.matKhau}
                onChange={this.handelOnchange}
              />
            </div>
            {this.renderNoti()}
            <button type="submit" className="btn">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin: (user, history) => {
      dispatch(actAuthApi(user, history));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    loading: state.authReducer.loading,
    data: state.authReducer.data,
    err: state.authReducer.err,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
