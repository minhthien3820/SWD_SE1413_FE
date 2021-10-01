import {
  Box,
  Button,
  Container,
  Grid,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from "@material-ui/core";
import clsx from "clsx";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import DialogUserAdmin from "./DialogUserAdmin";
import {
  actChangeDialogUserAdminStatus,
  actDeleteUserAdminApi,
  actUserAdminApi,
  actEditUserAdmin,
} from "./modules/action";
import { UserAdminStyles } from "./modules/UserAdminStyles";
import SearchIcon from "@material-ui/icons/Search";

const columns = [
  { id: "taiKhoan", label: "Tài khoản", minWidth: 170 },
  { id: "hoTen", label: "Họ tên", minWidth: 100 },
  {
    id: "email",
    label: "Email",
    minWidth: 170,
  },
  {
    id: "soDt",
    label: "Số ĐT",
    minWidth: 170,
  },
  {
    id: "maLoaiNguoiDung",
    label: "Loại",
    minWidth: 170,
  },
  {
    id: "thaoTac",
    label: "Thao tác",
    minWidth: 170,
  },
];

function UserPage(props) {
  const classes = UserAdminStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const {
    handleUserAdminApi,
    data,
    changeDialogStatus,
    handleEditUser,
    handleDeleteUser,
  } = props;

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChangeSearch = (event) => {
    handleUserAdminApi(event.target.value);
  };

  const handleClickOpen = () => {
    changeDialogStatus(true);
  };

  useEffect(() => {
    handleUserAdminApi("");
  }, [handleUserAdminApi]);

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box
                display="flex"
                justifyContent="left"
                alignItems="center"
                height="100%"
                width="auto"
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleClickOpen}
                >
                  Thêm người dùng
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.root}>
                <Box
                  display="flex"
                  justifyContent="left"
                  alignItems="center"
                  height="100%"
                  maxWidth="500px"
                  marginX="20px"
                >
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Tìm kiếm người dùng"
                    variant="outlined"
                    className={classes.inputSearch}
                    onChange={handleChangeSearch}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
              </Paper>
            </Grid>
            {/* Data table */}

            <Grid item xs={12}>
              <Paper className={fixedHeightPaper}>
                <Paper className={classes.root}>
                  <TableContainer className={classes.containerTable}>
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                          {columns.map((column) => (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              style={{ minWidth: column.minWidth }}
                            >
                              {column.label}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {data ? (
                          data
                            .slice(
                              page * rowsPerPage,
                              page * rowsPerPage + rowsPerPage
                            )
                            .map((user, id) => {
                              return (
                                <TableRow
                                  hover
                                  role="checkbox"
                                  tabIndex={-1}
                                  key={id}
                                >
                                  {columns.map((column) => {
                                    const value = user[column.id];
                                    return (
                                      <TableCell
                                        key={column.id}
                                        align={column.align}
                                      >
                                        {column.id === "thaoTac" ? (
                                          <React.Fragment>
                                            <Button
                                              variant="contained"
                                              color="default"
                                              onClick={() => {
                                                handleEditUser(user);
                                              }}
                                            >
                                              Sửa
                                            </Button>
                                            <Button
                                              variant="contained"
                                              color="secondary"
                                              onClick={() => {
                                                handleDeleteUser(user.taiKhoan);
                                              }}
                                            >
                                              Xóa
                                            </Button>
                                          </React.Fragment>
                                        ) : (
                                          value
                                        )}
                                      </TableCell>
                                    );
                                  })}
                                </TableRow>
                              );
                            })
                        ) : (
                          <React.Fragment></React.Fragment>
                        )}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  {data && data.length > 0 ? (
                    <TablePagination
                      rowsPerPageOptions={[10, 25, 100]}
                      component="div"
                      count={data.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      onChangePage={handleChangePage}
                      onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                  ) : (
                    <React.Fragment></React.Fragment>
                  )}
                </Paper>
              </Paper>
            </Grid>
          </Grid>
        </Container>

        <DialogUserAdmin />
      </main>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.userAdminReducer.data,
    dialogStatus: state.userAdminReducer.dialogStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleUserAdminApi: (keyword) => {
      dispatch(actUserAdminApi(keyword));
    },
    changeDialogStatus: (status) => {
      dispatch(actChangeDialogUserAdminStatus(status));
    },
    handleDeleteUser: (taiKhoan) => {
      dispatch(actDeleteUserAdminApi(taiKhoan));
    },
    handleEditUser: (user) => {
      dispatch(actEditUserAdmin(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
