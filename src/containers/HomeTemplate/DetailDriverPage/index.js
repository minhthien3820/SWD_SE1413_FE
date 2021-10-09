import React, { useEffect } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { TabContext, TabPanel } from "@material-ui/lab";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CircularProgress,
  Grid,
  Hidden,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import RatingStar from "../../../components/RatingStar";
import { actDetailPageApi } from "./modules/action";
import { connect } from "react-redux";
import { DetailPageStyles } from "./DetailPageStyle";
import { actChangeDialogStatus } from "../../../components/DialogDriver/modules/action";
import DialogDriver from "../../../components/DialogDriver";
import videoIcon from "./../../../assets/img/play-video.png";
import ReviewTab from "./ReviewTab";
import ShowTimeTab from "./ShowTimeTab";

function DetailDriverPage(props) {
  const classes = DetailPageStyles();
  const [value, setValue] = React.useState("1");

  const { listDetailPageApi, data, listLogo, changeDialogStatus } = props;
  const { id } = props.match.params;

  useEffect(() => {
    listDetailPageApi(id);
  }, [id, listDetailPageApi]);
  

  // check breakpoint screen to apply layout
  const matchBreakpoint = useMediaQuery((theme) =>
    theme.breakpoints.down("xs")
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickOpenDialog = () => {
    changeDialogStatus({ status: true, driver: data });
  };

  if (data && listLogo) {
    console.log(data);
    return (
      <div className={classes.backgroundSection}>
        {/* Large Image and Rating on the top of page */}
        <Hidden only="xs">
          <div className={classes.mainHeightTop}>
            <div
              className={classes.bgTop}
              style={{
                backgroundImage: `url(${data.hinhAnh})`,
              }}
            ></div>
            <div className={classes.styleGradient}></div>
            <div
              className={`${classes.detailMainInfo} ${classes.mainMaxWidth}`}
            >
              <Grid container>
                <Grid item xs={3}>
                  <div
                    className={classes.posterMain}
                    style={{
                      backgroundImage: `url(${data.hinhAnh})`,
                    }}
                  >
                    <img
                      src={videoIcon}
                      alt="play-video"
                      onClick={handleClickOpenDialog}
                    />
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    textAlign="left"
                    flexDirection="column"
                    mx={2}
                    style={{ height: "100%" }}
                  >
                    <span className={classes.detailMainInfo1}>
                      {new Date(data.ngayBatDau).toLocaleDateString("vi")}
                    </span>
                    <p className={classes.detailMainInfo2}>
                      <span>C18</span>
                      {data.tenDriver}
                    </p>
                    <span className={classes.detailMainInfo1}>
                      {`${data.heThongRapChieu[0].cumRapChieu[0].lichChieuPhim[0].thoiLuong} phút `}{" "}
                      - Square {data.danhGia} - 2D/Digital
                    </span>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.btnBuyTicketDetail}
                    >
                      Đặt Ngay
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box
                    display="inline-flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    height="100%"
                  >
                    <Box position="relative" display="block">
                      <CircularProgress
                        variant="static"
                        size={100}
                        value={data.danhGia * 10}
                      />
                      <Box
                        top={0}
                        left={0}
                        bottom={0}
                        right={0}
                        position="absolute"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Typography
                          variant="caption"
                          component="div"
                          color="textSecondary"
                          className={classes.scoreReview}
                        >
                          {data.danhGia}
                        </Typography>
                      </Box>
                    </Box>
                    <RatingStar className={classes.ratingStar}>
                      {data.danhGia}
                    </RatingStar>
                  </Box>
                </Grid>
              </Grid>
            </div>
          </div>
        </Hidden>

        {/* 3 tabs: lich chieu; thong tin; danh gia */}
        <div
          className={
            matchBreakpoint
              ? `${classes.mainMaxWidthMobile}`
              : `${classes.sectionWidth} ${classes.mainMaxWidth}`
          }
        >
          <TabContext value={value}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="primary"
              centered
              aria-label="simple tabs example"
              TabIndicatorProps={{ className: classes.indicatorTop }}
            >
              <Tab
                label="Lịch Khởi Hành"
                value="1"
                className={
                  value === "1" ? classes.tabActive : classes.tabNormal
                }
                style={
                  matchBreakpoint ? { width: "33.33%" } : { width: "auto" }
                }
              />
              <Tab
                label="Thông tin"
                value="2"
                className={
                  value === "2" ? classes.tabActive : classes.tabNormal
                }
                style={
                  matchBreakpoint ? { width: "33.33%" } : { width: "auto" }
                }
              />
              <Tab
                label="Đánh giá"
                value="3"
                className={
                  value === "3" ? classes.tabActive : classes.tabNormal
                }
                style={
                  matchBreakpoint ? { width: "33.33%" } : { width: "auto" }
                }
              />
            </Tabs>

            {/* Lịch khởi hành tabs */}
            {value === "1" ? (
              <ShowTimeTab />
            ) : (
              <React.Fragment></React.Fragment>
            )}

            {/* Render thông tin driver */}
            {value === "2" && data ? (
              <TabPanel
                value="2"
                className={
                  matchBreakpoint
                    ? classes.tabPanelMobile
                    : classes.tabPanelDesktop
                }
              >
                <Hidden smUp>
                  <Card className={classes.cardRoot}>
                    <CardActionArea className={classes.cardActionArea}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={data.hinhAnh}
                        title="Contemplative Reptile"
                      />
                      <div className={classes.cardOverlay}>
                        <img
                          src={videoIcon}
                          alt="playButton"
                          onClick={handleClickOpenDialog}
                        />
                      </div>
                    </CardActionArea>
                  </Card>
                </Hidden>

                <Box px={2}>
                  <Grid container>
                    <Grid item sm={5} xs={12}>
                      <Hidden only="xs">
                        <Box>
                          <Grid container>
                            <Grid item sm={7}>
                              <Typography
                                variant="body1"
                                color="textPrimary"
                                style={{ marginRight: "5px" }}
                              >
                                Ngày Bắt Đầu:
                              </Typography>
                            </Grid>
                            <Grid item sm={5}>
                              <Typography variant="body1" color="textSecondary">
                                {new Date(
                                  data.ngayBatDau
                                ).toLocaleDateString("vi")}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Box>
                        <Box my={2}>
                          <Grid container>
                            <Grid item sm={7}>
                              <Typography
                                variant="body1"
                                color="textPrimary"
                                style={{ marginRight: "5px" }}
                              >
                                Định dạng:
                              </Typography>
                            </Grid>
                            <Grid item sm={5}>
                              <Typography variant="body1" color="textSecondary">
                                2D/Digital
                              </Typography>
                            </Grid>
                          </Grid>
                        </Box>
                        <Box my={2}>
                          <Grid container>
                            <Grid item sm={7}>
                              <Typography
                                variant="body1"
                                color="textPrimary"
                                style={{ marginRight: "5px" }}
                              >
                                Time:
                              </Typography>
                            </Grid>
                            <Grid item sm={5}>
                              <Typography variant="body1" color="textSecondary">
                                {`${data.heThongRapChieu[0].cumRapChieu[0].lichChieuPhim[0].thoiLuong} phút `}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Box>
                      </Hidden>
                      <Hidden smUp>
                        <Typography variant="h4" color="textPrimary">
                          {data.tenDriver}
                        </Typography>
                        <Box my={2}>
                          <Typography variant="body1" color="textSecondary">
                            {new Date(data.ngayBatDau).toLocaleDateString(
                              "vi"
                            )}{" "}
                            -{" "}
                            {`${data.heThongRapChieu[0].cumRapChieu[0].lichChieuPhim[0].thoiLuong} phút `}
                            - Square {data.danhGia}
                          </Typography>
                        </Box>
                      </Hidden>
                    </Grid>
                    <Grid item sm={7} xs={12}>
                      <Typography variant="body1" color="textPrimary">
                        Mô Tả
                      </Typography>
                      <br />
                      <Typography variant="body1" color="textSecondary">
                        {data.moTa}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </TabPanel>
            ) : (
              <React.Fragment></React.Fragment>
            )}

            {/* Render đánh giá tài xế */}
            {value === "3" ? (
              <ReviewTab data={data} matchBreakpoint={matchBreakpoint} />
            ) : (
              <React.Fragment></React.Fragment>
            )}
          </TabContext>
        </div>
        <DialogDriver />
      </div>
    );
  }
  return <React.Fragment></React.Fragment>;
}

const mapStateToProps = (state) => {
  return {
    data: state.detailPageReducer.data,
    listLogo: state.detailPageReducer.listLogo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    listDetailPageApi: (id) => {
      dispatch(actDetailPageApi(id));
    },
    changeDialogStatus: (data) => {
      dispatch(actChangeDialogStatus(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailDriverPage);
