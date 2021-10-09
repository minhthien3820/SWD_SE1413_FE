import React from "react";
import { connect } from "react-redux";
import { actChangeLayoutForm, actSignupApi } from "./modules/action";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  // taiKhoan: Yup.string()
  //   .min(6, "Quá ngắn!")
  //   .max(20, "Quá dài!")
  //   .required("Vui lòng nhập tài khoản!"),
  password: Yup.string()
    .min(6, "Quá ngắn!")
    .max(20, "Quá dài!")
    .required("Vui lòng nhập mật khẩu!"),
  name: Yup.string()
    .min(2, "Quá ngắn!")
    .max(50, "Quá dài!")
    .required("Vui lòng nhập họ tên!")
    .matches(
      /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/,
      "Họ tên không hợp lệ"
    ),
  email: Yup.string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập email!"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Số ĐT không hợp lệ")
    .required("Vui lòng nhập số ĐT!"),
});

function SignUpForm(props) {
  return (
    <React.Fragment>
      <div className="forms-container">
        <div className="signin-signup">
          <Formik
            initialValues={{
              // taiKhoan: "",
              id:"",
              name: "",
              phone: "",
              email: "",
              password: "",
              role: "new",
              status: true,
              createAt:"",
              accessToken:"",
              refreshToken:""
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              const data = {
                name: values.name,
                password: values.password,
                phone: values.phone,
                email: values.email
              }
              props.handleSignupApi(data);
             
            }}
          >
            {({
              touched,
              values,
              errors,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit} className="sign-up-form">
                <h2 className="title">Đăng Ký</h2>
                {/* <div className="input-field">
                  <i className="fas fa-user" />
                  <input
                    type="text"
                    placeholder="Tài Khoản"
                    value={values.taiKhoan}
                    id="taiKhoan"
                    name="taiKhoan"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {touched.taiKhoan && errors.taiKhoan ? (
                  <div className="loginPage__error">{errors.taiKhoan}</div>
                ) : (
                  <React.Fragment></React.Fragment>
                )} */}
                <div className="input-field">
                  <i className="fas fa-envelope" />
                  <input
                    type="email"
                    placeholder="Email"
                    value={values.email}
                    id="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {touched.email && errors.email ? (
                  <div className="loginPage__error">{errors.email}</div>
                ) : (
                  <React.Fragment></React.Fragment>
                )}
                <div className="input-field">
                  <i className="fas fa-lock" />
                  <input
                    type="password"
                    placeholder="Mật Khẩu"
                    value={values.matKhau}
                    id="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {touched.password && errors.password ? (
                  <div className="loginPage__error">{errors.password}</div>
                ) : (
                  <React.Fragment></React.Fragment>
                )}
                <div className="input-field">
                  <i className="fa fa-id-card" />
                  <input
                    type="text"
                    placeholder="Họ Tên"
                    value={values.name}
                    id="name"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {touched.name && errors.name ? (
                  <div className="loginPage__error">{errors.name}</div>
                ) : (
                  <React.Fragment></React.Fragment>
                )}
                
                <div className="input-field">
                  <i className="fas fa-phone" />
                  <input
                    type="text"
                    placeholder="Số Điện Thoại"
                    value={values.soDt}
                    id="phone"
                    name="phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {touched.phone && errors.phone ? (
                  <div className="loginPage__error">{errors.phone}</div>
                ) : (
                  <React.Fragment></React.Fragment>
                )}
                <button
                  type="submit"
                  className="btn"
                  disabled={
                    !(
                      Object.values(errors).length === 0 &&
                      Object.values(touched).length >= 4
                    )
                  }
                >
                  Xác nhận
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel right-panel">
          <div className="content">
            <h3>Đã là thành viên ?</h3>
            <p>
              Nếu bạn đã là thành viên của chúng tôi thì hãy chọn vào nút đăng nhập
              để có những trải nghiệm tuyệt vời nhé
            </p>
            <button
              className="btn transparent"
              id="sign-in-btn"
              onClick={() => {
                props.handleChangeStatus();
              }}
            >
              Đăng nhập
            </button>
          </div>
          <img src="/img/register.svg" className="image" alt="signup" />
        </div>
      </div>
    </React.Fragment>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeStatus: () => {
      dispatch(actChangeLayoutForm());
    },
    handleSignupApi: (user) => {
      dispatch(actSignupApi(user));
    },
  };
};

export default connect(null, mapDispatchToProps)(SignUpForm);
