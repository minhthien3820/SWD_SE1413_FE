import React, { Component } from "react";
import { connect } from "react-redux";
import { actChangeLayoutForm, actLoginApi } from "./modules/action";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taiKhoan: "",
      matKhau: "",
    };
  }

  handleOnchange = (e) => {
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
    if (this.props.err) {
      return (
        <div className="loginPage__error">
          Tài khoản hoặc mật khẩu không đúng
        </div>
      );
    }
  };

  render() {
    return (
      <>
        <div className="forms-container">
          <div className="signin-signup">
            <form className="sign-in-form" onSubmit={this.handleSubmit}>
              <h2 className="title">Đăng nhập</h2>
              <div className="input-field">
                <i className="fas fa-user" />
                <input
                  type="text"
                  placeholder="Tài Khoản"
                  name="taiKhoan"
                  value={this.state.taiKhoan}
                  onChange={this.handleOnchange}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input
                  type="password"
                  placeholder="Mật Khẩu"
                  name="matKhau"
                  value={this.state.matKhau}
                  onChange={this.handleOnchange}
                />
              </div>
              {this.renderNoti()}
              <button type="submit" className="btn solid">
                Đăng nhập
              </button>
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>Bạn là người mới ?</h3>
              <p>
                Nếu bạn là người mới thì hãy chọn nút đăng ký để có những trải
                nghiệm tuyệt vời nhất
              </p>
              <button
                className="btn transparent"
                id="sign-up-btn"
                onClick={() => {
                  this.props.handleChangeStatus();
                }}
              >
                Đăng ký
              </button>
            </div>
            <img src="/img/log.svg" className="image" alt="login" />
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeStatus: () => {
      dispatch(actChangeLayoutForm());
    },
    handleLogin: (user, history) => {
      dispatch(actLoginApi(user, history));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    loading: state.userGuestReducer.loading,
    data: state.userGuestReducer.data,
    err: state.userGuestReducer.err,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
