import React from "react";
import { Box, Typography, CardContent } from "@material-ui/core";
import { WithCardStyles } from "./WithCardStyles";

export default function CardSmallDriver(props) {
  const classes = WithCardStyles();
  const { item } = props;
  return (
    <CardContent className={classes.content}>
      <Typography component="h5" variant="h5" className={classes.driverTitle}>
        {item.title}
      </Typography>
      <Box display="flex">
        <span className={classes.ageLimitButton}>C18</span>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          className={classes.timeDriver}
        >
          0p - TIMXE {item.rating}
        </Typography>
      </Box>
      <span className={classes.ticketButton}>Đặt Ngay</span>
    </CardContent>
  );
}
