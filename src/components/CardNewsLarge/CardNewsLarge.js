import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { CardNewsLargeStyle } from "./CardNewsLargeStyle";

export default function CardNewsLarge(props) {
  const classes = CardNewsLargeStyle();
  const { data } = props;
  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardActionArea className={classes.actionArea}>
          <CardMedia
            className={classes.media}
            image={data.imageLink}
            title={data.title}
          />
          <CardContent className={classes.content}>
            <Typography
              gutterBottom
              variant="h5"
              color="textPrimary"
              component="h2"
              className={classes.title}
            >
              {data.title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.para}
            >
              {data.para}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </React.Fragment>
  );
}
