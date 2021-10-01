import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  Button,
  Hidden,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { NewInput } from "../UserGuestPage/UserStyles";
import { actCheckOutApi } from "./modules/action";
import IconNotice from "./../../../assets/img/exclamation.png";
import Screen from "./../../../assets/img/screen.png";
import ChairIcon from "./../../../assets/img/chair.png";
import WeekendIcon from "@material-ui/icons/Weekend";
import CancelIcon from "@material-ui/icons/Cancel";
import { Link as RouterLink } from "react-router-dom";

const CheckoutPageStyles = makeStyles((theme) => ({
  rightCheckOut: {
    position: "fixed",
    right: "0",
    top: 0,
    backgroundColor: "#fff",
    boxShadow: "0 0 15px rgb(0 0 0 / 30%)",
    zIndex: 3,
    width: "35%",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      position: "static!important",
      width: "100%",
      marginTop: "59px",
      padding: " 0 15px",
      boxShadow: "none!important",
    },
  },
  contentfullright: {
    overflowY: "auto",
    overflowX: "hidden",
    height: "100%",
    paddingBottom: "100px",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  total: {
    position: "relative",
    borderBottom: "1px dashed #e9e9e9",
    height: "80px",
    marginBottom: "15px",
    textAlign: "center",
    fontSize: "36px",
    fontFamily: "SF Medium",
    color: "#44c020!important",
    "& span": {
      width: "300px",
      textAlign: "center",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate3d(-50%,-50%,0)",
    },
  },
  filmName: {
    borderBottom: "1px dashed #e9e9e9",
    paddingBottom: "12.5px",
    fontFamily: "SF Medium",
    fontSize: "16px",
    fontWeight: "600",
  },
  contentCinema: {
    marginTop: "5px",
    fontFamily: "SF Regular",
    fontSize: "13px",
    fontWeight: "300",
  },
  chair: {
    borderBottom: "1px dashed #e9e9e9",
    paddingBottom: "12.5px",
    paddingTop: "12.5px",
    marginBottom: "12.5px",
    "& img": {
      marginRight: "5px",
      width: "18px",
    },
  },
  totalChair: {
    fontFamily: "SF Medium",
    textAlign: "right",
    color: "#44c020!important",
    fontSize: "16px",
  },

  formControl: {
    width: "100%",
  },
  label: { fontSize: "16px", marginBottom: "15px" },
  infoUser: {
    borderBottom: "1px dashed #e9e9e9",
    paddingBottom: "12.5px",
    marginBottom: "12.5px",
    position: "relative",
  },
  methodPay: {
    marginBottom: "30%!important",
  },
  notice: {
    paddingLeft: " 5%",
    paddingRight: "5%",
    paddingBottom: "4%",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: "60px",
    marginRight: "4px",
    background: "#fff",
    textAlign: "center",
    zIndex: 2,
    "& span": {
      fontSize: "14px",
      fontFamily: "SF Regular",
    },
    [theme.breakpoints.down("sm")]: {
      position: "static!important",
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  icon: {
    marginRight: "8px",
    width: "16px",
    height: "16px",
  },
  buyTicket: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: "15px",
    height: "60px",
    cursor: "pointer",
    fontSize: "24px",
    textAlign: "center",
    color: "#e9e9e9!important",
    backgroundImage: "linear-gradient(223deg ,#b4ec51 0,#429321 100%)",
    width: "100%",
  },
  seatCheckout: {
    marginLeft: 0,
    marginTop: "80px",
    paddingTop: "30px",
    width: "65%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "80px",
      paddingTop: "0!important",
      width: "100%!important",
    },
  },
  address: {
    fontSize: "16px",
  },
  hour: {
    lineHeight: "5px",
    fontSize: "14px",
    color: " #9b9b9b",
  },
  info1: {
    lineHeight: 0,
    fontSize: "10px",
    color: "#9b9b9b",
    textAlign: "center",
  },
  info2: {
    fontFamily: "SF Medium",
    lineHeight: 1,
    fontSize: "29px",
    color: "#fb4226",
    textAlign: "center",
  },
  seatmap: { marginTop: "10px" },

  topCheckout: {
    position: "fixed",
    backgroundColor: "#fff",
    boxShadow: "0 0 15px rgb(0 0 0 / 30%)",
    zIndex: 3,
    top: "-1px",
    left: 0,
    width: "65%",
    height: "80px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "60px!important",
    },
  },
  leftStep: {
    color: "#fb4226",
    position: "relative",
    padding: "0 15px!important",
    fontFamily: "SF Medium",
    lineHeight: "80px",
    fontSize: "14px",
    textTransform: "uppercase",
    fontWeight: "600",
  },
  rightStep: {
    display: "flex",
    padding: "0 30px",
    justifyContent: "center",
    alignItems: "center",
    color: "#0056b3",
    "&:hover": {
      textDecoration: "none",
      color: "#fb4226",
    },
    "& span": {
      marginRight: "5px",
    },
  },
  checkoutButtonMobile: {
    zIndex: 3,
    display: "block",
    position: "fixed",
    width: "100%",
    bottom: 0,
    left: 0,
    background: "#fefdfb",
    boxShadow: "0 -1px 0 0 #dadada, 0 1px 0 0 #dadada",
  },
  totalChosen: {
    position: "relative",
    height: "50px",
  },
  seatChosen: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate3d(-50%,-50%,0)",
    textAlign: "center",
    width: "85%",
    fontSize: "15px",
    color: "#44c020!important",
  },
  buyTicketMobile: {
    height: "50px",
    paddingTop: "3%",
    cursor: "pointer",
    fontSize: "19px",
    textAlign: "center",
    color: "#e9e9e9!important",
    background: "#44c020",
    position: "relative",
    "& p": {
      position: "absolute",
      top: "50%",
      left: "50%",
      marginBottom: 0,
      transform: "translate(-50%,-50%)",
    },
  },
  noteSeat: {
    marginTop: "30px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  typeSeat: {
    marginRight: "21px",
    display: "inline-block",
    flexDiretion: "column",
  },
  nameSeat: {
    display: "block",
    color: "#9b9b9b",
    fontSize: "12px",
  },
  guestChosen: {
    color: "#44c020",
  },
  anphabet: {
    position: "relative",
    display: "inline-block",
    width: "30px",
    height: "26px",
    marginRight: "25px",
  },
}));

