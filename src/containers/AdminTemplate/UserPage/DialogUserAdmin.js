import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { connect } from "react-redux";
import {
  actAddUserAdminApi,
  actChangeDialogUserAdminStatus,
  actUpdateUserAdminApi,
} from "./modules/action";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  NewInput,
  UserStyles,
} from "../../HomeTemplate/UserGuestPage/UserStyles";

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
  role: Yup.string().required("Vui lòng chọn loại người dùng!"),
});

function DialogUserAdmin(props) {
  const classes = UserStyles();
  const {
    changeDialogStatus,
    dialogStatus,
    handleAddUser,
    userEdit,
    handleUpdateUser,
  } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));

  const handleClose = () => {
    changeDialogStatus(false);
  };

  const ValidationForm = () => {
    return (
      <React.Fragment>
        <Formik
          initialValues={
            userEdit || {
              id:"",
              password: "",
              name: "",
              email: "",
              phone: "",
              roleId: "",
              status: true,
              // createAt:""  
            }
          }
          validationSchema={validationSchema}
          onSubmit={(values) => {
            if (userEdit) {
              values.name = "anhln";
              handleUpdateUser(values);
            } else {
              handleAddUser(values);
            }
            // handleUpdateUser(values);
            // handleAddUser(values);
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
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                {/* <Grid item sm={6} xs={12}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <FormControl className={classes.formControl}>
                      <InputLabel
                        shrink
                        htmlFor="taiKhoan"
                        className={classes.label}
                      >
                        Tài khoản
                      </InputLabel>
                      <NewInput
                        defaultValue={values.taiKhoan}
                        type="text"
                        id="taiKhoan"
                        name="taiKhoan"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.taiKhoan && errors.taiKhoan ? (
                        <div className={classes.error}>{errors.taiKhoan}</div>
                      ) : (
                        <React.Fragment></React.Fragment>
                      )}
                    </FormControl>
                  </Box>
                </Grid> */}
                <Grid item sm={6} xs={12}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <FormControl className={classes.formControl}>
                      <InputLabel
                        shrink
                        htmlFor="password"
                        className={classes.label}
                      >
                        Mật Khẩu
                      </InputLabel>
                      <NewInput
                        defaultValue={values.password}
                        type="password"
                        id="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.password && errors.password ? (
                        <div className={classes.error}>{errors.password}</div>
                      ) : (
                        <React.Fragment></React.Fragment>
                      )}
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <FormControl className={classes.formControl}>
                      <InputLabel
                        shrink
                        htmlFor="name"
                        className={classes.label}
                      >
                        Họ Tên
                      </InputLabel>
                      <NewInput
                        defaultValue={values.name}
                        id="name"
                        name="name"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.name && errors.name ? (
                        <div className={classes.error}>{errors.name}</div>
                      ) : (
                        <React.Fragment></React.Fragment>
                      )}
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <FormControl className={classes.formControl}>
                      <InputLabel
                        shrink
                        htmlFor="email"
                        className={classes.label}
                      >
                        Email
                      </InputLabel>
                      <NewInput
                        defaultValue={values.email}
                        name="email"
                        type="text"
                        id="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.email && errors.email ? (
                        <div className={classes.error}>{errors.email}</div>
                      ) : (
                        <React.Fragment></React.Fragment>
                      )}
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <FormControl className={classes.formControl}>
                      <InputLabel
                        shrink
                        htmlFor="phone"
                        className={classes.label}
                      >
                        Số Điện Thoại
                      </InputLabel>
                      <NewInput
                        defaultValue={values.phone}
                        name="phone"
                        type="text"
                        id="phone"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.phone && errors.phone ? (
                        <div className={classes.error}>{errors.phone}</div>
                      ) : (
                        <React.Fragment></React.Fragment>
                      )}
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <FormControl className={classes.formControl}>
                      <InputLabel
                        id="select-outlined-label"
                        shrink
                        className={classes.label}
                      >
                        Loại người dùng
                      </InputLabel>
                      <Select
                        labelId="select-outlined-label"
                        id="roleId"
                        name="roleId"
                        value={values.roleId}
                        onChange={handleChange}
                        input={<NewInput />}
                      >
                        <MenuItem value={"new"}>Khách hàng</MenuItem>
                        <MenuItem value={"admin"}>Quản trị</MenuItem>
                      </Select>
                      {touched.roleId && errors.roleId ? (
                        <div className={classes.error}>
                          {errors.roleId}
                        </div>
                      ) : (
                        <React.Fragment></React.Fragment>
                      )}
                    </FormControl>
                  </Box>
                </Grid>
              </Grid>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={
                    !(
                      Object.values(errors).length === 0 &&
                      (Object.values(touched).length >= 5 ||
                        (userEdit && Object.values(touched).length >= 1))
                    )
                  }
                >
                  {userEdit ?  "Cập nhật" : "Xác nhận"}
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </React.Fragment>
    );
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={dialogStatus}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {userEdit ? "Cập nhật thông tin" : "Thêm người dùng"}
        </DialogTitle>
        <DialogContent>{ValidationForm()}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Đóng
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    dialogStatus: state.userAdminReducer.dialogStatus,
    userEdit: state.userAdminReducer.userEdit,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeDialogStatus: (status) => {
      dispatch(actChangeDialogUserAdminStatus(status));
    },
    handleAddUser: (user) => {
      dispatch(actAddUserAdminApi(user));
    },
    handleUpdateUser: (user) => {
      dispatch(actUpdateUserAdminApi(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DialogUserAdmin);
