import {
  Avatar,
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "0px 20px",
    background: theme.palette.background.paper,
  },
  fullHeight: {
    minHeight: "705px",
    height: "705px",
  },
  listItem: {
    padding: "0px",
    paddingTop: "20px",
    paddingBottom: "15px",
    width: "100%",
    transition: "all 0.2s",
    cursor: "pointer",
  },
  avatarFilm: {
    width: "50px",
    height: "70px",
  },
  avatarCinema: {
    width: "70px",
    height: "70px",
  },
  itemText: {
    margin: 0,
    paddingLeft: 10,
    paddingTop: 6,
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
    marginTop: "15px",
  },
  ageLimit: {
    fontSize: "12px",
    backgroundColor: "#fb4226",
    borderRadius: "4px",
    padding: "0 5px",
    color: "#fff",
    minWidth: "33px",
    textAlign: "center",
    display: "inline-block",
    marginRight: "8px",
  },
  showTime: {
    color: theme.palette.showTimeGreen.contrastText,
    background: theme.palette.showTimeGreen.main,
    border: "1px solid #000",
    borderColor: theme.status.borderColor,
    transition: "all 0.2s",
    marginBottom: "10px",
    marginRight: "10px",
    "&:hover": {
      background: theme.palette.showTimeGreen.main,
      color: theme.status.red,
    },
  },
}));

export default function ShowTimeList(props) {
  const classes = useStyle();
  const history = useHistory();
  const { listShowTime } = props;
  const matchBreakpoint = useMediaQuery((theme) =>
    theme.breakpoints.down("xs")
  );
  console.log(listShowTime);
  const handleClickReserve = (id) => {
    const user = JSON.parse(localStorage.getItem("UserGuest"));
    if (user) {
      history.push(`/checkout/${id}`);
    } else history.push("/dang-nhap");
  };

  const renderShowTime = (listShowTimeItem) => {
    return listShowTimeItem
      .filter((item) => {
        return new Date(item.ngayDiGioDi).getDate() === 1;
      })
      .map((item) => {
        return (
          <Button
            variant="contained"
            className={classes.showTime}
            key={item.maLichChieu}
            onClick={() => {
              handleClickReserve(item.maLichChieu);
            }}
          >
            {new Date(item.ngayDiGioDi).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })}
          </Button>
        );
      });
  };

  return (
    <List
      className={
        matchBreakpoint ? classes.root : `${classes.root} ${classes.fullHeight}`
      }
    >
      {listShowTime &&
        listShowTime.map((driver, index) => {
          return (
            <React.Fragment key={index}>
              <ListItem alignItems="flex-start" className={classes.listItem}>
                <ListItemAvatar>
                  <Avatar
                    variant="square"
                    alt={driver.tenDriver || driver.Group}
                    src={
                      driver.hinhAnh ||
                      `https://dichvuxemientrung.com/wp-content/uploads/2021/04/taxi221.png`
                    }
                    className={
                      driver.tenDriver ? classes.avatarDriver : classes.avatarDriver1
                    }
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
                        {driver.tenDriver || driver.Group}
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
                        <span className={classes.ageLimit}>C18</span>
                        100 phút - TIX
                      </Typography>
                    </React.Fragment>
                  }
                  className={classes.itemText}
                />
              </ListItem>
              <div>
                <Typography
                  component="p"
                  color="textPrimary"
                  style={{ marginBottom: "10px" }}
                >
                  2D Digital
                </Typography>
                <Box display="flex" flexWrap="wrap">
                  {driver.lstLichChayTheoDriver
                    ? renderShowTime(driver.lstLichChayTheoDriver)
                    : renderShowTime(driver.lichChayDriver)}
                </Box>
              </div>
              <Divider
                // variant="middle"
                component="li"
                className={classes.divider}
              />
            </React.Fragment>
          );
        })}
    </List>
  );
}
