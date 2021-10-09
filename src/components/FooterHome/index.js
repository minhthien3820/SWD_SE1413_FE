import React from "react";
import {
  Avatar,
  Box,
  Divider,
  Grid,
  Hidden,
  Link,
  makeStyles,
} from "@material-ui/core";
import AGRIBANK from "./../../assets/img/AGRIBANK.png";
import STARLIGHT from "./../../assets/img/STARLIGHT.png";
import zaloIcon from "./../../assets/img/zalopay_icon.png";
import payoo from "./../../assets/img/payoo.jpg";
import VCB from "./../../assets/img/VCB.png";
import VIETTINBANK from "./../../assets/img/VIETTINBANK.png";
import IVB from "./../../assets/img/IVB.png";
import go from "./../../assets/img/123go.png";
import laban from "./../../assets/img/laban.png";
import apple from "./../../assets/img/apple-logo.png";
import android from "./../../assets/img/android-logo.png";
import facebook from "./../../assets/img/facebook-logo.png";
import zalo from "./../../assets/img/zalo-logo.png";
import mailinh from "./../../assets/img/mailinh.png";
import vinasuntaxi from "./../../assets/img/VinasunTaxi.png";
import grab from "./../../assets/img/grab.jpg";
import uber from "./../../assets/img/uber.jpg";
import suntaxi from "./../../assets/img/sunTaxi.jpg";
import saomai from "./../../assets/img/saomai.jpg";
import real from "./../../assets/img/Real.png";
import redstart from "./../../assets/img/redstart.png";
import lado from "./../../assets/img/lado.jpg";
import tiensa from "./../../assets/img/tiensa.png";
import thubon from "./../../assets/img/thubon.jpg";
import chungnhan from "./../../assets/img/chungnhan.png"



const useStyles = makeStyles(() => ({
  footer: {
    backgroundColor: "#222",
    paddingTop: "20px",
    paddingBottom: "20px",
    color: "#949494",
  },
  container: {
    maxWidth: "940px",
    float: "none",
    margin: "auto",
    fontFamily: "font-family: 'SF Text Regular'",
  },
  link: {
    fontSize: "12px",
    fontWeight: "700",
    whiteSpace: "nowrap",
    color: "#949494",
    display: "block",
    transition: "all .2s",
    lineHeight: "2.3",
    textAlign: "center",
    "&:hover": {
      color: "#fff",
      textDecoration: "none",
    },
  },
  avatar: {
    width: "30px",
    height: "30px",
    marginRight: "15px",
    transition: "all .2s",
    "&:hover": {
      opacity: ".7",
    },
  },
  title: {
    color: "#fff",
    fontSize: "80%",
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: "bold",
    padding: "0px 10px",
  },
  partnerRow: {
    marginBottom: "15px",
    paddingLeft: "0px",
    paddingRight: "0px",
  },
  divider: {
    margin: "20px 0px",
    borderTop: "1px solid #4a4a4a",
  },
}));

