import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    height: "705px",
    minWidth: "92px",
    border: "1px solid #ebebec",
    borderTopLeftRadius: theme.shape.borderRadius,
    borderBottomLeftRadius: theme.shape.borderRadius,
    padding: 0,
    background: theme.palette.background.paper,
  },
  listItem: {
    padding: "20px",
    transition: "all 0.2s",
    cursor: "pointer",
    opacity: 0.5,
    "&:hover": {
      opacity: 1,
    },
  },
  listItemActive: {
    background: "transparent!important",
    opacity: 1,
  },
  avatar: {
    width: "50px",
    height: "50px",
  },
  divider: {
    backgroundColor: "#ebebec",
    opacity: 0.5,
  },
}));

export default function LogoDriver(props) {
  const classes = useStyle();
  const { listLogo, handleLogoClick, currentLogo } = props;
  const selectedIndex = currentLogo;

  const renderLogoDriver = () => {
    if (listLogo && listLogo.length > 0) {
      return listLogo.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <ListItem
              className={
                selectedIndex === index
                  ? `${classes.listItemActive} ${classes.listItem}`
                  : classes.listItem
              }
              selected={selectedIndex === index}
              onClick={(event) => handleLogoClick(event, index)}
            >
              <Avatar
                alt={item.tenGroup}
                src={item.lgo}
                className={classes.avatar}
              />
              {props.detailPage ? (
                <ListItemText
                  primary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        color="textPrimary"
                        style={{ marginLeft: "10px" }}
                      >
                        {item.tenGroup}
                      </Typography>
                    </React.Fragment>
                  }
                />
              ) : (
                <React.Fragment></React.Fragment>
              )}
            </ListItem>
            <Divider
              variant="middle"
              component="li"
              className={classes.divider}
            />
          </React.Fragment>
        );
      });
    }
  };

  return <List className={classes.root}>{renderLogoDriver()}</List>;
}