function CheckoutPage(props) {
  const id = props.match.params.id;
  const { handleCheckoutApi, data } = props;
  const classes = CheckoutPageStyles();

  useEffect(() => {
    handleCheckoutApi(id);
  }, [id, handleCheckoutApi]);
  console.log(data);

  const handleMethodPay = () => {
    if ("chưa chọn") {
      return (
        <div style={{ color: "#FB4226", padding: "5px 0", fontSize: "13px" }}>
          Vui lòng chọn Tài xế để hiển thị phương thức thanh toán phù hợp.
        </div>
      );
    }
    return <React.Fragment></React.Fragment>;
  };

  const handleSeatMap = () => {
    var count = 0;
    return ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"].map((item) => {
      let arr = data.danhSachDriver.slice(count, count + 16);
      count += 16;
      return (
        <div>
          <span className={classes.anphabet}>{item}</span>
          {arr.map((chair) => {
            if (chair.daDat) {
              return (
                <WeekendIcon
                  key={chair.maDriver}
                  color="disabled"
                  style={{ marginRight: "5px" }}
                />
              );
            }
            return (
              <WeekendIcon
                key={chair.maDriver}
                color={chair.loaiDriver === "Thuong" ? "inherit" : "primary"}
                style={{ cursor: "pointer", marginRight: "5px" }}
              />
            );
          })}
        </div>
      );
    });
  };

  if (data) {
    const { danhSachDriver, thongTinDriver } = data;
    const user = JSON.parse(localStorage.getItem("UserGuest"));
    return (
      <div>
        <Box className={classes.topCheckout}>
          <div className={classes.leftStep}>ĐẶT NGAY</div>
          <div>
            <RouterLink className={classes.rightStep} to="/">
              <span>Thoát</span>
              <CancelIcon />
            </RouterLink>
          </div>
        </Box>
        <Box className={classes.seatCheckout}>
          <Hidden mdUp>
            <div className={classes.total}>
              <span>60000đ</span>
            </div>
          </Hidden>
          <Box
            className={classes.topContent}
            width="90%"
            margin="0 auto"
            display="flex"
            justifyContent="space-between"
          >
            <div>
              <p className={classes.address}>{thongTinDriver.Group}</p>
              <p className={classes.hour}>
                {thongTinDriver.Owner} - {thongTinDriver.ngayDi} -{" "}
                {thongTinDriver.gioDi}{" "}
              </p>
            </div>
            <Box marginTop="10px" width="100px">
              <p className={classes.info1}>Thời gian giữ chỗ</p>
              <p className={classes.info2}>
                <span>05</span>:<span>00</span>
              </p>
            </Box>
          </Box>
          <Box className={classes.seatmap}>
            <Box overflow="scroll hidden">
              <Box textAlign="center" margin="auto" width="627px">
                <Box>
                  <img src={Screen} alt="screen" style={{ width: "90%" }} />
                </Box>
                <Box marginBottom="20px">{handleSeatMap()}</Box>
              </Box>
            </Box>
            <Box className={classes.noteSeat}>
              <Box marginTop="5px">
                <span className={classes.typeSeat}>
                  <WeekendIcon color="inherit" />
                  <span className={classes.nameSeat}>Đặt thường</span>
                </span>
              </Box>
              <Box marginTop="5px">
                <span className={classes.typeSeat}>
                  <WeekendIcon color="primary" />
                  <span className={classes.nameSeat}>Đặt VIP</span>
                </span>
              </Box>
              <Box marginTop="5px">
                <span className={classes.typeSeat}>
                  <WeekendIcon
                    color="primary"
                    className={classes.guestChosen}
                  />
                  <span className={classes.nameSeat}>Tài xế đang chọn</span>
                </span>
              </Box>
              <Box marginTop="5px">
                <span className={classes.typeSeat}>
                  <WeekendIcon color="disabled" />
                  <span className={classes.nameSeat}>Tài xế đã có người chọn</span>
                </span>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={classes.rightCheckOut}>
          <Box className={classes.contentfullright}>
            <Hidden smDown>
              <div className={classes.total}>
                <span>60000đ</span>
              </div>
            </Hidden>
            <div className={classes.driverName}>
              {thongTinDriver.tenDriver}
              <div className={classes.contentDriver}>
                <div>{thongTinDriver.Group}</div>
                <div>
                  {thongTinDriver.Owner} - {thongTinDriver.ngayDi} -{" "}
                  {thongTinDriver.gioDi}
                </div>
              </div>
            </div>
            <div className={classes.chair}>
              <Grid container>
                <Grid item xs={7} style={{ color: "#fb4226" }}>
                  <img src={ChairIcon} alt="chairIcon" />
                  <span>C12 C13</span>
                </Grid>
                <Grid item xs={5}>
                  <Box className={classes.totalChair}>0 đ</Box>
                </Grid>
              </Grid>
            </div>
            <div className={classes.infoUser}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <FormControl className={classes.formControl}>
                  <InputLabel shrink htmlFor="email" className={classes.label}>
                    Email
                  </InputLabel>
                  <NewInput
                    defaultValue={user.email}
                    name="email"
                    type="text"
                    id="email"
                    // onChange={handleChange}
                  />
                </FormControl>
              </Box>
            </div>
            <div className={classes.infoUser}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <FormControl className={classes.formControl}>
                  <InputLabel shrink htmlFor="soDt" className={classes.label}>
                    Số điện thoại
                  </InputLabel>
                  <NewInput
                    defaultValue={user.soDT}
                    name="soDt"
                    type="text"
                    id="soDt"
                    // onChange={handleChange}
                  />
                </FormControl>
              </Box>
            </div>
            <div className={classes.methodPay}>
              <div style={{ marginBottom: "5px" }}>Hình thức thanh toán</div>
              {handleMethodPay()}
            </div>
            <div className={classes.notice}>
              <img src={IconNotice} alt="icon" className={classes.icon} />
              <span>
                Vé đã mua không thể đổi hoặc hoàn tiền
                <br />
              </span>
              <span>
                Mã vé sẽ được gửi qua tin nhắn ZMS (tin nhắn Zalo) và Email đã
                nhập
              </span>
            </div>
          </Box>
          <Hidden smDown>
            <Button className={classes.buyTicket}>Đặt vé</Button>
          </Hidden>
        </Box>
        <Hidden mdUp>
          <Box className={classes.checkoutButtonMobile}>
            <Grid container>
              <Grid item xs={6} className={classes.totalChosen}>
                <p className={classes.seatChosen}>C12</p>
              </Grid>
              <Grid item xs={6} className={classes.buyTicketMobile}>
                <p>Đặt Ngay</p>
              </Grid>
            </Grid>
          </Box>
        </Hidden>
      </div>
    );
  }

  return <React.Fragment></React.Fragment>;
}

const mapStateToProps = (state) => {
  return {
    data: state.checkoutReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleCheckoutApi: (id) => {
      dispatch(actCheckOutApi(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