export default function FooterHome() {
  const classes = useStyles();
  return (
    <Hidden only="xs">
      <div className={classes.footer}>
        <div className={classes.container}>
          <Grid container>
            <Grid item xs={12} sm={4} m={2}>
              <p className={classes.title}>Square</p>
              <Box mb={4}>
                <Grid container>
                  <Grid item md={6} sm={12} xs={6}>
                    <Link href="" className={classes.link}>
                      FAQ
                    </Link>
                    <Link href="" className={classes.link}>
                      Brand Guidelines
                    </Link>
                  </Grid>
                  <Grid item md={6} sm={12} xs={6}>
                    <Link href="" className={classes.link}>
                      Thỏa thuận sử dụng
                    </Link>
                    <Link href="" className={classes.link}>
                      Chính sách bảo mật
                    </Link>
                  </Grid>
                  <img width="300" height="100" src={chungnhan} />
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <p className={classes.title}>Đối tác</p>
              <Box
                display="flex"
                justifyContent="center"
                flexDirection="row"
                className={classes.partnerRow}
              >
                <Link href="https://mailinh.vn/" target="_blank">
                  <Avatar
                    alt="mailinh"
                    src={mailinh}
                    style={{ background: "#fff" }}
                    className={classes.avatar}
                  />
                </Link>
                <Link href="http://www.vinasuntaxi.com/" target="_blank">
                  <Avatar alt="vinasuntaxi" src={vinasuntaxi} className={classes.avatar} />
                </Link>
                <Link href="https://www.uber.com/" target="_blank">
                  <Avatar
                    alt="uber"
                    src={uber}
                    className={classes.avatar}
                  />
                </Link>
                <Link href="https://www.grab.com/vn" target="_blank">
                  <Avatar
                    alt="grab"
                    src={grab}
                    className={classes.avatar}
                  />
                </Link>
                <Link href="https://taxisaomai.vn/" target="_blank">
                  <Avatar alt="saomai" src={saomai} className={classes.avatar} />
                </Link>
              </Box>
              <Box
                justifyContent="center"
                display="flex"
                flexDirection="row"
                className={classes.partnerRow}
              >
                <Link href="http://www.vinasuntaxi.com/" target="_blank">
                  <Avatar
                    alt="suntaxi"
                    src={suntaxi}
                    className={classes.avatar}
                  />
                </Link>

                <Link href="http://phuhoangcorp.vn/" target="_blank">
                  <Avatar alt="tiensa" src={tiensa} className={classes.avatar} />
                </Link>
                <Link href="https://www.realmadrid.com/en" target="_blank">
                  <Avatar
                    alt="real"
                    src={real}
                    className={classes.avatar}
                  />
                </Link>
                <Link href="https://lienminhtaxiviet.com/hang-taxi-red-star-lam-dong/" target="_blank">
                  <Avatar alt="redstart" src={redstart} className={classes.avatar} />
                </Link>
                <Link href="http://ladotaxi.com/" target="_blank">
                  <Avatar alt="lado" src={lado} className={classes.avatar} />
                </Link>
              </Box>
              <Box
                justifyContent="center"
                display="flex"
                flexDirection="row"
                className={classes.partnerRow}
              >
                <Link href="https://starlight.vn/" target="_blank">
                  <Avatar
                    alt="starlight"
                    src={STARLIGHT}
                    className={classes.avatar}
                  />
                </Link>

                <Link href="https://dichvuxemientrung.com/dich-vu-xe/tong-dai-taxi-thu-bon-duy-xuyen.html" target="_blank">
                  <Avatar alt="thubon" src={thubon} className={classes.avatar} />
                </Link>
                <Link href="https://zalopay.vn/" target="_blank">
                  <Avatar
                    alt="zalopay"
                    src={zaloIcon}
                    className={classes.avatar}
                  />
                </Link>
                <Link href="https://www.payoo.vn/" target="_blank">
                  <Avatar alt="payoo" src={payoo} className={classes.avatar} />
                </Link>
                <Link href="https://portal.vietcombank.com.vn/" target="_blank">
                  <Avatar
                    alt="vietcombank"
                    src={VCB}
                    className={classes.avatar}
                  />
                </Link>
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                flexDirection="row"
                mb={4}
              >
                <Link href="https://www.agribank.com.vn/" target="_blank">
                  <Avatar
                    alt="agribank"
                    src={AGRIBANK}
                    className={classes.avatar}
                  />
                </Link>

                <Link
                  href="https://www.vietinbank.vn/web/home/vn/index.html"
                  target="_blank"
                >
                  <Avatar
                    alt="viettinbank"
                    src={VIETTINBANK}
                    className={classes.avatar}
                  />
                </Link>
                <Link href="https://www.indovinabank.com.vn/" target="_blank">
                  <Avatar alt="indovi" src={IVB} className={classes.avatar} />
                </Link>
                <Link href="https://webv3.123go.vn/" target="_blank">
                  <Avatar alt="123go" src={go} className={classes.avatar} />
                </Link>
                <Link href="https://laban.vn/" target="_blank">
                  <Avatar alt="laban" src={laban} className={classes.avatar} />
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Grid container>
                <Grid item md={6} sm={12} xs={6}>
                  <p className={classes.title}>mobile app</p>
                  <Box display="flex" justifyContent="center" mb={2}>
                    <Link
                      href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197"
                      target="_blank"
                    >
                      <Avatar
                        style={{ margin: "5px" }}
                        alt="apple"
                        src={apple}
                        className={classes.avatar}
                      />
                    </Link>
                    <Link
                      href="https://play.google.com/store/apps/details?id=com.mcentric.mcclient.MyMadrid"
                      target="_blank"
                    >
                      <Avatar
                        style={{ margin: "5px" }}
                        alt="android"
                        src={android}
                        className={classes.avatar}
                      />
                    </Link>
                  </Box>
                </Grid>
                <Grid item md={6} sm={12} xs={6}>
                  <p className={classes.title}>social</p>
                  <Box display="flex" justifyContent="center">
                    <Link
                      href="https://www.facebook.com/minhthien3820/"
                      target="_blank"
                    >
                      <Avatar
                        alt="facebook"
                        src={facebook}
                        className={classes.avatar}
                        style={{ margin: "5px" }}
                      />
                    </Link>
                    <Link href="https://zalo.me/0795514128" target="_blank">
                      <Avatar
                        alt="zalo"
                        src={zalo}
                        className={classes.avatar}
                        style={{ margin: "5px" }}
                      />
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Divider className={classes.divider} />
          <p className={classes.title}>
          Copyright © 2021 - TimXe.net
          </p>
        </div>
      </div>
    </Hidden>
  );
}
