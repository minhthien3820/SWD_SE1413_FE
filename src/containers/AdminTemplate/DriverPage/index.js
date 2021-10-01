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
import SearchIcon from "@material-ui/icons/Search";
import { DriverAdminStyles } from "./DriverAdminStyles";
import {
  actChangeDialogDriverAdminStatus,
  actDeleteDriverAdminApi,
  actEditDriverAdmin,
  actDriverAdminApi,
} from "./modules/action";
import DialogDriverAdmin from "./DialogDriverAdmin";

const columns = [
  { id: "maDriver", label: "Mã Tài Xế", minWidth: 100 },
  { id: "tenDriver", label: "Tên Tài xế", minWidth: 100 },
  {
    id: "hinhAnh",
    label: "Hình ảnh",
    minWidth: 100,
  },
  {
    id: "moTa",
    label: "Mô tả",
    minWidth: 100,
  },
  {
    id: "ngayBatDau",
    label: "Ngày bắt đầu",
    minWidth: 100,
    format: (value) =>
      new Date(value).toLocaleDateString("vi", {
        month: "2-digit",
        day: "2-digit",
        year: "2-digit",
      }),
  },
  {
    id: "thaoTac",
    label: "Thao tác",
    minWidth: 330,
  },
];

function DriverPage(props) {
  const classes = DriverAdminStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const {
    handleDriverAdminApi,
    data,
    changeDialogStatus,
    handleEditDriver,
    handleDeleteDriver,
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
    handleDriverAdminApi(event.target.value);
  };

  const handleClickOpen = () => {
    changeDialogStatus(true);
  };

  useEffect(() => {
    handleDriverAdminApi("");
  }, [handleDriverAdminApi]);

  const handleButtonItem = (column, value, driver) => {
    switch (column.id) {
      case "thaoTac":
        return (
          <React.Fragment>
            <Box display="flex" flexWrap="no-wrap">
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  console.log(driver);
                }}
                style={{ marginRight: "10px" }}
              >
                Tạo lịch 
              </Button>
              <Button
                variant="contained"
                color="default"
                onClick={() => {
                  handleEditDriver(driver);
                }}
                style={{ marginRight: "10px" }}
              >
                Sửa
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  handleDeleteDriver(driver.maDriver);
                }}
              >
                Xóa
              </Button>
            </Box>
          </React.Fragment>
        );
      case "hinhAnh":
        return (
          <img
            src={value}
            alt={value}
            style={{ width: "100px", height: "auto" }}
          />
        );
      case "ngayBatDau":
        return column.format(value);
      default:
        return value;
    }
  };

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
                  Thêm Tài Xế
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
                    label="Tìm kiếm Driver"
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
                            .map((driver, id) => {
                              return (
                                <TableRow
                                  hover
                                  role="checkbox"
                                  tabIndex={-1}
                                  key={id}
                                >
                                  {columns.map((column) => {
                                    const value = driver[column.id];
                                    return (
                                      <TableCell
                                        key={column.id}
                                        align={column.align}
                                      >
                                        {handleButtonItem(column, value, driver)}
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

        <DialogDriverAdmin />
      </main>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.driverAdminReducer.data,
    dialogStatus: state.driverAdminReducer.dialogStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleDriverAdminApi: (keyword) => {
      dispatch(actDriverAdminApi(keyword));
    },
    changeDialogStatus: (status) => {
      dispatch(actChangeDialogDriverAdminStatus(status));
    },
    handleDeleteDriver: (maDriver) => {
      dispatch(actDeleteDriverAdminApi(maDriver));
    },
    handleEditDriver: (driver) => {
      dispatch(actEditDriverAdmin(driver));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DriverPage);
