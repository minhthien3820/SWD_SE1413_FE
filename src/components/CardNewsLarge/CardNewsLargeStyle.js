import { makeStyles } from "@material-ui/core/styles";
export const CardNewsLargeStyle = makeStyles({
  root: {
    margin: "15px",
    maxHeight: "400px",
    minHeight: "350px",
    borderRadius: "20px",
  },
  media: {
    height: 0,
    paddingTop: "40%",
    width: "100%",
  },
  actionArea: {
    "&:focus": {
      outline: "none",
    },
  },
  content: {
    width: "100%",
    overflow: "hidden",
    paddingRight: "15px",
  },
  title: {
    marginTop: "10px",
    marginBottom: "25px",
    overflow: "hidden",
    fontSize: "22px",
    textOverflow: "ellipsis",
    lineClamp: "3",
    boxOrient: "vertical",
    display: "-webkit-box",
  },
  para: {
    fontSize: "13px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    lineClamp: "3",
    boxOrient: "vertical",
    display: "-webkit-box",
  },
});
