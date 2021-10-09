import { InputBase, makeStyles, withStyles, fade } from "@material-ui/core";

export const UserStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    margin: "20px 0 20px",
    padding: "10px",
    paddingTop: "20px",
    paddingBottom: "20px",
    maxWidth: "700px",
    borderRadius: "10px",
  },
  content: {
    "& p": {
      color: theme.palette.text.secondary,
      margin: "5px 0px",
      fontSize: "0.8rem",
    },
    "& h5": {
      fontSize: "1.2rem",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "clip",
      marginTop: "10px",
      marginBottom: "10px",
    },
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: "20px",
    margin: "10px",
  },

  ageLimitButton: {
    maxHeight: "20px!important",
    marginRight: "8px",
    padding: "5px",
    fontSize: "13px",
    lineHeight: 0,
    minWidth: 35,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.shape.borderRadius,
  },
  formControl: {
    width: "95%",
    height: "90px",
  },
  label: {
    fontSize: "16px",
    marginBottom: "15px",
  },
  error: {
    color: "red",
    marginTop: "5px",
  },
}));

export const NewInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    color: "black",
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "100%",
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);
