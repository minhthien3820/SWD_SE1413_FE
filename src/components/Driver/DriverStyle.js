import { makeStyles } from "@material-ui/core/styles";
export const driverStyles = makeStyles((theme) => ({
  root: {
    margin: "15px",
    minHeight: "0px",
    borderRadius: "20px",
  },
  media: {
    height: 0,
    paddingTop: "150%",
    width: "100%",
  },
  actionArea: {
    position: "relative",
    "&:focus": {
      outline: "none",
    },
  },
  content: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "70%",
    overflow: "hidden",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(to top, black, transparent)",
  },
  buttonAge: {
    padding: "5px",
    fontSize: "13px",
    lineHeight: 0,
    minWidth: 35,
    marginRight: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.shape.borderRadius,
  },
  title: {
    marginTop: "10px",
    marginBottom: "25px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: "#fff",
  },
  ticketButton: {
    position: "absolute",
    right: 0,
    bottom: 0,
    padding: "6px 12px",
    fontSize: "14px",
    textTransform: "uppercase",
    marginBottom: "25px",
    marginRight: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "10",
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.shape.borderRadius,
  },
  score: {
    backgroundColor: "rgba(12,27,54,.8)",
    border: "1px solid #1f2e46",
    top: "15px",
    right: "15px",
    color: "rgba(255,255,255,.7)",
    width: "54px",
    textAlign: "center",
    lineHeight: 1.1,
    position: "absolute",
    padding: "0px",
    fontSize: "16px",
    borderRadius: theme.shape.borderRadius,
  },
  dayStart: {
    backgroundColor: "rgba(12,27,54,.8)",
    border: "1px solid #1f2e46",
    bottom: "15px",
    right: "15px",
    color: "rgba(255,255,255,.7)",
    minWidth: "54px",
    textAlign: "center",
    lineHeight: 1.1,
    position: "absolute",
    padding: "5px",
    fontSize: "12px",
    borderRadius: theme.shape.borderRadius,
    letterSpacing: "1px",
  },
}));
