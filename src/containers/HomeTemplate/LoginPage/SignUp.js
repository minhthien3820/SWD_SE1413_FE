import React from "react";
import { connect } from "react-redux";
import { actChangeLayoutForm, actSignupApi } from "./modules/action";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  taiKhoan: Yup.string()
    .min(6, "Quá ngắn!")
    .max(20, "Quá dài!")
    .required("Vui lòng nhập tài khoản!"),
  matKhau: Yup.string()
    .min(6, "Quá ngắn!")
    .max(20, "Quá dài!")
    .required("Vui lòng nhập mật khẩu!"),
  hoTen: Yup.string()
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
  soDt: Yup.string()
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
              taiKhoan: "",
              matKhau: "",
              hoTen: "",
              email: "",
              soDt: "",
              maNhom: "GP09",
              maLoaiNguoiDung: "KhachHang",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              props.handleSignupApi(values);
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
                <div className="input-field">
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
                )}
                <div className="input-field">
                  <i className="fas fa-lock" />
                  <input
                    type="password"
                    placeholder="Mật Khẩu"
                    value={values.matKhau}
                    id="matKhau"
                    name="matKhau"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {touched.matKhau && errors.matKhau ? (
                  <div className="loginPage__error">{errors.matKhau}</div>
                ) : (
                  <React.Fragment></React.Fragment>
                )}
                <div className="input-field">
                  <i className="fa fa-id-card" />
                  <input
                    type="text"
                    placeholder="Họ Tên"
                    value={values.hoTen}
                    id="hoTen"
                    name="hoTen"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {touched.hoTen && errors.hoTen ? (
                  <div className="loginPage__error">{errors.hoTen}</div>
                ) : (
                  <React.Fragment></React.Fragment>
                )}
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
                  <i className="fas fa-phone" />
                  <input
                    type="text"
                    placeholder="Số Điện Thoại"
                    value={values.soDt}
                    id="soDt"
                    name="soDt"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {touched.soDt && errors.soDt ? (
                  <div className="loginPage__error">{errors.soDt}</div>
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
