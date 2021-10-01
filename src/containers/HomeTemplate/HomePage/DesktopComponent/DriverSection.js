import React from "react";
import { DesktopHomeStyle } from "./DesktopHomeStyle";
import LogoDriver from "../../../../components/LogoDriver";
import DriverList from "../../../../components/DriverList";
import ShowTimeList from "../../../../components/ShowTimeList";
import { CustomScrollbars } from "../../../../components/ScrollBar";
import { connect } from "react-redux";
import {
  actChangeDriverList,
  actChangeShowTimeList,
} from "../modules/ListShowTime/action";

function DriverSection(props) {
  const classes = DesktopHomeStyle();
  const {
    listShowTime,
    listLogo,
    currentLogo,
    listDriver,
    currentShowTime,
  } = props;

  const handleLogoClick = (event, index) => {
    props.changeListDriver(index);
  };

  const handleDriverClick = (event, index) => {
    props.changeShowTime(index);
  };
  // group
  return (
    <div id="datngay" className={classes.driverSection}> 
      <LogoDriver
        listLogo={listLogo}
        handleLogoClick={handleLogoClick}
        currentLogo={currentLogo}
      />
      <CustomScrollbars className={classes.driverScrollBar}>
        <DriverList
          listDriver={listDriver}
          currentShowTime={currentShowTime}
          handleDriverClick={handleDriverClick}
        />
      </CustomScrollbars>
      <CustomScrollbars className={classes.showTimeScrollBar}>
        <ShowTimeList listShowTime={listShowTime} />
      </CustomScrollbars>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    listShowTime: state.listShowTimeReducer.listShowTime,
    listLogo: state.listShowTimeReducer.listLogo,
    currentLogo: state.listShowTimeReducer.currentLogo,
    listDriver: state.listShowTimeReducer.listDriver,
    currentShowTime: state.listShowTimeReducer.currentShowTime,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeListDriver: (driverIndex) => {
      dispatch(actChangeDriverList(driverIndex));
    },
    changeShowTime: (currentIndex) => {
      dispatch(actChangeShowTimeList(currentIndex));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DriverSection);
