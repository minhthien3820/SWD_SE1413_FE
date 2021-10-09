import React, { useState } from "react";
import CarouselDriverComing from "../../../../components/CarouselDriver/CarouselDriverComing";
import CarouselDriverNow from "../../../../components/CarouselDriver/CarouselDriverNow";
import WithCarouselDriver from "../../../../components/CarouselDriver/WithCarouselDriver";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { TabContext, TabPanel } from "@material-ui/lab";
import { DesktopHomeStyle } from "./DesktopHomeStyle";
import { connect } from "react-redux";
import { actListDriverApi } from "../modules/ListDriver/action";

const DriverNow = WithCarouselDriver(CarouselDriverNow);
const DriverComing = WithCarouselDriver(CarouselDriverComing);

function CarouselDriverTab(props) {
  const classes = DesktopHomeStyle();
  const [value, setValue] = useState("now");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (!props.listDriverComing) {
      props.changeCarousel(newValue);
    }
  };
// carouselTabDriver
  return (
    <div id="taixe" className={classes.taixe}>
      <TabContext value={value}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          centered
          aria-label="driver tabs"
        >
          <Tab
            label="Hiện Có"
            value="now"
            className={value === "now" ? classes.tabActive : classes.tabNormal}
          />
          <Tab
            label="Sắp tham gia"
            value="coming"
            className={
              value === "coming" ? classes.tabActive : classes.tabNormal
            }
          />
        </Tabs>
        <TabPanel value="now">
          <DriverNow listDriver={props.listDriverNow} />
        </TabPanel>
        <TabPanel value="coming">
          <DriverComing listDriver={props.listDriverComing} />
        </TabPanel>
      </TabContext>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeCarousel: (newValue) => {
      dispatch(actListDriverApi(newValue));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    listDriverNow: state.listDriverReducer.listDriverNow,
    listDriverComing: state.listDriverReducer.listDriverComing,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CarouselDriverTab);
