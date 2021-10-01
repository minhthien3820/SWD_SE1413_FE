import { List, ListItem, makeStyles } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
  wrapListDate: {
    height: "90px",
    paddingLeft: "0!important",
    paddingRight: "0!important",
    backgroundColor: "transparent",
  },
  listDate: {
    display: "flex",
    width: "200%",
  },
  dateItem: {
    cursor: "pointer",
    width: "12.3%",
    textAlign: "center",
    color: theme.palette.text.primary,
    padding: 0,
    display: "block",
    background: "transparent!important",
    "& p": {
      fontSize: "14px",
      paddingTop: "9px",
      margin: 0,
    },
    "& span": {
      display: "block",
      fontSize: "20px",
    },
  },
  active: {
    color: theme.palette.action.selected,
  },
}));

const createDateArr = () => {
  let dateArr = [];
  let date = new Date();
  for (let i = 0; i < 13; i++) {
    let newDate;
    if (i === 0) {
      newDate = new Date(date.setDate(date.getDate()));
    } else {
      newDate = new Date(date.setDate(date.getDate() + 1));
    }
    dateArr.push(newDate);
  }
  return dateArr;
};

const renderDate = (matchBreakpoint, date) => {
  if (matchBreakpoint) {
    return date.getDay() === 0 ? "CN" : `Th${date.getDay() + 1}`;
  } else {
    return date.getDay() === 0 ? "CN" : `Thứ ${date.getDay() + 1}`;
  }
};

export default function DateBar(props) {
  const dateArray = createDateArr();
  const classes = useStyle();
  const selectedIndex = props.currentDateIndex;
  return (
    <div className={classes.wrapListDate}>
      <List className={classes.listDate}>
        {dateArray.map((date, index) => (
          <ListItem
            className={
              selectedIndex === index
                ? `${classes.dateItem} ${classes.active}`
                : classes.dateItem
            }
            key={`item-${index}`}
            component="li"
            selected={selectedIndex === index}
            onClick={() => {
              let day = date.getDate();
              props.handleClickDate({ index, day });
            }}
          >
            <p>{renderDate(props.matchBreakpoint, date)}</p>
            <span>{date.getDate()}</span>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
