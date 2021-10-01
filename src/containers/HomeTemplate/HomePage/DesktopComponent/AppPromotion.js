import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  background: {
    padding: "150px 0 240px 0",
    background: "url(./img/backapp.jpg)",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
  maxWidth: {
    maxWidth: "940px",
    margin: "auto",
    width: "90%",
  },
  gridItem: {
    paddingTop: "60px",
  },
  title: {
    fontSize: "xx-large",
    fontWeight: 600,
    color: "#fff",
  },
  text: {
    fontSize: "medium",
    color: "#fff",
  },
  img: {
    padding: "0 28%",
    height: "400px",
  },
}));

export default function AppPromotion() {
  const classes = useStyles();
  return (
    <div id="appPromotion">
      <Grid container>
        <Grid item xs={12} className={classes.background}>
          <div className={classes.maxWidth}>
            <Grid container>
              <Grid item xs={12} sm={6} className={classes.gridItem}>
                <Typography
                  variant="body1"
                  component="p"
                  className={classes.title}
                >
                  Ứng dụng tiện lợi dành cho người di chuyển
                </Typography>
                <br />
                <Typography
                  variant="body1"
                  component="p"
                  className={classes.text}
                >
                  Không chỉ đặt lịch, bạn còn có thể bình luận, chấm điểm tài xế
                  và đổi quà hấp dẫn.
                </Typography>
                <br />
                <Button variant="contained" color="primary">
                  App miễn phí - Tải về ngay!
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <img
                  src="img/mobile.png"
                  alt="mobile"
                  className={classes.img}
                />
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
