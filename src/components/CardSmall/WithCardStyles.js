import { makeStyles } from "@material-ui/core";

export const WithCardStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: "10px 0px",
  },
  cardActtionArea: {
    display: "flex",
    outline: "none",
    "&:focus": {
      outline: "none",
    },
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100px",
    overflow: "hidden",
  },
  content: {
    overflow: "hidden",
    position: "relative",
  },
  image: {
    minWidth: "100px",
    // height: "100%",
  },
  cover: {
    height: 0,
    paddingTop: "100%",
    minWidth: "100px",
    borderRadius: "20px",
  },
  filmTitle: {
    fontSize: "16px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "clip",
    marginTop: "10px",
    marginBottom: "10px",
  },

  ageLimitButton: {
    maxHeight: "20px!important",
    marginRight: "8px",
    padding: "5px",
    fontSize: "13px",
    lineHeight: 0,
    minWidth: 35,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.shape.borderRadius,
  },
  timeFilm: {
    fontSize: "13px",
  },
  ticketButton: {
    position: "absolute",
    right: 1,
    top: "70%",
    transform: "translateY(-70%)",
    minWidth: "none",
    padding: "4px 8px",
    fontSize: "14px",
    textTransform: "uppercase",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "10",
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.shape.borderRadius,
  },
  newsTitle: {
    fontSize: "14px",
    width: "90%",
  },
  newsTopic: {
    fontSize: "12px",
    marginBottom: "5px",
    textTransform: "capitalize",
  },
}));
