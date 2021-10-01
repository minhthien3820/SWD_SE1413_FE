import React from "react";
import { WithCardStyles } from "./WithCardStyles";
import { Typography, CardContent } from "@material-ui/core";

export default function CardSmallNews(props) {
  const classes = WithCardStyles();
  return (
    <CardContent className={classes.content}>
      <Typography
        variant="subtitle1"
        color="textSecondary"
        className={classes.newsTopic}
      >
        {props.item.type}
      </Typography>
      <Typography
        component="h5"
        variant="h5"
        color="textPrimary"
        className={classes.newsTitle}
      >
        {props.item.title}
      </Typography>
    </CardContent>
  );
}
