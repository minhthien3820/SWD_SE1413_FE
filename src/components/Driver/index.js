import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import { driverStyles } from "./DriverStyle";
import { Link } from "react-router-dom";
import RatingStar from "../RatingStar";

export default function Driver(props) {
  const classes = driverStyles();
  const { driver, type } = props;
  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardActionArea
          className={classes.actionArea}
          component={Link}
          to={`/driver/${driver.maDriver}`}
        >
          <CardMedia
            className={classes.media}
            image={driver.hinhAnh}
            title="Contemplative Reptile"
          />
          <div className={classes.overlay}></div>
          {type === "beingSold" ? (
            <React.Fragment>
              <CardContent className={classes.content}>
                <Box display="flex">
                  <span className={classes.buttonAge}>C18</span>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{ textTransform: "uppercase", color: "#fff" }}
                  >
                    Đang Có
                  </Typography>
                </Box>
                <Typography
                  gutterBottom
                  variant="h5"
                  color="textPrimary"
                  component="h2"
                  className={classes.title}
                >
                  {driver.tenDriver}
                </Typography>
              </CardContent>
              <span className={classes.ticketButton}>Đặt Ngay</span>
              <span className={classes.score}>
                {driver.danhGia}
                <RatingStar>{driver.danhGia}</RatingStar>
              </span>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <span className={classes.dayStart}>
                {new Date(driver.ngayBatDau).toLocaleDateString("VI", {
                  day: "2-digit",
                  month: "2-digit",
                })}
              </span>
            </React.Fragment>
          )}
        </CardActionArea>
      </Card>
    </React.Fragment>
  );
}
