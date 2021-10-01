import React from "react";
import { WithCardStyles } from "./WithCardStyles";

import { CardMedia, Card, CardActionArea } from "@material-ui/core";

export default function WithCard(Component) {
  return function (props) {
    const classes = WithCardStyles();
    return (
      <Card className={classes.root}>
        <CardActionArea className={classes.cardActtionArea}>
          <div className={classes.image}>
            <CardMedia
              className={classes.cover}
              image={props.data.imageLink}
              title={props.data.imageLink}
            />
          </div>
          <div className={classes.details}>
            <Component item={props.data} />
          </div>
        </CardActionArea>
      </Card>
    );
  };
}
