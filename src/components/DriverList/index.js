import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    minHeight: "705px",
    width: "100%",
    padding: 0,
    overflowY: "hidden",
    background: theme.palette.background.paper,
  },
  listItem: {
    padding: "20px",
    width: "100%",
    transition: "all 0.2s",
    cursor: "pointer",
    opacity: 0.5,
    "&:hover": {
      opacity: 1,
    },
  },
  listItemActive: {
    opacity: 1,
    background: "transparent!important",
  },
  avatar: {
    width: "50px",
    height: "50px",
  },
  itemText: {
    margin: 0,
    paddingLeft: 10,
  },
  address: {
    fontSize: 12,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    display: "block",
  },
  detail: {
    fontSize: 12,
    color: theme.status.red,
  },
  divider: {
    backgroundColor: "#ebebec",
    opacity: 0.5,
  },
}));

export default function DriverList(props) {
  const { listDriver, currentShowTime, handleDriverClick } = props;
  const classes = useStyle();
  let selectedIndex = currentShowTime;

  return (
    <List className={classes.root}>
      {listDriver &&
        listDriver.map((driver, index) => {
          return (
            <React.Fragment key={index}>
              <ListItem
                alignItems="flex-start"
                className={
                  selectedIndex === index
                    ? `${classes.listItemActive} ${classes.listItem}`
                    : classes.listItem
                }
                selected={selectedIndex === index}
                onClick={(event) => handleDriverClick(event, index)}
              >
                <ListItemAvatar>
                  <Avatar
                    variant="square"
                    alt="Remy Sharp"
                    src="https://dichvuxemientrung.com/wp-content/uploads/2021/04/taxi221.png"
                    className={classes.avatar}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        color="textPrimary"
                      >
                        {driver.Group}
                      </Typography>
                    </React.Fragment>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.address}
                        color="textSecondary"
                      >
                        {driver.diaChi}
                      </Typography>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.detail}
                      >
                        [chi tiết]
                      </Typography>
                    </React.Fragment>
                  }
                  className={classes.itemText}
                />
              </ListItem>
              <Divider
                variant="middle"
                component="li"
                className={classes.divider}
              />
            </React.Fragment>
          );
        })}
    </List>
  );
}
