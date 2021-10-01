import React from "react";
import { Switch } from "@material-ui/core";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import { connect } from "react-redux";
import { actChangeTheme } from "../modules/action";

function SwitchMode(props) {
  const { themeStatus, handleChangeTheme } = props;
  const handleOnChange = (event) => {
    handleChangeTheme(event.target.checked);
  };

  return (
    <React.Fragment>
      <WbSunnyIcon
        style={themeStatus ? { color: "#0000008a" } : { color: "#f57c00" }}
      />
      <Switch
        checked={props.themeStatus}
        onChange={handleOnChange}
        name="switchMode"
        color="default"
        inputProps={{ "aria-label": "checkbox" }}
      />
      <Brightness2Icon
        style={themeStatus ? { color: "#f57c00" } : { color: "#0000008a" }}
      />
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    themeStatus: state.changeThemeReducer.themeStatus,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeTheme: (status) => {
      dispatch(actChangeTheme(status));
      localStorage.setItem("themeStatus", JSON.stringify(status));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SwitchMode);
