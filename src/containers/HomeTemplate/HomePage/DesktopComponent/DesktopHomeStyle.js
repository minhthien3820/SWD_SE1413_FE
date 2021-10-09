import { makeStyles } from "@material-ui/core";

export const DesktopHomeStyle = makeStyles((theme) => ({
  // carouselTabDriver
  taixe: {
    paddingTop: "75px",
  },
  tabNormal: {
    backgroundColor: "transparent",
    textTransform: "capitalize",
    border: "none",
    transition: "all .2s",
    lineHeight: "24px",
    height: "24px",
    fontSize: "16px",
    "&:hover": {
      fontSize: "20px",
    },
  },
  tabActive: {
    backgroundColor: "transparent",
    textTransform: "capitalize",
    border: "none",
    transition: "all .2s",
    lineHeight: "24px",
    height: "24px",
    fontSize: "20px",
  },
  cinemaSection: {
    padding: "120px 0px",
    display: "flex",
    maxWidth: "940px",
    margin: "auto",
    width: "90%",
  },
  cinemaScrollBar: {
    height: "705px!important",
    width: "30%!important",
    borderTop: "1px solid #ebebec",
    borderBottom: "1px solid #ebebec",
    background: theme.palette.background.paper,
  },
  showTimeScrollBar: {
    height: "705px!important",
    width: "calc(100% - 30% - 92px)!important",
    border: "1px solid #ebebec",
    borderTopRightRadius: theme.shape.borderRadius,
    borderBottomRightRadius: theme.shape.borderRadius,
    background: theme.palette.background.paper,
  },
}));
