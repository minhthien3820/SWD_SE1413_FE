import React, { useState } from "react";
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
  TextField,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { connect } from "react-redux";
import {
  actAddDriverAdminApi,
  actChangeDialogDriverAdminStatus,
} from "./modules/action";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  NewInput,
  UserStyles,
} from "../../HomeTemplate/UserGuestPage/UserStyles";

const validationSchema = Yup.object().shape({
  tenDriver: Yup.string().required("Vui lòng nhập tên driver"),
  trailer: Yup.string().required("Vui lòng nhập giới thiệu!"),
  moTa: Yup.string().required("Vui lòng nhập mô tả!"),
  ngayBatDau: Yup.string().required("Vui lòng chọn ngày bắt đầu!"),
  danhGia: Yup.number()
    .moreThan(0, "Không được thấp hơn 0")
    .lessThan(10, "Không được cao hơn 10")
    .required("Vui lòng chọn đánh giá"),
});

function DialogDriverAdmin(props) {
  const classes = UserStyles();
  const [selectedFile, setSelectedFile] = useState();
  const {
    changeDialogStatus,
    dialogStatus,
    driverEdit,
    handleUpdateDriver,
  } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));

  const handleClose = () => {
    changeDialogStatus(false);
  };

  const handleChangeFile = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSumissionFile = (values) => {
    var frm;
    if (selectedFile) {
      frm = new FormData();
      frm.append("File", selectedFile, selectedFile.name);
      frm.append("tendriver", values.tenDriver);
      frm.append("manhom", "GP09");
    }
    return frm;
  };

  const ValidationForm = () => {
    return (
      <React.Fragment>
        <Formik
          initialValues={
            driverEdit || {
              maDriver: 0,
              tenDriver: "",
              biDanh: "bi danh",
              trailer: "",
              hinhAnh: "",
              moTa: "",
              maNhom: "GP09",
              ngayBatDau: "",
              danhGia: 0,
            }
          }
          validationSchema={validationSchema}
          onSubmit={(values) => {
            values.ngayBatDau = new Date(values.ngayBatDau)
              .toISOString()
              .slice(0, 10)
              .split("-")
              .reverse()
              .join("/");
            let frm = handleSumissionFile(values);
            if (driverEdit) {
              handleUpdateDriver(values, frm, "edit");
            } else {
              values.hinhAnh = selectedFile.name;
              handleUpdateDriver(values, frm, "add");
            }
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
                <Grid item sm={6} xs={12}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <FormControl className={classes.formControl}>
                      <InputLabel
                        shrink
                        htmlFor="maDriver"
                        className={classes.label}
                      >
                        Mã Tài xế
                      </InputLabel>
                      <NewInput
                        defaultValue={values.maDriver}
                        type="text"
                        id="maDriver"
                        name="maDriver"
                        disabled
                      />
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
                      <TextField
                        id="ngayBatDau"
                        name="ngayBatDau"
                        type="date"
                        label="Ngày Bắt Đầu"
                        defaultValue={
                          driverEdit
                            ? new Date(values.ngayBatDau)
                                .toISOString()
                                .slice(0, 10)
                            : values.ngayBatDau
                        }
                        InputLabelProps={{
                          shrink: true,
                        }}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{ marginTop: 20 }}
                      />
                      {touched.ngayBatDau && errors.ngayBatDau ? (
                        <div className={classes.error}>
                          {errors.ngayBatDau}
                        </div>
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
                        htmlFor="tenDriver"
                        className={classes.label}
                      >
                        Tên Tài xế
                      </InputLabel>
                      <NewInput
                        defaultValue={values.tenDriver}
                        type="text"
                        id="tenDriver"
                        name="tenDriver"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.tenDriver && errors.tenDriver ? (
                        <div className={classes.error}>{errors.tenDriver}</div>
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
                        htmlFor="trailer"
                        className={classes.label}
                      >
                        Giới thiệu URL
                      </InputLabel>
                      <NewInput
                        defaultValue={values.trailer}
                        name="trailer"
                        type="text"
                        id="trailer"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.trailer && errors.trailer ? (
                        <div className={classes.error}>{errors.trailer}</div>
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
                        htmlFor="danhGia"
                        className={classes.label}
                      >
                        Đánh giá
                      </InputLabel>
                      <NewInput
                        defaultValue={values.danhGia}
                        name="danhGia"
                        type="number"
                        id="danhGia"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.danhGia && errors.danhGia ? (
                        <div className={classes.error}>{errors.danhGia}</div>
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
                        htmlFor="fileSelected"
                        className={classes.label}
                      >
                        Hình tải lên
                      </InputLabel>
                      <NewInput
                        defaultValue={""}
                        name="fileSelected"
                        type="file"
                        id="fileSelected"
                        onChange={handleChangeFile}
                      />
                      {touched.fileSelected && errors.fileSelected ? (
                        <div className={classes.error}>
                          {errors.fileSelected}
                        </div>
                      ) : (
                        <React.Fragment></React.Fragment>
                      )}
                    </FormControl>
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <FormControl className={classes.formControl}>
                      <InputLabel
                        shrink
                        htmlFor="moTa"
                        className={classes.label}
                      >
                        Mô tả
                      </InputLabel>
                      <NewInput
                        defaultValue={values.moTa}
                        name="moTa"
                        type="text"
                        id="moTa"
                        rows={3}
                        rowsMin={3}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.moTa && errors.moTa ? (
                        <div className={classes.error}>{errors.moTa}</div>
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
                      (Object.values(touched).length >= 3 ||
                        (driverEdit && Object.values(touched).length >= 1))
                    )
                  }
                >
                  {driverEdit ? "Cập nhật" : "Xác nhận"}
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
          {driverEdit ? "Cập nhật driver" : "Thêm Driver"}
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
    dialogStatus: state.driverAdminReducer.dialogStatus,
    driverEdit: state.driverAdminReducer.driverEdit,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeDialogStatus: (status) => {
      dispatch(actChangeDialogDriverAdminStatus(status));
    },
    handleUpdateDriver: (driver, frm, status) => {
      dispatch(actAddDriverAdminApi(driver, frm, status));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DialogDriverAdmin);
